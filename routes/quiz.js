const express = require('express');
const router = express.Router();
const callbacks = require('../helper/quiz');

router.route('/')
      .get( callbacks.getQuizList )
      .post( callbacks.addQuiz )

router.route('/:id')
      .get( callbacks.getQuiz )
      .put( callbacks.modifyQuiz )
      .delete( callbacks.deleteQuiz )

module.exports = router;