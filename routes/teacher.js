const express = require('express');
const router = express.Router();
const callbacks = require('../helper/teacher');

router.route('/')
      .get( callbacks.getTeacherList )
      .post( callbacks.addTeacher )

router.route('/:id')
      .get( callbacks.getTeacher )
      .put( callbacks.modifyTeacher )
      .delete( callbacks.deleteTeacher )

module.exports = router;