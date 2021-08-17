const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/user', userController.create);
router.delete('/:name', userController.remove);
router.put('/:name', userController.update);
router.get('/', userController.get);
router.get('/:name', userController.getByName);

module.exports = router;