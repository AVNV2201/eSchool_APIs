const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      classTeacher: {
            type: Schema.Types.ObjectId
      },
      workingDays: [Date]
})

const Class = mongoose.model( 'Class', classSchema );

module.exports = Class;