const Style = require("../Models/Style");

module.exports.getAllStyle = (req, res) => {
	Style.find()
		.then((data) => res.json(data))
		.catch((err) =>
			res.status(404).json({ message: "Style not find", error: err.message })
		);
};

module.exports.postCreateStyle = (req, res) => {
	Style.create(req.body)
		.then((data) => res.json({ message: "Style added successfully", data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Failed to add style", error: err.message })
		);
};

module.exports.putUpdateStyle = (req, res) => {
	Style.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: "updated successfully", data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Failed to update style", error: err.message })
		);
};

module.exports.deleteStyle = (req, res) => {
	Style.findByIdAndRemove(req.params.id, req.body)
		.then((data) => res.json({ message: "Style deleted successfully", data }))
		.catch((err) => {
			res.status(404).json({ message: "book not found", error: err.message });
		});
};
