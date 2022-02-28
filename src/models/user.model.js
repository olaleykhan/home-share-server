const mongoose = require('mongoose');
const validator = require('validator');
// create a mongoose schema
const userSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "User's FirstName is required"],
	},
	lastname: {
		type: String,
		required: [true, "User's lastname is required"],
	},
	email: {
		type: String,
		required: [true, 'user email is required'],
		unique: [true, 'a user with this email already exists'],
		lowercase: true,
		validate: [validator.isEmail, 'please provide a valid email'],
	},
	photo: String,
	password: {
		type: String,
		required: [true, 'password is required'],
		minlength: 8,
	},
	confirmPassword: {
		type: String,
		required: [true, 'please confirm your password'],
	},
	age: {
		type: Number,
		required: [true, "User's Age is required"],
	},
	gender: {
		type: String,
		required: [true, "User's gender is required"],
	},
});


// create the model for tour
const UserModel = mongoose.model('User', userSchema);



module.exports = UserModel;