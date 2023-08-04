`Func21. Mantiqiy qiymat qaytaruvchi isLeapYear(Y) funksiyasini hosil qiling. Funksiya berilgan Y - yil kabisa yili bo'lsa true, aks holda false qiymat qaytarsin.`

function isLeapYear(Y) {
   if (Y % 4 === 0) {
     if (Y % 100 === 0) {
       if (Y % 400 === 0) {
         return true; 
       } else {
         return false;
       }
     } else {
       return true; 
     }
   } else {
     return false;
   }
 }

 let res =isLeapYear(2024)
 console.log(res);
 