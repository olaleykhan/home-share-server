const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		// gender: req.body.gender,
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword,
	});

	const token = jwt.sign({ id: newUser._id }, 'secret');

	res.status(201).json({
		status: 'success',
		data: {
			user: newUser,
		},
	});
});
