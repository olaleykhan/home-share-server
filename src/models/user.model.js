const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User\'s name is required'],
        
    },
    age: {
        type: Number,
        required: [true, 'User\'s Age is required'],
    }
        
    
});


// create the model for tour
const UserModel = mongoose.model('User', userSchema);



module.exports = UserModel;