const usersController = require('./../controllers/usersController');
const express = require('express')
const router = express.Router();

router.get('/register', usersController.register)

router.get('/login', usersController.login)

router.get('/profile', usersController.profile)

module.exports = router;