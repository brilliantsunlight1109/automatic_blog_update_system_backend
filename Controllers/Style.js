const Style = require("../Models/Style");

module.exports.getAllStyle = (req, res) => {
	Style.find()
		.then((data) => res.json(data))
		.catch((err) =>
			res.status(404).json({ message: "Style not find", error: err.message })
		);
};

module.exports.getIdStyle = (req, res) => {
	const id = req.params.id;
	Style.findById(id)
	.then((data)=>{
		if(!data) {
			return res.status(404).json({message: "Style not found"});
		}
		res.json(data);
	})
	.catch((err) => {
		res.status(500).json({message: "Error fetching style", error: err.message})
	})
}

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
	Style.findByIdAndDelete(req.params.id, req.body)
		.then((data) => res.json({ message: "Style deleted successfully", data }))
		.catch((err) => {
			res.status(404).json({ message: "book not found", error: err.message });
		});
};
