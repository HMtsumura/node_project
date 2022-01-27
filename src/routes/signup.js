const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('signup',{title: 'Sign up'});
});

router.post('/', function(req, res, next){
    const userName = req.body.userName;
    const password = req.body.password;
    const repassword = req.body.repassword;
});
module.exports = router;