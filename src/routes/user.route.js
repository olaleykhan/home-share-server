const express = require('express');

const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', authController.signup);

// router.route('/').get(userController.getAllUsers).post(userController.AddUser);

// router.route('/:id').get(userController.getUserbyID).post(userController.updateUser);

module.exports = router;
