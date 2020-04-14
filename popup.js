// button1.addEventListener("click", function(){ ("sound1").play() ;}
// button2.addEventListener("click", function(){ ("sound2").play() ;}

// https://stackoverflow.com/questions/36324333/refused-to-execute-inline-event-handler-because-it-violates-csp-sandbox#answer-36349056
document.getElementById("myButton1").addEventListener("click", aaghButton);
document.getElementById("myButton2").addEventListener("click", alarmriseButton);
document.getElementById("myButton3").addEventListener("click", chatterButton);
document.getElementById("myButton4").addEventListener("click", clapButton);
document.getElementById("myButton5").addEventListener("click", comeonButton);
document.getElementById("myButton6").addEventListener("click", cymbalriseButton);
document.getElementById("myButton7").addEventListener("click", dictionaryButton);
document.getElementById("myButton8").addEventListener("click", dingdongButton);

// https://stackoverflow.com/questions/27496465/how-can-i-play-sound-in-a-chrome-extension
function aaghButton(){
  console.log("aagh is running")
  var aaghSound = new Audio(chrome.runtime.getURL("djmix/aagh.wav"));
  aaghSound.play();
}

function alarmriseButton(){
  console.log("alarmrise is running")
  var alarmriseSound = new Audio(chrome.runtime.getURL("djmix/alarm-rise.wav"));
  alarmriseSound.play();
}

function chatterButton(){
  console.log("chatter is running")
  var chatterSound = new Audio(chrome.runtime.getURL("djmix/chatter.wav"));
  chatterSound.play();
}

function clapButton(){
  console.log("clap is running")
  var clapSound = new Audio(chrome.runtime.getURL("djmix/clap.wav"));
  clapSound.play();
}

function cymbalriseButton(){
  console.log("cymbalrise is running")
  var cymbalriseSound = new Audio(chrome.runtime.getURL("djmix/cymbal-rise.wav"));
  cymbalriseSound.play();
}

function comeonButton(){
  console.log("comeon is running")
  var comeonSound = new Audio(chrome.runtime.getURL("djmix/come-on.wav"));
  comeonSound.play();
}

function dictionaryButton(){
  console.log("dictionary is running")
  var dictionarySound = new Audio(chrome.runtime.getURL("djmix/dictionary.wav"));
  dictionarySound.play();
}

function dingdongButton(){
  console.log("dingdong is running")
  var dingdongSound = new Audio(chrome.runtime.getURL("djmix/dingdong.wav"));
  dingdongSound.play();
}
