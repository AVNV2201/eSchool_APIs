const Class = require('../models/class');
const express = require('express');
const callbacks = {};

callbacks.getClassList = ( req, res ) => {
      
      Class.find({})
      .then( classes => {
            // console.log(classes);
            res.json(classes );
      } )
      .catch( err => {
            res.status(404).json({err});
      } )      
}

callbacks.getClass = ( req, res ) => {
      const { id } = req.params;
      Class.findById(id)
      .then( c => {
            res.json(c);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.addClass = ( req, res ) => {
      const newClass = new Class( req.body );
      // console.log(req);
      // console.log(newClass);
      newClass.save()
      .then( c => {
            res.json(c);
      } )
      .catch( err => {
            console.log(err);
            res.status(404).json({err});
      })
}

callbacks.modifyClass = ( req, res ) => {
      const { id } = req.params;
      // console.log(req.body);
      // let temp = { ...req.body };
      // console.log(temp);
      Class.findByIdAndUpdate( id, req.body , { new: true, useFindAndModify: false })
      .then( c => {
            res.json(c);
      } )
      .catch( err => {
            res.status(404).json({err});
      })
}

callbacks.deleteClass = ( req, res ) => {
      const { id } = req.params;
      Class.findByIdAndDelete( id )
      .then( c => {
            res.json(c);
      })
      .catch( err => {
            res.status(404).json({err});
      })
}

module.exports = callbacks;