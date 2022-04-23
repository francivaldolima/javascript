document.querySelector("#increment").addEventListener('click',increment);
document.querySelector("#decrement").addEventListener('click',decrement);

var currentNumber = 0;
function increment(){
    var currentNumberWrapper = document.getElementById("currentNumber");
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
        var currentNumberWrapper = document.getElementById("currentNumber");
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
}



