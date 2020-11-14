const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
      quizId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Quiz'
      },
      studentId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Student'
      },
      marksObtained: {
            type: Number,
            default: 0
      },
      answerList: Map
})

const Answer = mongoose.model('Answer',answerSchema);

module.exports = Answer;