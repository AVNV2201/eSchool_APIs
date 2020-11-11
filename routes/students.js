const express = require('express');
const router = express.Router();
const callbacks = require('../helper/students');

router.route('/')
      .get( callbacks.getAll )
      .post( callbacks.addStudent )

router.route('/:id')
      .get( callbacks.getStudent )
      .put( callbacks.editStudent )
      .delete( callbacks.deleteStudent )

module.exports = router;