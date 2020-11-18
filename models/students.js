const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      regNo: {
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
      gender:{
            type: String,
            required: true,
            lowercase: true,
            enum: ['male','female','other']
      },
      profileImageUrl: {
            type: String,
            default: ""
      },
      rollNo: {
            type: Number,
            min: 1
      },
      mobileNo: {
            type: String

      },
      class: {
            type: Schema.Types.ObjectId,
            ref : 'Class'
      } ,
      attendance: {
            type: [Date],
            default: []
      }
});

const Student = mongoose.model('Student', studentSchema );

module.exports = Student;