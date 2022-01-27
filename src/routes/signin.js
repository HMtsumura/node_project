const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', function(req, res, next){
    res.render('signin',{title: 'Sign in'});
});

router.post('/', async function(req, res, next){
    const userName = req.body.userName;
    const password = req.body.password;

    const user = await db.User.findAll({where: {
        name: userName,
        password: password
    }});
    if(user.length !== 0){
        req.session.userid = user[0].id;
        res.redirect('/');
    }else{
        res.render("signin", {
            title:  'Sign in',
            errorMessage: 'ユーザーが見つかりません'
        });
    }
});

module.exports = router;