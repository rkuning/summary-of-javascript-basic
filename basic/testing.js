function scoreChecker(score) {
  let result;

  // TODO
  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 80 && score <= 89) {
    result = "Selamat! Anda mendapatkan nilai B.";
  } else if (score >= 70 && score <= 79) {
    result = "Selamat! Anda mendapatkan nilai C.";
  } else if (score >= 60 && score <= 69) {
    result = "Selamat! Anda mendapatkan nilai D.";
  } else if (score < 60) {
    result = "Selamat! Anda mendapatkan nilai E.";
  }
  // Jangan hapus kode ini
  return result;
}

console.log(scoreChecker(90));
