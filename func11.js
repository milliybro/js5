`Func11. isPrime(N) mantiqiy funksiyasini hosil qiling. (N > 0). Agar N soni tub bo'lsa - true, aks holda false qiymat qaytarilsin. QY
isPrime(7)  => true`

function isPrime(N) {
   if (N <= 1) {
     return false;
   }
 
   for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i == 0) {
        return false;
      }
    }
 
   return true;
 }
 
 let res = isPrime(7);
 console.log(res);