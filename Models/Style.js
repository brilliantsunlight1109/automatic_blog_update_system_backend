const mongoose = require("mongoose");

const StyleSchema = new mongoose.Schema({
	internal_memo: {
		type: String,
		required: true,
	},
	stylist_comment: {
		type: String,
		required: true,
	},
	style_name: {
		type: String,
		required: true,
	},
	styling_arrangement_point: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Style = mongoose.model("style", StyleSchema);

module.exports = Style;
