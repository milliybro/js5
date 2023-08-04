`Func15. isPalindrom(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni palindrom bo'lsa - true, aks holda false qiymat qaytarilsin. inverseNumber funksiyasidan foydalaning. Palindromik son - chapda ham, o’ngdan ham o’qilganda bir xil bo’ladigan son. Masalan, 123321, 78987. QY
isPalindrom(1678761) => true`;

function isPalindrome(N) {
  let str = N.toString();

  let palindrom = inverseNumber(str);

  if (str === palindrom) {
    return true;
  } else {
    return false;
  }
}

function inverseNumber(str) {
  return str.split("").reverse().join("");
}

let res = isPalindrome(1678761);
console.log(res);
