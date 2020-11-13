const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
      studentId: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
      },
      subjectId: {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
            required: true
      },
      attendance: {
            type: [Date],
            default: []
      }
})

const Attendance = mongoose.model('Attendance', attendanceSchema );

module.exports = Attendance;