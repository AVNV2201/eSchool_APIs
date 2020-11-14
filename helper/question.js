const Question = require('../models/question');
const express = require('express');
const callbacks = {};

callbacks.getQuestionList = ( req, res ) => {
      const { quizId } = req.query;
      if( !quizId ) 
            res.status(404).json({message: 'quiz not found' });
      Question.find({ quizId: quizId }).populate('quizId')
      .then( q => {
            // console.log(q);
            res.json(q);
      } )
      .catch( err => {
            res.status(404).json({err});
      } )      
}

callbacks.getQuestion = ( req, res ) => {
      const { id } = req.params;
      Question.findById(id).populate('quizId')
      .then( q => {
            res.json(q);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addQuestion = ( req, res ) => {
      const newQuestion = new Question( req.body );
      // console.log(req);
      // console.log(newQuiz);
      newQuestion.save()
      .then( c => {
            res.json(c.populate('quizId'));
      } )
      .catch( err => {
            // console.log(err);
            res.status(404).json({err});
      })
}

callbacks.modifyQuestion = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Question.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( c => {
            res.json(c.populate('quizId'));
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteQuestion = ( req, res ) => {
      const { id } = req.params;
      Question.findByIdAndDelete( id )
      .then( c => {
            res.json(c);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;