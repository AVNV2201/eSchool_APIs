const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      subjectId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Subject'
      },
      StartTime: {
            type: Date
      },
      Duration: {
            type: Number,
            default: 30
      },
      maximumMarks: Number,
})

const Quiz = mongoose.model('Quiz', quizSchema );

module.exports = Quiz;