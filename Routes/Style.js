const express = require("express");
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./images");
	},
	filename: function (req, file, cb) {
		cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
// const upload = multer({ storage, fileFilter });

const upload = multer({ storage, fileFilter }).fields([
	{ name: "selectedImage1", maxCount: 1 },
	{ name: "selectedImage2", maxCount: 1 },
	{ name: "selectedImage3", maxCount: 1 },
]);

const {
	getAllStyle,
	postCreateStyle,
	putUpdateStyle,
	deleteStyle,
	getIdStyle,
} = require("../Controllers/Style");

router.get("/", getAllStyle);
router.get("/:id", getIdStyle);
router.post("/", upload, postCreateStyle);
router.put("/:id", upload, putUpdateStyle);
router.delete("/:id", deleteStyle);

module.exports = router;
