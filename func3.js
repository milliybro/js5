`Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
sign(10) => 1`;

function sign(n) {
  if (n < 0) {
    console.log(-1);
  } else if (n > 0) {
    console.log(1);
  } else {
    console.log(0);
  }
  return n;
}

sign(-9)
