const Subject = require('../models/subject');
const express = require('express');
const callbacks = {};

callbacks.getSubjectList = ( req, res ) => {
      const { classId, teacherId } = req.query;
      if( classId ){
            Subject.find( { classId: classId } )
            .then( subjects => {
                  res.json(subjects);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( teacherId ){
            Subject.find( { teacherId: teacherId } )
            .then( subjects => {
                  res.json(subjects);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else{
            res.status(404).json({});
      }
}

callbacks.getSubject = ( req, res ) => {
      const { id } = req.params;
      Subject.findById(id)
      .then( subject => {
            res.json(subject);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addSubject = ( req, res ) => {
      const subject = new Subject( req.body );
      // console.log(req);
      // console.log(subject);
      subject.save()
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({err});
      })
}

callbacks.editSubject = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Subject.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( s => {
            res.json(s);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteSubject = ( req, res ) => {
      const { id } = req.params;
      Subject.findByIdAndDelete( id )
      .then( s => {
            res.json(s);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;