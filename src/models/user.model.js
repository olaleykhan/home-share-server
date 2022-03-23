const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
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
		// unique: true,
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
		validate: {
			validator: function (el) {
				console.log('validted');
				return el === this.password;
			},
			message: 'password mismatch',
		},
	},
	// gender: {
	// 	type: String,
	// 	required: [true, "User's gender is required"],
	// },
});

// presave middleware from mongoose

userSchema.pre('save', async function (next) {
	// run if password ws modified
	if (!this.isModified('password')) return next();
	// hash password
	this.password = await bcrypt.hash(this.password, 10);
	// remove confirm password key and value
	this.confirmPassword = undefined;
	next();
});

// create the model for tour
const UserModel = mongoose.model('User', userSchema);



module.exports = UserModel;