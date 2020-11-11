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
GET | /api/subject?classId= | GET LIST OF ALL SUBJECTS OF A CLASS
GET | /api/subject?teacherId= | GET LIST OF ALL SUBJECTS OF A TEACHER
POST | /api/subject | ADD A SUBJECT TO DB
GET | /api/subject/id | GET DETAILS OF A SUBJECT
PUT | /api/subject/id | MODIFY DETAILS OF A SUBJECT
DELETE | /api/subject/id | DELETE SUBJECT FROM DB
### ANNOUNCEMENT ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api/announcement?classId= | GET ALL ANNOUNCEMENTS OF A CLASS
GET | /api/announcement?subjectId= | GET ALL ANNOUNCEMENTS OF A SUBJECT
POST | /api/announcement | ADD AN ANNOUNCEMENT
GET | /api/announcement/id | GET AN ANNOUNCEMENT
PUT | /api/announcement/id | EDIT AN ANNOUNCEMENT
DELETE | /api/announcement/id | DELETE AN ANNOUNCEMENT
### ATTENDANCE ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------