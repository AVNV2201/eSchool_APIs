const express = require('express');
const router = express.Router();
const callbacks = require('../helper/announcement');

router.route('/')
      .get( callbacks.getAllAnnouncements )
      .post( callbacks.addAnnouncement )

router.route('/:id')
      .get( callbacks.getAnnouncement )
      .put( callbacks.editAnnouncement )
      .delete( callbacks.deleteAnnouncement )

module.exports = router;