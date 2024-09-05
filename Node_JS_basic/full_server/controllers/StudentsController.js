const readDatabase = require("../utils");
const database = process.argv[2];
export default class StudentsController {

  static getAllStudents(req, res) {
    res.status(200)
    readDatabase(database)
      .then(studentsData)
    res.write('This is the list of our students');

    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
    console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
  }
  static getAllStudentsByMajor
}