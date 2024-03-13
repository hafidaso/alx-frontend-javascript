/* eslint-disable */
const updateStudentGradeByCity = (students, city, newGrades) => {
  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchedGrade) {
        return { ...student, grade: matchedGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    });
  return updatedStudents;
};

export default updateStudentGradeByCity;
