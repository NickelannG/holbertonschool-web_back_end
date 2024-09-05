const fs = require('fs').promises;

module.exports = async function readDatabase(path) {
  const studentData = {};

  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').slice(1);

    const studentsCS = [];
    const studentsSWE = [];

    for (const row of rows) {
      const data = row.split(',');

      // if field is CS add to CS array
      if (data[3] === 'CS') {
        studentsCS.push(data[0]);
      }
      // if field is SWE add to SWE array
      if (data[3] === 'SWE') {
        studentsSWE.push(data[0]);
      }
    }

    studentData.CS = studentsCS;
    studentData.SWE = studentsSWE;

    return Promise.resolve(studentData);
  } catch (error) {
    return Promise.reject(
      Error(),
    );
  }
};
