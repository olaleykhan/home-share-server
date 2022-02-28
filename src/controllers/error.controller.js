// this is called in development. frontend dev needs all the info causing a bug that he can get;
const devError = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		error: err,
		stack: err.stack,
	});
};

// this is only called in production
const prodError = (err, res) => {
	// operational normal error. send details to client
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
		// programming or bug error. shield client from real reson
	} else {
		console.error('non operational error', err);
		res.status(500).json({
			status: 'error',
			message: 'something went wrong, please try again',
		});
	}
};
module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	if (process.env.NODE_ENV === 'development') {
		devError(err, res);
	} else if (process.env.NODE_ENV === 'production') {
		prodError(err, res);
	}
};
