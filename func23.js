`Func23. monthDays funksiyasidan foydalangan xolda, prevDate (D, M, Y) funksiyasini hosil qiling. Funksiya berilgan sanadan oldingi sanani aniqlasin, D - kun, Y - yil, M - oyini qaytarsin. QY
prevDate (10, 3, 2022) => 09.03.2022`

function prevDate(D, M, Y) {
   function monthDays(month, year) {
     return new Date(year, month, 0).getDate();
   }
 
   if (D == 1) {
     if (M == 1) {
       return {
         D: 31,
         M: 12,
         Y: Y - 1
       };
     } else {
       const oldingiOy = M - 1;
       const oldingiYil = Y;
       const oldingiKun = monthDays(oldingiOy, oldingiYil);
 
       return {
         D: oldingiKun,
         M: oldingiOy,
         Y: oldingiYil
       };
     }
   } else {
     return D-1+`, `+M+`, `+Y;
   }
 }

 let res= prevDate(10, 3, 2022)
 console.log(res);