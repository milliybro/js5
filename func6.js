`Func6. A va B sonlari orasidagi sonlar yig'indisini hisoblovchi sumRange(A, B) nomli funksiya hosil qiling. Agar A > B bo'lsa, funksiya 0 qiymat qaytaradi. QY
sumRange(8, 10) => 27`;

function sumRange(A, B) {
  if (A > B) {
    return 0;
  }

  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }

  return sum;
}

let res = sumRange(12, 10);
console.log(res);
