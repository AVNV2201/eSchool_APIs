const express = require('express');
const router = express.Router();
const callbacks = require('../helper/subject');

router.route('/')
      .get( callbacks.getSubjectList )
      .post( callbacks.addSubject )

router.route('/:id')
      .get( callbacks.getSubject )
      .put( callbacks.editSubject )
      .delete( callbacks.deleteSubject )

module.exports = router;