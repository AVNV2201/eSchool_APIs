const express = require('express');
const router = express.Router();
const callbacks = require('../helper/question');

router.route('/')
      .get( callbacks.getQuestionList )
      .post( callbacks.addQuestion )

router.route('/:id')
      .get( callbacks.getQuestion )
      .put( callbacks.modifyQuestion )
      .delete( callbacks.deleteQuestion )

module.exports = router;