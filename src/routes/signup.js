const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res, next){
    res.render('signup',{title: 'Sign up'});
});

router.post('/', async function(req, res, next){
    const userName = req.body.userName;
    const password = req.body.password;
    const repassword = req.body.repassword;

    const user = await db.User.findAll({where: {
        name: userName
    }});
    console.log(user[0].id);
  if(user.length !== 0){
    res.render("signup", {
        title: "Sign up",
        errorMessage: "このユーザ名は既に使われています",
    });
  }else if(password === repassword){
    const newUser = db.User.build({
        name: userName,
        password: password
      });
      await newUser.save();
      res.redirect('/');
  } else {
    res.render("signup", {
      title: "Sign up",
      errorMessage: "パスワードが一致しません",
    });
  }
});
module.exports = router;