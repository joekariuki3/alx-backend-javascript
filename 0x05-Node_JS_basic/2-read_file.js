// read a database file and count number of students

const fs = require('fs');

function countStudents(path) {
  const studentObjList = [];
  let studentList = [];
  let keys = [];
  fs.readFile(path, 'utf8', (error, data) => {
    // file not present
    if (error) {
      throw new Error('Cannot load the database');
    }
    // file found fix the data line by line
    studentList = data.split('\n');
    // make student object
    keys = studentList[0].split(',');
    for (let i = 1; i < studentList.length - 1; i += 1) {
      const studentInfo = studentList[i].split(',');
      const student = {};
      for (let j = 0; j < keys.length; j += 1) {
        const key = keys[j];
        const value = studentInfo[j];
        student[key] = value;
      }
      studentObjList.push(student);
    }
    console.log(`Number of students: ${studentObjList.length}`);
    // sort students per field
    const uniqFields = {};
    for (let k = 0; k < studentObjList.length; k += 1) {
      const key = studentObjList[k].field;
      const value = studentObjList[k].firstname;
      if (key in uniqFields) {
        uniqFields[key].push(` ${value}`);
      } else {
        uniqFields[key] = [];
        uniqFields[key].push(value);
      }
    }

    // list students in each filed
    const uniqFieldsKeys = Object.keys(uniqFields);
    for (let l = 0; l < uniqFieldsKeys.length; l += 1) {
      console.log(`Number of students in ${uniqFieldsKeys[l]}: ${uniqFields[uniqFieldsKeys[l]].length}. List: ${uniqFields[uniqFieldsKeys[l]]}`);
    }
  });
}

module.exports = countStudents;
