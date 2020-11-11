const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      employeeId: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true
      },
      dob: {
            type: Date,
            required: true
      },
      gender: {
            type: String,
            required: true,
            lowercase: true,
            enum: ['male','female','other']
      },
      designation: {
            type: String
      },
      mobile: {
            type: String
      }
})

const Teacher = mongoose.model( 'Teacher', teacherSchema );

module.exports = Teacher;