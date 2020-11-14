const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
      quizId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Quiz'
      },
      q: {
            type: {
                  qText: String,
                  qImageUrl: String
            },
            required: true,
            _id: false
      },
      marks: Number,
      qType: {
            type: String,
            lowercase: true,
            enum: [ 'single_correct', 'multi_correct', 'subjective' ],
            default: 'subjective'
      },
      qChoices: [String],
      correctAnswer: String
})

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;