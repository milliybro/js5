`Func16. 1 dan N ga sonlar ko’paytmasini qaytaruvchi factorial(N) nomli funksiya hosil qiling. Agar N manfiy bo’lib qolsa, 1 qaytarilsin. QY`;
function factorial(N) {
  if (N < 0) {
    return 1;
  }
  let mul = 1;

  for (let i = 1; i <= N; i++) {
    mul *= i;
  }

  return mul;
}
let res = factorial(5);
console.log(res);
