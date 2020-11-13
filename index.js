const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/eSchool',{
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

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use( methodOverride('_method') );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

app.get( '/api' , ( req, res ) => {
      res.render('index');
} )

app.use( '/api/student', studentRoutes );
app.use( '/api/class', classRoutes );
app.use( '/api/teacher', teacherRoutes );
app.use( '/api/subject', subjectRoutes );
app.use( '/api/announcement', announcementRoutes );
app.use('/api/attendance', attendanceRoutes );

app.get( '/test', ( req, res ) => {
      const { a, b, c } = req.query;
      if( a && b && c ){
            console.log(a,b,c);
      }
      else if( a && c ){
            console.log('only a and c are here', a, c );
      }
      else{
            console.log('No parameters found');
      }
} )

app.use( ( req, res ) => {
      res.status(404).json({});
} )

app.listen( 3000, () => {
      console.log('APP IS LISTENING ON PORT 3000')
})