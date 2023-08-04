`Func19. invertTime(H, M, S) funksiyasini hosil qiling. H - soat, M - minut, S - sekund. Funksiya orqali berilgan soat, minut va sekundni T sekundga almashtiruvchi programma tuzilsin.
invertTime(0, 6, 40) => 400`


const swapTime = (n) => (n < 10 ? "0" + n : n);

const timeToHMS = (T) => {
  let H = Math.trunc(T / 3600);
  let r = T % 3600;
  let M = Math.trunc(r / 60);
  let S = r % 60;

  H = swapTime(H);
  S = swapTime(S);
  M = swapTime(M);

  return H + ":" + M + ":" + S;
};

let res = timeToHMS(400);

console.log(res);
