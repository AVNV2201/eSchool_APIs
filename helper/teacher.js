const Teacher = require('../models/teacher');
const express = require('express');
const callbacks = {};

callbacks.getTeacherList = ( req, res ) => {
      
      Teacher.find({})
      .then( teachers => {
            // console.log(teachers);
            res.json(teachers );
      } )
      .catch( err => {
            res.status(404).json({err});
      } )      
}

callbacks.getTeacher = ( req, res ) => {
      const { id } = req.params;
      Teacher.findById(id)
      .then( t => {
            res.json(t);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addTeacher = ( req, res ) => {
      const newTeacher = new Teacher( req.body );
      // console.log(req);
      // console.log(newTeacher);
      newTeacher.save()
      .then( t => {
            res.json(t);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({err});
      })
}

callbacks.modifyTeacher = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Teacher.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( t => {
            res.json(t);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteTeacher = ( req, res ) => {
      const { id } = req.params;
      Teacher.findByIdAndDelete( id )
      .then( t => {
            res.json(t);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;