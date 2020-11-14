const Answer = require('../models/answer');
const express = require('express');
const callbacks = {};

callbacks.getResponseList = ( req, res ) => {
      const { quizId, studentId } = req.query;  
      
      if( quizId && studentId ){
            Answer.findOne({ quizId: quizId, studentId: studentId }).populate('quizId').populate('studentId')
            .then( r => {
                  // console.log(q);
                  res.json(r);
            } )
            .catch( err => {
                  res.status(404).json({err});
            } )   
      }
      else if( quizId ){
            Answer.find({ quizId: quizId }).populate('quizId').populate('studentId')
            .then( r => {
                  // console.log(q);
                  res.json(r);
            } )
            .catch( err => {
                  res.status(404).json({err});
            } )   
      }
      else {
            res.status(404).json({message: 'quiz not found' });
      }   
}

callbacks.getResponse = ( req, res ) => {
      const { id } = req.params;
      Answer.findById(id).populate('quizId').populate('studentId')
      .then( q => {
            res.json(q);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addResponse = ( req, res ) => {
      const newAnswer = new Answer( req.body );
      // console.log(req);
      // console.log(newQuiz);
      newAnswer.save()
      .then( c => {
            res.json(c.populate('quizId').populate('studentId'));
      } )
      .catch( err => {
            // console.log(err);
            res.status(404).json({err});
      })
}

callbacks.modifyResponse = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Answer.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( c => {
            res.json(c.populate('quizId').populate('studentId'));
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteResponse = ( req, res ) => {
      const { id } = req.params;
      const { quizId, studentId } = req.query;
      if( id ){
            Answer.findByIdAndDelete( id )
            .then( c => {
                  res.json(c);
            })
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( studentId && quizId ){
            Answer.deleteOne({ quizId: quizId, studentId: studentId })
            .then( c => {
                  res.json(c);
            })
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( quizId ){
            Answer.deleteMany({ quizId: quizId })
            .then( c => {
                  res.json(c);
            })
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( studentId ){
            Answer.deleteMany({ studentId: studentId })
            .then( c => {
                  res.json(c);
            })
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else{
            res.status(404).json({ message: 'Invalid parameters' });
      }
      
}

module.exports = callbacks;