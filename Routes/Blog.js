const express = require("express");
const router = express.Router();

const {
	getAllBlog,
	postCreateBlog,
	putUpdateBlog,
	deleteBlog,
	getIdBlog,
} = require("../Controllers/Blog");

router.get("/", getAllBlog);
router.get("/:id", getIdBlog);
router.post("/", postCreateBlog);
router.put("/:id", putUpdateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
