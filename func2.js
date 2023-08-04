`Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
mean(12, 48) => 30, 24`;

function mean(a, b) {
  let arif = (a + b) / 2;
  let geo = Math.sqrt(a+b); //formula xato ekan
  console.log(arif , geo);
}

mean(12, 48);
//javob to'g'ri