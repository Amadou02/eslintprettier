const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

/* GET users listing. */
router.get('/', userController.userIndex);

router.post('/', userController.userCreate);
router.patch('/:id', userController.userUpdate);

module.exports = router;
