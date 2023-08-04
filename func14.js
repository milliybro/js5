`Func14. N sonining raqamlaridan teskari tartibda hosil bo’ladigan sonni qaytaruvchi inverseNumber(N) nomli funksiya hosil qiling. QY
inverseNumber(56814) => 41865`;

function inverseNumber(N) {
  const reverse = String(N).split("").reverse().join("");
  return parseInt(reverse);
}

let res = inverseNumber(56814);
console.log(res);
