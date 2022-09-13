function numberOneTriangle() {
  const n = Number(document.querySelector("#n").value);

  if (!Number.isInteger(n)) {
    alert("Ban chua dien n");

    return;
  }

  if (n < 1 || n > 10) {
    alert("n chi nam trong khoang 1 den 10");

    return;
  }

  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += "*";
    }

    result += "<br />";
  }

  document.querySelector(".result").innerHTML = result;
}
