const Btn = document.querySelector(".js-dark-theme");
const body = document.querySelector("body");
const DepositNode = document.querySelector(".deposit");
const WithdrawNode = document.querySelector(".withdraw");
var box = document.querySelector(".box");

Btn.addEventListener("click", function () {
  const body = document.querySelector("body");
  CheckTheme();
});

function CheckTheme() {
  if (!body.classList.contains("dark")) {
    return body.classList.add("dark");
  }
  return body.classList.remove("dark");
}

let balance = 0;

function deposit() {
  let amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount)) {
    balance += amount;
    document.getElementById("balance").innerHTML = balance;
  }
}
function withdraw() {
  let amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount)) {
    if (amount <= balance) {
      balance -= amount;
      document.getElementById("balance").innerHTML = balance;
    } else {
      alert("Недостаточно средств");
    }
  }
}

DepositNode.addEventListener("click", function () {
  if (box.checked) {
    deposit();
  } else {
    alert("Вы не подтвердили транзакцию");
  }
});

WithdrawNode.addEventListener("click", function () {
  if (box.checked) {
    withdraw();
  } else {
    alert("Вы не подтвердили транзакцию");
  }
});
