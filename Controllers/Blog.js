const Blog = require("../Models/Blog");

module.exports.getAllBlog = (req, res) => {
	Blog.find()
		.then((data) => res.json(data))
		.catch((err) =>
			res.status(404).json({ message: "Blog not find", error: err.message })
		);
};

module.exports.getIdBlog = (req, res) => {
	const id = req.params.id;
	Blog.findById(id)
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

module.exports.postCreateBlog = (req, res) => {
	Blog.create(req.body)
		.then((data) => res.json({ message: "Blog added successfully", data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Failed to add Blog", error: err.message })
		);
};

module.exports.putUpdateBlog = (req, res) => {
	Blog.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: "updated successfully", data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Failed to update Blog", error: err.message })
		);
};

module.exports.deleteBlog = (req, res) => {
	Blog.findByIdAndDelete(req.params.id, req.body)
		.then((data) => res.json({ message: "Blog deleted successfully", data }))
		.catch((err) => {
			res.status(404).json({ message: "book not found", error: err.message });
		});
};
