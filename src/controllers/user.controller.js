const userModel = require('../models/user.model');


exports.getAllUsers = async (req, res) => {
	try {
		const tours = await userModel.find({});

		res.status(200).json({
			status: 'success',
			results: tours.length,
			data: {
				tours,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			message: 'something went wrong while getting all users',
		});
	}
};

exports.AddUser = async (req, res) => {
	try {
		const tour = await userModel.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				message: 'user was succesffully created',
				tour,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(404).json({
			status: 'failed',
			message: 'Data sent is invalid',
			console: err,
		});
	}
};
