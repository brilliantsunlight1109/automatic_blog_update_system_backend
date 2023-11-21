const User = require("../Models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

module.exports.Signup = async (req, res, next) => {
	try {
		const {
			email,
			password,
			confirm_password,
			username,
			style_tokyo_id,
			salon_id,
			salon_password,
			salon_confirm_password,
			createdAt,
		} = req.body;
		if (
			!email ||
			!password ||
			!confirm_password ||
			!username ||
			!style_tokyo_id ||
			!salon_id ||
			!salon_password ||
			!salon_confirm_password
		) {
			return res.json({ message: "すべての項目は必須です。" });
		}
		if (!email.includes("@")) {
			return res.json({ message: "電子メールには@を含める必要があります。" });
		}
		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.json({ message: "メールは既に存在します。" });
		}
		const existingUsername = await User.findOne({ username });
		if (existingUsername) {
			return res.json({ message: "ユーザー名は既に存在します。" });
		}
		const existingStyleTokyoId = await User.findOne({ style_tokyo_id });
		if (existingStyleTokyoId) {
			return res.json({ message: "IDはすでに存在します。" });
		}
		const existingSalon_id = await User.findOne({ salon_id });
		if (existingSalon_id) {
			return res.json({ message: "Salon Board IDはすでに存在します。" });
		}
		if (password != confirm_password) {
			return res.json({ message: "確認パスワードを正確に入力してください。" });
		}
		if (salon_password != salon_confirm_password) {
			return res.json({
				message: "Salon Board 確認パスワードを正確に入力してください。",
			});
		}
		const permission = "not";
		const user = await User.create({
			email,
			password,
			username,
			style_tokyo_id,
			salon_id,
			salon_password,
			permission,
			createdAt,
		});
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
			return res.json({ message: "すべての項目は必須です。" });
		}
		if (!email.includes("@")) {
			return res.json({ message: "電子メールには@を含める必要があります。" });
		}
		const user = await User.findOne({ email });
		if (!user) {
			return res.json({ message: "メールは登録されていません。" });
		}
		const auth = await bcrypt.compare(password, user.password);
		if (!auth) {
			return res.json({ message: "パスワードを正確に入力してください。" });
		}
		if (user.permission === "not") {
			return res.json({
				message: "あなたは権限がありません。",
			});
		} else if (user.permission === "user" || user.permission === "manager") {
			const token = createSecretToken(user._id);
			res.cookie("token", token, {
				withCredentials: true,
				httpOnly: false,
			});
			res
				.status(200)
				.json({ message: "正確にログインしています。", success: true });
		} else {
			return res.json({
				message: "管理部にお問い合わせください。",
			});
		}
		next();
	} catch (error) {
		console.error(error);
	}
};
