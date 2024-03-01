const express = require('express');
const fs = require('fs');

const database = process.argv.length > 2 ? process.argv[2] : '';
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames
        .slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord
          .slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
      resolve(studentGroups);
    }
  });
});
const port = '1245';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(database).then((data) => {
    let NoCS = 0;
    let NoSWE = 0;
    let CSNames = '';
    let SWENames = '';
    for (const field in data) {
      if (Object.prototype.hasOwnProperty.call(data, field)) {
        if (field === 'CS') {
          NoCS = data[field].length;
          CSNames = data[field].map((student) => student.firstname).join(', ');
        }
        if (field === 'SWE') {
          NoSWE = data[field].length;
          SWENames = data[field].map((student) => student.firstname).join(', ');
        }
      }
    }
    res.end(`This is the list of our students\nNumber of students: ${NoSWE + NoCS}\nNumber of students in CS: ${NoCS}. List: ${CSNames}\nNumber of students in SWE: ${NoSWE}. List: ${SWENames}`);
  }).catch(() => {
    res.statusCode = 404;
    res.end('This is the list of our students\nCannot load the database');
  });
});
app.listen(port, () => {
  console.log('server running');
});
module.exports = app;
