const express = require("express");
const connectDB = require("./config/db");
connectDB();
const Style = require("./Routes/Style");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);
app.use(cookieParser());

// app.use(express.json());
app.use(express.json({ limit: "50mb" }));

app.use("/", authRoute);

app.use("/api/style", Style);
