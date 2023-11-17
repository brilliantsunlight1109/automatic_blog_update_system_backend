const mongoose = require("mongoose");

const StyleSchema = new mongoose.Schema({
	update_stop: {
		type: Boolean,
		required: true,
	},
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
	sync_date_start: {
		type: String,
		required: true,
	},
	sync_date_end: {
		type: String,
		required: true,
	},
	sync_start_time: {
		type: String,
		required: true,
	},
	sync_interval: {
		type: String,
		required: true,
	},
	post_mode: {
		type: String,
		required: true,
	},
	selectedImage1: {
		type: String,
		required: true,
	},
	selectedImage2: {
		type: String,
		// required: true,
	},
	selectedImage3: {
		type: String,
		// required: true,
	},
	front: {
		type: String,
		required: true,
	},
	front1: {
		type: String,
		// required: true,
	},
	front2: {
		type: String,
		// required: true,
	},
	stylist_name: {
		type: String,
		required: true,
	},
	sex: {
		type: String,
		required: true,
	},
	length: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
	style_image: {
		type: String,
		required: true,
	},
	style_menu_perm: {
		type: Boolean,
		required: true,
	},
	style_menu_straight_perm: {
		type: Boolean,
		required: true,
	},
	extensions: {
		type: Boolean,
		required: true,
	},
	coupon: {
		type: String,
		required: true,
	},
	hair_amount_few: {
		type: Boolean,
		required: true,
	},
	hair_amount_usually: {
		type: Boolean,
		required: true,
	},
	hair_amount_many: {
		type: Boolean,
		required: true,
	},
	hair_type_soft: {
		type: Boolean,
		required: true,
	},
	hair_type_usually: {
		type: Boolean,
		required: true,
	},
	hair_type_hard: {
		type: Boolean,
		required: true,
	},
	thickness_thin: {
		type: Boolean,
		required: true,
	},
	thickness_usually: {
		type: String,
		required: true,
	},
	thickness_thick: {
		type: Boolean,
		required: true,
	},
	habit_none: {
		type: Boolean,
		required: true,
	},
	habit_bit: {
		type: Boolean,
		required: true,
	},
	habit_strong: {
		type: String,
		required: true,
	},
	face_type_round_shape: {
		type: Boolean,
		required: true,
	},
	face_type_inverted_triangle: {
		type: Boolean,
		required: true,
	},
	face_type_egg_shapped: {
		type: Boolean,
		required: true,
	},
	face_type_base: {
		type: Boolean,
		required: true,
	},
	face_type_square: {
		type: Boolean,
		required: true,
	},
	menu_content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Style = mongoose.model("Style", StyleSchema);

module.exports = Style;
