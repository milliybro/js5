`Func12. isPrime funksiyasi orqali N gacha bo’lgan sonlar ichidan nechtasi tub ekanini aniqlovchi numberOfPrime(N) nomli dastur tuzilsin. QY
numberOfPrime(10) => 4`;
function numberOfPrime(N) {
  let count = 0;

  for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

let res = numberOfPrime(12);
console.log(res);
