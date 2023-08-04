`Func24. monthDays funksiyasidan foydalangan xolda, nextDate(D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan keying sanani aniqlasin, D-kun, Y yil, M - oyini qaytarsin. QY
nextDate (10, 3, 2022) => 11.03.2022`;

function nextDate(D, M, Y) {
  let daysInMonth = monthDays(M, Y);

  if (D === daysInMonth) {
    if (M === 12) {
      Y++;
      M = 1;
      D = 1;
    } else {
      M++;
      D = 1;
    }
  } else {
    D++;
  }

  return { D, M, Y };
}

function monthDays(M, Y) {
  const daysInMonth = [
    31,
    28 + isLeapYear(Y),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return daysInMonth[M - 1];
}

function isLeapYear(Y) {
  return (Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0;
}

let res = nextDate(1, 1, 2022);
console.log(res);
