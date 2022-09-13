function findPrimes() {
  const a = Number(document.querySelector("#a").value);
  const b = Number(document.querySelector("#b").value);
  const result = [];

  if (!a) {
    alert("Ban chua dien a");

    return;
  }

  if (!b) {
    alert("Ban chua dien b");

    return;
  }

  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  document.querySelector(".result").innerText =
    "Cac so nguyen to tu a den b la: " + result.join(", ");

  function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n > 1;
  }
}
