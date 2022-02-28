const express = require('express');
const userRouter = require('./routes/user.route');
const preferenceRouter = require('./routes/preference.route');
const AppError = require('./utils/appError');
const errorHandler = require('./controllers/error.controller');

app = express();
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/preferences', preferenceRouter);

// handle all routes that do not exist
app.all('*', (req, res, next) => {
	next(new AppError(`cant fine the url: ${req.originalUrl} on the server`, 404));
});

// by specifying 4 arguments, express knows that this is an error handling middle ware
app.use(errorHandler);

module.exports = app;