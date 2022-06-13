var initialPrice = document.querySelector("#Initial-price");
var stocksQuantity = document.querySelector("#quantity-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#btn-click");
var outputBox = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    console.log(loss);
    showOutput(
      `the loss is ${loss} and the loss percentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    console.log(profit);
    showOutput(
      `the profit is : ${profit} and the profit percentage is : ${profitPercentage}%`
    );
  } else {
    showOutput("No pain no gain and no gain no pain");
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
