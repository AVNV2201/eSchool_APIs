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
GET | /api/attendance?studentId= | GET ATTENDANCE OF ALL SUBJECTS OF A STUDENT
GET | /api/attendance?subjectId= | GET ATTENDANCE OF ALL STUDENTS OF A SUBJECT
GET | /api/attendance?studentId=id&subjectId=id | GET ATTENDANCE OF A STUDENT OF A SUBJECT
POST | /api/attendance?studentId=id&subjectId=id | MODIFY ATTENDANCE OF A STUDENT OF A SUBJECT
### QUIZ ROUTES
REQUEST TYPE | ROUTE | DESCRIPTION
-------------|-------|------------
GET | /api/quiz?subjectId= |   GET ALL QUIZES OF SUBJECT
POST | /api/quiz | ADD A QUIZ
GET | /api/quiz/id | GET A QUIZ
PUT | /api/quiz/id | MODIFY A QUIZ
DELETE | /api/quiz/id | DELETE A QUIZ
GET | /api/question?quizId= | GET ALL QUESTIONS OF A QUIZ
POST | /api/question | ADD A QUESTION TO QUIZ
GET | /api/question/id | GET A QUESTION OF A QUIZ
PUT | /api/question/id | MODIFY QUESTION 
DELETE | /api/question/id | DELETE A QUESTION 
GET | /api/answer?quizId= | GET ALL RESPONSES OF A QUIZ
GET | /api/answer?quizId=id&studentId=id | GET ALL RESPONSES OF A STUDENT OF A QUIZ
POST | /api/answer | SUBMIT A RESPONSE
GET | /api/answer/id | GET A SPECIFIC RESPONSE BY ITS ID
PUT | /api/answer/id | MODIFY A RESPONSE ( SHOULD NOT ALLOWED TO TAMPER THE RESPONSE SO AVOID USING THIS API ) 
DELETE | /api/answer/id | DELETE A REPONSE
DELETE | /api/answer?quizId= | DELETE ALL RESPONSES OF A QUIZ
DELETE | /api/answer?studentId= | DELETE ALL RESPONSES OF STUDENT
DELETE | /api/answer?quizId=id&studentId=id | DELETE A RESPONSE OF A STUDENT OF A QUIZ

