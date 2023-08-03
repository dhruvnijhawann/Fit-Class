const express = require('express');
const passport = require('passport');
const router = express.Router();

// User registration route
router.post('/register', async (req, res, next) => {
  try {
    const { email, password } =

 req.body;

    // Add validation logic here

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    res.redirect('/login');
  } catch (error) {
    next(error);
  }
});

// User login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
}));

module.exports = router;