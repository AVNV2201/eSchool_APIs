const Student = require('../models/students');
const express = require('express');
const callbacks = {};

callbacks.getAll = ( req, res ) => {
      const { classId } = req.query;
      if( classId ){
            Student.find( { class: classId } )
            .then( students => {
                  res.json(students);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else{
            Student.find({})
            .then( students => {
                  // console.log(students);
                  res.json(students);
            } )
            .catch( err => {
                  res.status(404).json({err});
            } )
      }
}

callbacks.getStudent = ( req, res ) => {
      const { id } = req.params;
      Student.findById(id)
      .then( student => {
            res.json(student);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addStudent = ( req, res ) => {
      const student = new Student( req.body );
      // console.log(req);
      // console.log(student);
      student.save()
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({err});
      })
}

callbacks.editStudent = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Student.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteStudent = ( req, res ) => {
      const { id } = req.params;
      Student.findByIdAndDelete( id )
      .then( s => {
            res.json(s);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;