const http = require('http');
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

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true);
    }
  });
});

const port = '1245';
const hostname = '127.0.0.1';
const app = http.createServer((req, res) => {
  const path = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (path === '/') {
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    const data = countStudents(database);
    res.end(`This is the list of our students \n ${data}`);
  }
});
app.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
module.exports = app;
