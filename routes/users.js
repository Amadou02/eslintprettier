const express = require('express');

const router = express.Router();

const userController = require('../controllers/users');

/* GET users listing. */
router.get('/:id', userController.getOneUser);
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
