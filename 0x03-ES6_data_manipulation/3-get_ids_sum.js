export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => {
    let total = accumulator;
    total += student.id;
    return total;
  }, 0);
}
