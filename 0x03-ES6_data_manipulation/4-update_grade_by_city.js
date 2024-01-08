export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeInfo ? gradeInfo.grade : 'N/A';
    return { ...student, grade };
  });
}
