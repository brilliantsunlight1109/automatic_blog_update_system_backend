const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res, next) => {
	try {
		const { email, password, confirm_password, username, createdAt } = req.body;
		if (!email || !password || !confirm_password || !username) {
			return res.json({ message: "すべてのフィールドは必須です。" });
		}
		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.json({ message: "メールは既に存在します。" });
		}
		const existingUsername = await User.findOne({ username });
		if (existingUsername) {
			return res.json({ message: "ユーザー名は既に存在します。" });
		}
		if (password != confirm_password) {
			return res.json({ message: "確認パスワードを正確に入力してください。" });
		}
		if (!email.includes("@")) {
			return res.json({ message: "電子メールには@を含める必要があります。" });
		}
		const user = await User.create({ email, password, username, createdAt });
		const token = createSecretToken(user._id);
		res.cookie("token", token, {
			withCredentials: true,
			httpOnly: false,
		});
		res
			.status(201)
			.json({ message: "ユーザ登録に成功しました。", success: true, user });
		next();
	} catch (error) {
		console.error(error);
	}
};

module.exports.Login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.json({ message: "すべてのフィールドは必須です。" });
		}
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({ message: "メールは登録されていません。" });
		}
		const auth = await bcrypt.compare(password, user.password);
		if (!auth) {
			return res.json({ message: "パスワードを正確に入力してください。" });
		}
		const token = createSecretToken(user._id);
		res.cookie("token", token, {
			withCredentials: true,
			httpOnly: false,
		});
		res
			.status(200)
			.json({ message: "正確にログインしています。", success: true });
		next();
	} catch (error) {
		console.error(error);
	}
};
