const mongoose = require('mongoose');
const Student = require('./models/students');

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

const addEntities = async () => {
      await Student.insertMany(studentsList)
      .then( l => {
            console.log(l);
      } )
      .catch( err => {
            console.log('SOMETHNG WENT WRONG');
            console.log(err);
      } )
}

const removeAll = async () => {
      await Student.deleteMany({})
      .then( p => {
            console.log(p);
      } )
      .catch( err => {
            console.log('UNABLE TO DELETE !!!');
            console.log(err);
      })
}

addEntities();
// removeAll();