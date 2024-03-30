const express = require('express');
const router = express.Router();

const timeIntervalController = require('../controllers/timeIntervalController');

router.post('/create', timeIntervalController.create);

module.exports = router;
