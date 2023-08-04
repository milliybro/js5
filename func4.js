`Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
numberOfRoots (1, -6, 9) => 1`;

function numberOfRoots(A, B, C) {
  const D = B * B - 4 * A * C;

  if (D > 0) {
    return 2;
  } else if (D === 0) {
    return 1;
  } else {
    return 0;
  }
}

let res = numberOfRoots(1, 6, 9);
console.log(res);
