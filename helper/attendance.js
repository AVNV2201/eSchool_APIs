const Attendance = require('../models/attendance');
const express = require('express');
const callbacks = {};

callbacks.getAttendance = ( req, res ) => {
      const { studentId, subjectId } = req.query;
      if( studentId && subjectId ){
            Attendance.findOne({ subjectId: subjectId, studentId: studentId }).populate('studentId').populate('subjectId')
            .then( l => {
                  if(l){
                        return l;
                  }
                  else {
                        const attendance = new Attendance();
                        attendance.subjectId = subjectId;
                        attendance.studentId = studentId;
                        return attendance.save();
                  }
            } )
            .then( s => {
                  res.json(s);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( studentId ){
            Attendance.find({ studentId: studentId })
            .then( l => {
                  // console.log(l);
                  res.json(l);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( subjectId ){
            Attendance.find({ subjectId: subjectId })
            .then( l => {
                  // console.log(l);
                  res.json(l);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else {
            res.status(404).json({ message: 'Invalid API requiest '});
      }
}

callbacks.modifyAttendance = ( req, res ) => {
      const { studentId, subjectId } = req.query;
      if( studentId && subjectId ){
            Attendance.findOne({studentId: studentId, subjectId: subjectId })
            .then( s => {
                  if( s ){
                        return Attendance.findOneAndUpdate({ studentId: studentId, subjectId: subjectId }, req.body, { new: true, useFindAndModify: false })
                  }
                  else {
                        const attendance = new Attendance( req.body );
                        return attendance.save();
                  }
            })
            .then( s => {
                  res.json(s);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else {
            res.status(404).json({ message: 'Invalid API requiest '});
      }
}

module.exports = callbacks;