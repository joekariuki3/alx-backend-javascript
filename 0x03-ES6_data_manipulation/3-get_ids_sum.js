export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => {
    let value = accumulator;
    value += student.id;
    return value;
  }, 0);
}
