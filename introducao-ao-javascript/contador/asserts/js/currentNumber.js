var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber <= 3) {
    document.getElementById("heading").style.color = "White";
    document.getElementById("paragrafo").style.color = "White";
    document.getElementById("currentNumber").style.color = "White";
    changeBackgroundImage();
  }else if(currentNumber > 4 && currentNumber <=8){
    document.body.style.backgroundImage ="url('https://www.themoviedb.org/t/p/original/xM8zPWNqwbgCZQNgOOH2YeM7Cu.jpg')";
  }else{
    document.body.style.backgroundImage ="url('https://www.themoviedb.org/t/p/original/koY8N9Y8IcLlb2eJXz50X1hFUL5.jpg')";
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;

  if (currentNumber < 0) {
    document.getElementById("heading").style.color = "Red";
    document.getElementById("paragrafo").style.color = "Red";
    document.getElementById("currentNumber").style.color = "Red";
    changeBackgroundImage2();
  }
}

function changeBackgroundImage() {
    document.body.style.backgroundImage ="url('https://www.themoviedb.org/t/p/original/a6lJwBf62zCmMQMunhAKimX7Mnp.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  function changeBackgroundImage2(){
    document.body.style.backgroundImage ="url(' https://www.themoviedb.org/t/p/original/l49X7KxytkRCdXrpAu92QqxVrN5.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

 
