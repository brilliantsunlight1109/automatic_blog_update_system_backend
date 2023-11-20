const express = require("express");
const router = express.Router();

const {
	getAllStyle,
	postCreateStyle,
	putUpdateStyle,
	deleteStyle,
	getIdStyle,
} = require("../Controllers/Style");

router.get("/", getAllStyle);
router.get("/:id", getIdStyle);
router.post("/", postCreateStyle);
router.put("/:id", putUpdateStyle);
router.delete("/:id", deleteStyle);

module.exports = router;
