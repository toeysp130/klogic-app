const express = require('express');
const res = require('express/lib/response');
const Users = require('../models/user.modal');
const userRoute = express.Router();

// Get all user data

userRoute.route('/').get((req,res,next)=>{
    Users.find((error,data) => {
        if(error) return next(error);
        res.json(data)
    })
})

// Login Jah
userRoute.route('/login/:id_user/:password').post((req,res,next)=>{
    Users.findOne({id_user:req.params.id_user , password:req.params.password} , (error,data) => {
        if(error) return next(error);
        res.json(data);
    })
})

// Check moomoo
userRoute.route('/chk/subject/:userID/:subjectID').post((req,res,next)=>{
    Users.findById(req.params.userID , (error ,data) => {
        if(error) return next(error)
        res.json(data.subject.filter(sub => sub.id_sub === req.params.subjectID))
        // res.json(data)
    })
})


// update Moochiking
userRoute.route("/update/:userID").put((req,res,next)=>{
    Users.findByIdAndUpdate(req.params.userID , {$set:req.body} , (error,data)=>{
        if(error) return next(error);
        res.json(data)
    })
})

// create User
userRoute.route('/create').post((req,rex,next) => {
    Users.create(req.body , (error,data)=>{
        if(error)return next(error)
        res.json(data) 
    })
})

module.exports = userRoute;