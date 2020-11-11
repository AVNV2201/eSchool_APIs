# API REQUEST ROUTES
### HOME
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api | home page for apis
### STUDENT ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api/student | GET LIST OF ALL STUDENTS
GET | /api/student?classId=<ObjectId> | GET LIST OF STUDENTS OF A CLASS
POST | /api/student | ADD A STUDENT TO DB
GET | /api/student/id | GET DETAILS OF A STUDENT
PUT | /api/student/id | UPDATE DETAILS OF A STUDENT
DELETE | /api/student/id | DELETE STUDENT FROM DB
### CLASS ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api/class | GET THE LIST OF ALL CLASSES
POST | /api/class | ADD A CLASS
GET | /api/class/id | GET DETAILS OF A CLASS
PUT | /api/class/id | MODIFY DETAILS OF CLASS
DELETE | /api/class/id | DELETE A CLASS
### TEACHER ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api/teacher | GET LIST OF ALL TEACHERS
POST | /api/teacher | ADD A TEACHER TO DB
GET | /api/teacher/id | GET DETAILS OF A TEACHER
PUT | /api/teacher/id | MODIFY DETAILS OF A TEACHER
DELETE | /api/teacher/id | DELETE TEACHER FROM DB
### SUBJECT ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
### ANNOUNCEMENT ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
### ATTENDANCE ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------