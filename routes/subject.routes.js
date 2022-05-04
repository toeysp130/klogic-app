const express = require('express');
const Subject = require('../models/subject.model');
const subjectRoute = express.Router();

// Get all user data

subjectRoute.route('/').get((req,res,next)=>{
    Subject.find((error,data) => {
        if(error) return next(error);
        res.json(data)
    })
})

subjectRoute.route('/find/:subjectID').post((req,res,next) =>{ 
    Subject.findOne({id_sub:req.params.subjectID} , (error,data) => {
        if(error) return next(error);
        res.json(data);
    })
});

module.exports = subjectRoute;