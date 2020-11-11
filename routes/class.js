const express = require('express');
const router = express.Router();
const callbacks = require('../helper/class');

router.route('/')
      .get( callbacks.getClassList )
      .post( callbacks.addClass )

router.route('/:id')
      .get( callbacks.getClass )
      .put( callbacks.modifyClass )
      .delete( callbacks.deleteClass )

module.exports = router;