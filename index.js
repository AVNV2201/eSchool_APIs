const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const methodOverride = require('method-override');
const marked = require('marked');
const fs = require('fs');
const dbUrl = 'mongodb+srv://avnvhere:x0fh7aT7j0lNOcI8@cluster0.ox9n2.mongodb.net/eSchool?retryWrites=true&w=majority'

mongoose.connect( dbUrl ,{
      useNewUrlParser: true,
      useUnifiedTopology: true
})
      .then(() => {
      console.log('DB CONNECTION OPEN');
})
      .catch( err => {
            console.log('Something went wrong');
            console.log(err);
      });

const studentRoutes = require('./routes/students');
const classRoutes = require('./routes/class');
const teacherRoutes = require( './routes/teacher');
const subjectRoutes = require('./routes/subject');
const announcementRoutes = require('./routes/announcement');
const attendanceRoutes = require('./routes/attendance');
const quizRoutes = require('./routes/quiz');
const questionRoutes = require('./routes/question');
const answerRoutes = require('./routes/answer');

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use( methodOverride('_method') );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( '/api' , ( req, res ) => {
      const path = __dirname + '/README.md';
      fs.readFile( path, 'utf8', ( err, data ) => {
            if( err ){
                  res.status(404).send(err);
            }
            res.send(marked(data.toString()));
      } )
} )

app.use( '/api/student', studentRoutes );
app.use( '/api/class', classRoutes );
app.use( '/api/teacher', teacherRoutes );
app.use( '/api/subject', subjectRoutes );
app.use( '/api/announcement', announcementRoutes );
app.use('/api/attendance', attendanceRoutes );
app.use('/api/quiz',quizRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/answer', answerRoutes);

app.use( ( req, res ) => {
      res.status(404).json({});
} )

const port = process.env.PORT || 3000
app.listen( port, () => {
      console.log(`APP IS LISTENING ON PORT {port} `)
})