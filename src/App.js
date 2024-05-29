import{useState} from 'react';
import './App.css';

function App() {
  const TWENTYFIVE_MINUTES = 25 * 60;
  const FIVE_MINUTES = 5 * 60;
  let isSessionMode = true;
  let breakSessionLength = 5 * 60;
  let sessionLength = 25 * 60;
  let sessionTimer;
  let breakTimer;
const breakMinusElement = document.getElementById("break-minus-element");
const breakSessionElement = document.getElementById("break-session-element");
const breakPlusElement = document.getElementById("break-plus-element");
const sessionMinusElement = document.getElementById("session-minus-element");
const sessionElement = document.getElementById("session-element");
const sessionPlusElement = document.getElementById("session-plus-element");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");
const playButton = document.getElementById("play-button")
const pauseButton = document.getElementById("pause-button")
const resetButton = document.getElementById("reset-button")
const title =document.getElementById("title");
reset ()
function updateUITimer(length){
  timerMinutes.textContent = Math.floor(length/60);
  timerSeconds.textContent = length % 60;
}
function reset(){
  isSessionMode =true;
breakSessionLength = FIVE_MINUTES;
sessionLength = TWENTYFIVE_MINUTES;
breakSessionElement.textContent = FIVE_MINUTES/ 60;
sessionElement.textContent = TWENTYFIVE_MINUTES /60;
clearInterval(sessionTimer);
timerMinutes.textContent = "0";
timerSeconds.textContent = "00";
}
playButton.addEventListener("click" ,() =>{
  if(isSessionMode){
    sessionTimer = setInterval(() =>{
      sessionLength -= 1;
      updateUITimer(sessionLength)
    }, 1000);
  }
});
pauseButton.addEventListener("click" , () =>{
  if (isSessionMode){
  clearInterval(sessionTimer)
}
});
resetButton.addEventListener("click" , () =>{
  reset()
})
breakMinusElement.addEventListener("click", () =>{
breakSessionLength -= 60;
breakSessionElement.textContent = breakSessionLength /60;
});
breakPlusElement.addEventListener("click" ,() =>{
  breakSessionLength += 60;
  breakSessionElement.textContent = breakSessionLength /60;
});
sessionMinusElement.addEventListener("click" ,() =>{
sessionLength -= 60;
sessionElement.textContent = sessionLength /60;
if (isSessionMode){
  timerMinutes.textContent = sessionLength /60;
}
});
sessionPlusElement.addEventListener("click" ,() =>{
sessionLength += 60;
sessionElement.textContent = sessionLength /60;
if (isSessionMode){
  timerSeconds.textContent = sessionLength /60;
}
});
  return (
    <div className="App">
    </div>
  );
}

export default App;
