const Announcement = require('../models/announcement');
const express = require('express');
const callbacks = {};

callbacks.getAllAnnouncements = ( req, res ) => {
      const { classId, subjectId } = req.query;
      if( classId ){
            Announcement.find( { classId: classId } )
            .then( announcements => {
                  res.json(announcements);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else if( subjectId ){
            Announcement.find( { subjectId: subjectId } )
            .then( announcements => {
                  res.json(announcements);
            } )
            .catch( err => {
                  res.status(404).json({err});
            })
      }
      else{
            res.status(404).json({});
      }
}

callbacks.getAnnouncement = ( req, res ) => {
      const { id } = req.params;
      Announcement.findById(id)
      .then( a => {
            res.json(a);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addAnnouncement = ( req, res ) => {
      const announcement = new Announcement( req.body );
      // console.log(req);
      // console.log(announcement);
      announcement.save()
      .then( a => {
            res.json(a);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({err});
      })
}

callbacks.editAnnouncement = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Announcement.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( a => {
            res.json(a);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteAnnouncement = ( req, res ) => {
      const { id } = req.params;
      Announcement.findByIdAndDelete( id )
      .then( a => {
            res.json(a);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;