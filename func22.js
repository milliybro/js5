`Func22. isLeapYear(Y) funksiyasidan foydalangan xolda, butun qiymat qaytaruvchi monthDays(M, Y) funksiyasini hosil qiling. Funksiya berilgan Y - yilning M - oyi kunlar sonini qaytarsin.
monthDays(2, 2020) => 28
monthDays(3, 2021) => 31
`

function monthDays(M, Y) {
   let isLeap = isLeapYear(Y);
 
   const daysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 
   return daysInMonth[M - 1];
 }
 
 function isLeapYear(Y) {
   if ((Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0) {
     return true; 
   } else {
     return false;
   }
 }

 let res= monthDays(2,2020)
 console.log(res);