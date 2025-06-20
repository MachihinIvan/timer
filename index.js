let userMin = prompt("Введите количество минут")
let userSec = prompt("Введите коичество секунд")


const loader = document.querySelector(".loader");
const secOfTimer = document.querySelector(".sec")
const minOfTimer = document.querySelector(".min")
const selector = document.querySelector(".doublePoint")
const time =document.querySelector(".timer")



let min = parseFloat(userMin)
let sec = parseFloat(userSec)

let counter = min*60 + sec;
let step = 100/counter;
let start_count = counter
loader.style.width = "100%";


sec++

const timer = setInterval(() => {
  counter--;
  sec--;

  secOfTimer.textContent=sec 
  minOfTimer.textContent=min 

 
  if (sec === 0){
    min--;
    sec += 59;
    
  }  
 
  if (sec < 10){
    selector.textContent= ":0"
  }

  if (sec >= 10){
    selector.textContent= ":"
  }



  const wraper = parseFloat(loader.style.width);
  loader.style.width = wraper - step + "%";
  console.log(`Прошло ${counter} секунд`);
  if (counter === 0) {
    secOfTimer.textContent=" "; 
    minOfTimer.textContent="Timeout!" ;
    time.style.marginLeft = "65vh"
    time.style.marginTop = "40vh"
    document.body.style.background = "orange"
    selector.textContent= " "
    clearInterval(timer);
  }

   

}, 1000);

