const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
	gender: {
		type: String,
		required: [true, "User's gender is required"],
	},
	age: {
		type: Number,
		required: [true, 'age bracket is required'],
	},
});

const PreferenceModel = mongoose.model('Preference', preferenceSchema);

module.exports = PreferenceModel;
