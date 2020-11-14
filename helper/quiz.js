const Quiz = require('../models/quiz');
const express = require('express');
const callbacks = {};

callbacks.getQuizList = ( req, res ) => {
      const { subjectId } = req.query;
      if( !subjectId ) 
            res.status(404).json({message: 'subject not found' });
      Quiz.find({ subjectId: subjectId }).populate('subjectId')
      .then( q => {
            // console.log(q);
            res.json(q);
      } )
      .catch( err => {
            res.status(404).json({err});
      } )      
}

callbacks.getQuiz = ( req, res ) => {
      const { id } = req.params;
      Quiz.findById(id).populate('subjectId')
      .then( q => {
            res.json(q);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addQuiz = ( req, res ) => {
      const newQuiz = new Quiz( req.body );
      // console.log(req);
      // console.log(newQuiz);
      newQuiz.save()
      .then( c => {
            res.json(c.populate('subjectId'));
      } )
      .catch( err => {
            // console.log(err);
            res.status(404).json({err});
      })
}

callbacks.modifyQuiz = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Quiz.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( c => {
            res.json(c.populate('subjectId'));
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteQuiz = ( req, res ) => {
      const { id } = req.params;
      Quiz.findByIdAndDelete( id )
      .then( c => {
            res.json(c);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;