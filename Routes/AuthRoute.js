const { Signup, Login } = require("../Controllers/AuthController");
const {
	GeneralSetting,
	putUpdateSetting,
	getIdSetting,
} = require("../Controllers/Setting");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/", GeneralSetting);
router.put("/:id", putUpdateSetting);
router.get("/:id", getIdSetting);

module.exports = router;
