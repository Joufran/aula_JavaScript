//var currentNumberWrapper  = document.getElementById('currentNumber');

var currentNumberWrapper = document.getElementById('currentNumber');
currentNumberWrapper.addEventListener("click", increment);
currentNumberWrapper.addEventListener("click", decrement);
var currentNumber = 0;

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}
