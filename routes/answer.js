const express = require('express');
const router = express.Router();
const callbacks = require('../helper/answer');

router.route('/')
      .get( callbacks.getResponseList )
      .post( callbacks.addResponse )

router.route('/:id')
      .get( callbacks.getResponse )
      .put( callbacks.modifyResponse )
      .delete( callbacks.deleteResponse )

module.exports = router;