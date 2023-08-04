`Func17. 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing.
getSum3(15) => 45`;

function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 == 0) {
      sum += i;
    }
  }
  return sum;
}

let res =getSum3(15)
console.log(res);
