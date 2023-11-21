const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

module.exports.GeneralSetting = (req, res) => {
	User.find()
		.then((data) => res.json(data))
		.catch((err) =>
			res.status(404).json({ message: "User not fing", error: err.message })
		);
};

module.exports.putUpdateSetting = async (req, res) => {
	if (req.body.password) {
		if (req.body.password !== req.body.confirm_password) {
			return res.json({ message: "確認パスワードを正確に入力してください" });
		}
		req.body.password = await bcrypt.hash(req.body.password, 12);
	}
	if (req.body.salon_password) {
		if (req.body.salon_password !== req.body.salon_confirm_password) {
			return res.json({
				message: "Salon Board 確認パスワードを正確に入力してください。",
			});
		}
		req.body.salon_password = await bcrypt.hash(req.body.salon_password, 12);
	}

	User.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: "Updated successfully", data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Failed to update style", error: err.message })
		);
};

module.exports.getIdSetting = (req, res) => {
	const id = req.params.id;
	User.findById(id)
		.then((data) => {
			if (!data) {
				return res.status(404).json({ message: "Blog not found" });
			}
			res.json(data);
		})
		.catch((err) => {
			res
				.status(500)
				.json({ message: "Error fetching Blog", error: err.message });
		});
};
