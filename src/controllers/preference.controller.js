const PreferenceModel = require('../models/preference.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createPreference = catchAsync(async (req, res, next) => {
	const data = req.body;
	const preference = await PreferenceModel.create(data);
	res.status(201).json({
		status: 'success',
		data: {
			message: 'preference has been created successfully',
			preference,
		},
	});
});

exports.getAllPreferences = catchAsync(async (req, res, next) => {
	const preferences = await PreferenceModel.find({});
	// if (!preferences) {
	// 	return next(new AppError(`no user preferences were found`, 404));
	// }
	res.status(200).json({
		status: 'success',
		results: preferences.length,
		data: {
			preferences,
		},
	});
});
