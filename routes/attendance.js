const express = require('express');
const router = express.Router();
const callbacks = require('../helper/attendance');

router.route('/')
      .get( callbacks.getAttendance )
      .post( callbacks.modifyAttendance )

module.exports = router;
