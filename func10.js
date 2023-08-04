`Func10. isPowerN(K, N) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K soni N soninig biror darajasi bo'lsa - true, aks xolda false qiymat qaytarilsin. QY`;

function isPowerN(K, N) {
  if (K <= 0 || N <= 0) {
    return false;
  }

  let power = 1;
  while (power <= K) {
    if (power === K) {
      return true;
    }
    power *= N;
  }

  return false;
}

let res = isPowerN(16, 4);
console.log(res);
