const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
      timeStamp: Date,
      title: {
            type: String,
            required: true
      },
      description: String,
      classId: Schema.Types.ObjectId,
      subjectId: Schema.Types.ObjectId
})

const Announcement = mongoose.model( 'Announcement', announcementSchema );

module.exports = Announcement;