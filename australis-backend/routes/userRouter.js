const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateTokenHandler');
const {
  registerUser,
  currentUser,
  loginUser,
} = require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', loginUser);

/* to be removed */
router.get('/current', validateToken, currentUser);

module.exports = router;
