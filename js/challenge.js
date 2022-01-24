// all the variables for the HTML display
let counter = document.getElementById('counter');
let minusBtn = document.getElementById('minus');
let plusBtn = document.getElementById('plus');
let pauseBtn = document.getElementById('pause')
let heartBtn = document.getElementById('heart')


let secondsCounterNum = 0;



let isPaused = false



//function to displays seconds
function secondsCounter() {
    if(isPaused === false) {
    counter.innerText = secondsCounterNum++;
    }
}



// button 
minusBtn.addEventListener('click', () => {
    secondsCounterNum--
});


plusBtn.addEventListener('click', () => {
    secondsCounterNum++
    
});

pauseBtn.addEventListener('click', () => {
    if (isPaused === true) {
        isPaused = false 
    } else {
        isPaused = true
    }
});

heartBtn.addEventListener('click', () => {

})


window.setInterval(secondsCounter, 1000)

