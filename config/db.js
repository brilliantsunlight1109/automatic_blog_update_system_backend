const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URL;

const connectDB = async () => {
	try{
		await mongoose.connect(db, {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
		})
		console.log("MongoDB is connect");
	} catch(err){
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;

