//var currentNumberWrapper  = document.getElementById('currentNumber');

var currentNumberWrapper = document.getElementById('currentNumber');
currentNumberWrapper.addEventListener("click", increment);
currentNumberWrapper.addEventListener("click", decrement);
var currentNumber = 0;


function increment() {
    //desabilita o botão de incremento quando chegar a 10
    if (currentNumber > 9){
        document.getElementById('currentNumber').disabled = true;
    }else{
        if(currentNumber => 1){
            document.getElementById('currentNumber').style.color = "blue";
        }
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() { 
    //desabilita o botão de decremento quando chegar a -10
    if (currentNumber < -9) {
        document.getElementById("currentNumber").disabled = true;
    } else{
        if(currentNumber < 1){
            document.getElementById('currentNumber').style.color = "red";
        }
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber; 
    }
}

