`Func20. decTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya berilgan vaqtdan 1 sekund oldingi vaqtni ko’rsatsin.
decTime(0, 6, 40) => 00:06:39`;

const swapTime = (n) => (n < 10 ? "0" + n : n);

function incTime(h, m, s) {
  s--;

  if (s == -1) {
    s = 59;
    m--;
    if (m == -1) {
      m = 59;
      h--;
      if (h == -1) {
        h = 23;
      }
    }
  }

  h = swapTime(h);
  m = swapTime(m);
  s = swapTime(s);

  return h + ":" + m + ":" + s;
}


let res = incTime(0, 0, 0);

console.log(res);
