let scoreH2 = document.querySelector('.score');
let timerH2 = document.querySelector('.timer');
let startBtn = document.querySelector('.startBtn');
let pauseBtn = document.querySelector('.stopBtn');
let squares = document.querySelectorAll('.square');

let score = 0;
let timeLeft = 60;
let hitposition = null;
let timerId= null;
let randomMoleId = null;

function randomMole(){

    
    squares.forEach(square=> {
        square.classList.remove('mole');
        
    })
   let randomSquare = squares[Math.floor(Math.random()*squares.length)];
   randomSquare.classList.add('mole');
   hitposition = randomSquare.id;

}

function countDown(){
    timeLeft--;
    timerH2.innerText = `timer : ${timeLeft}`;
    if (timeLeft === 0){
        clearInterval(timerId);
        clearInterval(randomMoleId);
    }
}

function startGame(){
    if(timerId== null && randomMoleId == null){
    score = 0;
    timeLeft = 60;
    scoreH2.innerHTML= ' your score: 0'
    timeLeft.innerHTML= 'Time left : 60';
    pauseBtn.innerHTML= 'Pause'
    timerId = setInterval(countDown,700);
    randomMoleId = setInterval(randomMole,700);
}
}

function pauseGame(){
     if(pauseBtn.textContent == "Pause"){
        clearInterval(timerId);
        clearInterval(randomMoleId);
        timerId=null;
        randomMoleId=null;
        pauseBtn.textContent="Resume";
        return ;
     } else{
        timerId = setInterval(countDown,700);
    randomMoleId = setInterval(randomMole,700);
    pauseBtn.textContent="Pause";
     }
}

squares.forEach(square => {
    square.addEventListener('click',()=> {
        if(timerId !==null){
            if(square.id ===  hitposition){
                score++;
                scoreH2.innerHTML = `Score : ${score}`;
                hitposition = null;
        }
    }
    })

})

startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click",pauseGame);