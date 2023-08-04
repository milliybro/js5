`Func13. Butun qiymat qaytaruvchi digitNth(K, N) funksiyasini hosil qiling. (K > 0). Funksiya K sonining N-raqamini qaytarsin. Agar K soni raqamlari N dan kichik bo'lsa, -1 qaytarilsin. digitCount funksiyasidan foydalaning.QY
digitNth(105782, 5) => 8
digitNth(1057, 5) => -1`

function digitNth(K, N) {
   let digitCount = K.toString().length;
 
   if (N > digitCount) {
     return -1;
   }
 
   let digit = Math.trunc(K / Math.pow(10, digitCount - N)) % 10;
   return digit;
 }

 let res =digitNth(105782, 8)
 console.log(res);