const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      classId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Class'
      },
      teacherId: {
            type: Schema.Types.ObjectId,
            ref: 'Teacher'
      },
      workingDays: [Date]
})

const Subject = mongoose.model( 'Subject', subjectSchema );

module.exports = Subject;