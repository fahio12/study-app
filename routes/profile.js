const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// view profile page
router.get('/', (req, res) => {
  res.render("profile/profile");
})

// register
router.get('/register', (req, res) => {
  res.render("profile/register");
})
router.post('/register', async (req, res) => {
  name = req.body.name;
  email = req.body.email;
  pass = req.body.password;
  if (!name || !email || !pass) {
    console.log("missing info");
    // invalid msg flash (missing info)!!!!!
    res.redirect('/profile/login')
    return;
  }
  User.findOne({email: email}, async (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (user) {
        console.log("user exists")
        res.redirect('/profile/login')
        return;
      } else {
        password = await bcrypt.hash(pass, 10);
        user = new User({
          name: req.body.name,
          email: req.body.email,
          password: pass
        })
        await user.save();
        res.redirect('/profile');
      }
    }
  })
})

// login
router.get('/login', (req, res) => {
  res.render("profile/login");
})
router.post('/login', (req, res) => {
  res.render("profile/login");
})

module.exports = router
