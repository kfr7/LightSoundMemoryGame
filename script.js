// Global Constants
const clueHoldTime = 1000; // length of each sound/light during clue
const cluePauseTime = 333;  // length of pause between clues
const nextClueWaitTime = 1000;  // length before starting playback of the clue sequence

// Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

// Sound Synthesis Functions
const freqMap = {
   // these are the frequencies () / lower = lower pitches and vice versa
  1: 250,
  2: 300,
  3: 350,
  4: 400,
  5: 450, 
  6: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function startGame(){
    //initialize game variables
    pattern = Array.from({length: 8}, () => Math.floor(Math.random() * 6) + 1);
    progress = 0;
    gamePlaying = true;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}



function stopGame(){
    gamePlaying = false;
    // swap the Start and Stop buttons
    // hide the role indicator buttons when game is stopped at whatever time
    document.getElementById("playClueBtn").classList.add("hidden");
    document.getElementById("playerTurnBtn").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("timer").childNodes[0].nodeValue="Countdown Timer";
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,(clueHoldTime-(progress*90)));
    setTimeout(clearButton,(clueHoldTime-(progress*90)),btn);
  }
}

function playClueSequence(){
  document.getElementById("playerTurnBtn").classList.add("hidden");
  document.getElementById("timer").childNodes[0].nodeValue="You will have: " + (progress+2).toString() + " seconds for the next turn";
  document.getElementById("playClueBtn").classList.remove("hidden");
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime-(progress*90);
    delay += cluePauseTime;
  }
  setTimeout(switchRoleButtons, delay-cluePauseTime);
  setTimeout(startTimer, delay-cluePauseTime);
  // Start the countdown
}

function startTimer() {
  if (gamePlaying == true) {
    document.getElementById("timer").childNodes[0].nodeValue="Counting Down! " + (progress+2).toString() + " seconds left";
    updateTimerRec(progress+2, progress);
  }
}

function updateTimerRec(timeLeft, whenCalled) {
  if (whenCalled != progress || gamePlaying == false) {
    return;
  }
  if (timeLeft == 0) {
    document.getElementById("timer").childNodes[0].nodeValue= "Time's Up!";
    loseGame();
  }
  else {
    document.getElementById("timer").childNodes[0].nodeValue= "Counting Down! " + timeLeft.toString() + " seconds left";
    setTimeout( function() { updateTimerRec(timeLeft - 1, whenCalled); }, 1000);
  }
}

function switchRoleButtons() {
  if (gamePlaying == true) {
    document.getElementById("playClueBtn").classList.add("hidden");
    document.getElementById("playerTurnBtn").classList.remove("hidden");
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Hurray! You won! You have some great memory.");
}

function guess(btn){
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (guessCounter == pattern.length - 1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    loseGame();
  }
}
