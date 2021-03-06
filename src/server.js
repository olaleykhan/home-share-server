const app = require('./app.js');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
const port = process.env.PORT;

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then((con) => console.log('succesffully connected to remote database'))
	.catch((err) => console.log(err, "big error"));
  

app.listen(port, () => console.log(`app is running on${port}`));
