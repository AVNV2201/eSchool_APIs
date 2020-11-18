const mongoose = require('mongoose');
const Student = require('./models/students');
const Class = require('./models/class');
const Teacher = require('./models/teacher');
const secret = require('./secret');

mongoose.connect( secret.dbUrl ,{
      useNewUrlParser: true,
      useUnifiedTopology: true
})
      .then(() => {
      console.log('DB CONNECTION OPEN');
})
      .catch( err => {
            console.log('Something went wrong');
            console.log(err);
      })

const studentsList = [
      {
            name: 'Abhinav Kumar giri',
            regNo: '20174045',
            email: 'abhinav.cs2201@gmail.com',
            dob: '1999/03/23',
            gender: 'male',
            rollNo: 4,
            mobileNo: '9424651598'
      },
      {
            name: 'Amrita Kumari',
            regNo: '20178080',
            email: 'amrita@gmail.com',
            dob: '1999/04/15',
            rollNo: 10,
            gender: 'female',
            mobileNo: '9424651598'
      },
      {
            name: 'Surya Pratap Singh',
            regNo: '20174003',
            email: 'surya.20174003@mnnit.ac.in',
            dob: '1999/06/13',
            gender: 'male',
            rollNo: 45,
            mobileNo: '9424651598'
      },
      {
            name: 'Abhay Singh',
            regNo: '20175000',
            email: 'unknownabhay@gmail.com',
            dob: '1999/12/05',
            gender: 'male',
            rollNo: 1,
            mobileNo: '9424651598'
      }
]

const classList = [
      { name: '5 A' },
      { name: '5 B' },
      { name: '6 A' },
      { name: '6 B' },
      { name: '7 A' },
      { name: '7 B' },
      { name: '8 A' },
      { name: '8 B' },
      { name: '9 A' },
      { name: '9 B' },
      { name: '10 A' },
      { name: '10 B' }
]

const teacherList = [
      {
            name: 'Dinesh Giri',
            dob: '1969/02/11',
            gender: 'male',
            email: 'dgiri.davjrd@gmail.com',
            mobile: '9424654565',
            designation: 'TGT',
            employeeId: '12345efg'
      },
      {
            name: 'Manish Mishra',
            dob: '1969/02/11',
            gender: 'male',
            email: 'mm.davjrd@gmail.com',
            mobile: '9424654565',
            designation: 'PGT',
            employeeId: '12345efg'
      },
      {
            name: 'DN Dubey',
            dob: '1969/02/11',
            gender: 'male',
            email: 'dnd.davjrd@gmail.com',
            mobile: '9424654565',
            designation: 'TGT',
            employeeId: '12345efg'
      },
      {
            name: 'Rina Singh',
            dob: '1969/02/11',
            email: 'rs.davjrd@gmail.com',
            gender: 'female',
            mobile: '9424654565',
            designation: 'TGT',
            employeeId: '12345efg'
      }
]

const addStudents = async () => {
      await Student.insertMany(studentsList)
      .then( l => {
            console.log(l);
      } )
      .catch( err => {
            console.log('SOMETHNG WENT WRONG');
            console.log(err);
      } )
}

const addClasses = async () => {
      await Class.insertMany(classList)
      .then( l => {
            console.log(l);
      } )
      .catch( err => {
            console.log('SOMETHNG WENT WRONG');
            console.log(err);
      } )
}

const addTeacher = async () => {
      await Teacher.insertMany(teacherList)
      .then( l => {
            console.log(l);
      } )
      .catch( err => {
            console.log('SOMETHNG WENT WRONG');
            console.log(err);
      } )
}

const removeAllStudents = async () => {
      await Student.deleteMany({})
      .then( p => {
            console.log(p);
      } )
      .catch( err => {
            console.log('UNABLE TO DELETE !!!');
            console.log(err);
      })
}

const removeAllClasses = async () => {
      await Class.deleteMany({})
      .then( p => {
            console.log(p);
      } )
      .catch( err => {
            console.log('UNABLE TO DELETE !!!');
            console.log(err);
      })
}

const removeAllTeachers = async () => {
      await Teacher.deleteMany({})
      .then( p => {
            console.log(p);
      } )
      .catch( err => {
            console.log('UNABLE TO DELETE !!!');
            console.log(err);
      })
}

addStudents();
// removeAllStudents();
// addClasses();
// removeAllClasses();
// addTeacher();
// removeAllTeachers();