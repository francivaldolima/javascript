var currentNumberWrapper = document.getElementById("currentNumber");

var btnIncrement = document.getElementById("btnIncrement");
var btnDecrement = document.getElementById("btnDecrement");

var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber >= 10) {
    btnIncrement.disabled = true;
    document.body.style.backgroundImage ="url('https://www.themoviedb.org/t/p/original/qOIcHf7B7PMNPMQQrXkvUtQJW9g.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById("heading").style.color = "Indigo";
    document.getElementById("paragrafo").style.color = "Indigo";
    document.getElementById("currentNumber").style.color = "Indigo";
  }
}
function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber <= 0) {
    btnDecrement.disabled = true;
    document.body.style.backgroundImage ="url('https://www.themoviedb.org/t/p/original/zM2MZooAPuNiy5bX9nVH6YYDkq6.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.getElementById("heading").style.color = "Black";
    document.getElementById("paragrafo").style.color = "Black";
    document.getElementById("currentNumber").style.color = "Black";
  }

}
