/*
Pengujian Kode
Kita telah mempelajari bentuk penulisan script test menggunakan Jest. Selanjutnya, kita akan membuat 2 buah fungsi untuk pengujian kode berdasarkan proyek yang sudah dibuat di materi sebelumnya. Perhatikan urutan langkahnya di bawah ini.

Buatlah file bernama gradeCalculations.js dalam folder latihantesting.

*/
const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every((exam) => typeof exam === "number");
  if (!numberValidation) throw Error("please input number");

  const sumValues = valuesExam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
  const minValues = 75;
  const average = averageExams(valuesExam);

  if (average > minValues) {
    console.log(`${name} pass the exams`);
    return true;
  } else {
    console.log(`${name} fail the exams`);
    return false;
  }
};

module.exports = { averageExams, isStudentPassExam };
