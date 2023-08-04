`Func7. Arifmetik amallarni bajaruvchi calc(A, B, S) funksiyasini hosil qiling. A va B haqiqiy sonlar. S o'zgaruchisi orqali bajariladigan arifmetik amal aniqlanadi. “-” – ayirish, “*” – ko'paytirish, “/” - bo'lish, “+” - qo'shish va boshqa belgilar uchun 0 qaytarsin. QY
calc(10, 15, “*”) => 150
calc(7, 8, “+”) => 15`;

function calc(A, B, S) {
  switch (S) {
    case "+":
      return A + B;
    case "-":
      return A - B;
    case "*":
      return A * B;
    case "/":
      return A / B;
    default:
      return 0;
  }
}

let res = calc(10, 15, "+");
console.log(res);
