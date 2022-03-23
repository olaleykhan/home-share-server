const app = require('./app.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION. SERVER  Shutting down......');
	console.log(err.name, err.message, 'error name and message');
	console.log(err, 'entire error stack');
	process.exit(1);
});

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
const port = process.env.PORT;

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		autoIndex: true,
	})
	.then((con) => console.log('succesffully connected to remote database'))
	.catch((err) => console.log(err, 'big error'));

app.listen(port, () => console.log(`app is running on${port}`));

process.on('unhandledRejection', (err) => {
	console.log('UNHANDLED REJECTION. SERVER  Shutting down......');
	console.log(err.name, err.message, 'error name and message');
	console.log(err, 'entire error stack');
	server.close(() => {
		process.exit(1);
	});
});

