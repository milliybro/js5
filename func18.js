`Func18. 1 dan N ga sonlar bo’lgan juft va toqlar sonlar yig’indisini qaytaruvchi sumOddEven(N) nomli funksiya hosil qiling. QYM
sumOddEven(10) => 30, 25`;

function sumOddEven(N) {
  let toq = 0;
  let juft = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      toq += i;
    } else {
      juft += i;
    }
  }

  return toq+", " +juft;
}

let res =sumOddEven(10)
console.log(res);
