// global variables----------------------------------------------------------------------------------------------------------
var aaghSound = new Audio(chrome.runtime.getURL("djmix/aagh.wav"));
var alarmriseSound = new Audio(chrome.runtime.getURL("djmix/alarm-rise.wav"));
var chatterSound = new Audio(chrome.runtime.getURL("djmix/chatter.wav"));
var clapSound = new Audio(chrome.runtime.getURL("djmix/clap.wav"));
var cymbalriseSound = new Audio(chrome.runtime.getURL("djmix/cymbal-rise.wav"));
var comeonSound = new Audio(chrome.runtime.getURL("djmix/come-on.wav"));
var dictionarySound = new Audio(chrome.runtime.getURL("djmix/dictionary.wav"));
var dingdongSound = new Audio(chrome.runtime.getURL("djmix/dingdong.wav"));
var djshoutSound = new Audio(chrome.runtime.getURL("djmix/DJ-shout.wav"));
var excellentSound = new Audio(chrome.runtime.getURL("djmix/excellent.wav"));
var femalesingSound = new Audio(chrome.runtime.getURL("djmix/female-sing.wav"));
var fourSound = new Audio(chrome.runtime.getURL("djmix/four.wav"));
var getupSound = new Audio(chrome.runtime.getURL("djmix/get-up.wav"));
var goSound = new Audio(chrome.runtime.getURL("djmix/go.wav"));
var goodSound = new Audio(chrome.runtime.getURL("djmix/good.wav"));
var hitSound = new Audio(chrome.runtime.getURL("djmix/hit.wav"));
var listenSound = new Audio(chrome.runtime.getURL("djmix/listen.wav"));
var okSound = new Audio(chrome.runtime.getURL("djmix/ok.wav"));
var onemoretimeSound = new Audio(chrome.runtime.getURL("djmix/one-more-time.wav"));
var oneSound = new Audio(chrome.runtime.getURL("djmix/one.wav"));
var quackSound = new Audio(chrome.runtime.getURL("djmix/quack.wav"));
var riphigherSound = new Audio(chrome.runtime.getURL("djmix/rip-higher.wav"));
var scratchSound = new Audio(chrome.runtime.getURL("djmix/scratch.wav"));
var sparkleSound = new Audio(chrome.runtime.getURL("djmix/sparkle.wav"));
var squishSound = new Audio(chrome.runtime.getURL("djmix/squish.wav"));
var threeSound = new Audio(chrome.runtime.getURL("djmix/three.wav"));
var uuhghSound = new Audio(chrome.runtime.getURL("djmix/uuhgh.wav"));
var verygoodSound = new Audio(chrome.runtime.getURL("djmix/very-good.wav"));
var woohSound = new Audio(chrome.runtime.getURL("djmix/wooh.wav"));
var yoSound = new Audio(chrome.runtime.getURL("djmix/yo.wav"));
var zipupSound = new Audio(chrome.runtime.getURL("djmix/zipup.wav"));


// add piano buttons to piano------------------------------------------------------------------------------------------------
// SOURCE:https://stackoverflow.com/questions/36324333/refused-to-execute-inline-event-handler-because-it-violates-csp-sandbox#answer-36349056
document.getElementById("myButton1").addEventListener("click", aaghButton);
document.getElementById("myButton2").addEventListener("click", alarmriseButton);
document.getElementById("myButton3").addEventListener("click", chatterButton);
document.getElementById("myButton4").addEventListener("click", clapButton);
document.getElementById("myButton5").addEventListener("click", comeonButton);
document.getElementById("myButton6").addEventListener("click", cymbalriseButton);
document.getElementById("myButton7").addEventListener("click", dictionaryButton);
document.getElementById("myButton8").addEventListener("click", dingdongButton);
document.getElementById("myButton9").addEventListener("click", djshoutButton);
document.getElementById("myButton10").addEventListener("click", excellentButton);
document.getElementById("myButton11").addEventListener("click", femalesingButton);
document.getElementById("myButton12").addEventListener("click", fourButton);
document.getElementById("myButton13").addEventListener("click", getupButton);
document.getElementById("myButton14").addEventListener("click", goButton);
document.getElementById("myButton15").addEventListener("click", goodButton);
document.getElementById("myButton16").addEventListener("click", hitButton);
document.getElementById("myButton17").addEventListener("click", listenButton);
document.getElementById("myButton18").addEventListener("click", okButton);
document.getElementById("myButton19").addEventListener("click", onemoretimeButton);
document.getElementById("myButton20").addEventListener("click", oneButton);
document.getElementById("myButton21").addEventListener("click", quackButton);
document.getElementById("myButton22").addEventListener("click", riphigherButton);
document.getElementById("myButton23").addEventListener("click", scratchButton);
document.getElementById("myButton24").addEventListener("click", sparkleButton);
document.getElementById("myButton25").addEventListener("click", squishButton);
document.getElementById("myButton26").addEventListener("click", threeButton);
document.getElementById("myButton27").addEventListener("click", uuhghButton);
document.getElementById("myButton28").addEventListener("click", verygoodButton);
document.getElementById("myButton29").addEventListener("click", woohButton);

// functions to run sounds--------------------------------------------------------------------------------------------------
// SOURCE:https://stackoverflow.com/questions/27496465/how-can-i-play-sound-in-a-chrome-extension

function aaghButton() {
  console.log("aagh is running")
  aaghSound.play();
}

function alarmriseButton() {
  console.log("alarmrise is running")
  alarmriseSound.play();
}

function chatterButton() {
  console.log("chatter is running")
  chatterSound.play();
}

function clapButton() {
  console.log("clap is running")
  clapSound.play();
}

function cymbalriseButton() {
  console.log("cymbalrise is running")
  cymbalriseSound.play();
}

function comeonButton() {
  console.log("comeon is running")
  comeonSound.play();
}

function dictionaryButton() {
  console.log("dictionary is running")
  dictionarySound.play();
}

function dingdongButton() {
  console.log("dingdong is running")
  dingdongSound.play();
}

function djshoutButton() {
  console.log("djshout is running")
  djshoutSound.play();
}

function excellentButton() {
  console.log("excellent is running")
  excellentSound.play();
}

function femalesingButton() {
  console.log("femalesing is running")
  femalesingSound.play();
}

function fourButton() {
  console.log("four is running")
  fourSound.play();
}

function getupButton() {
  console.log("getup is running")
  getupSound.play();
}

function goButton() {
  console.log("go is running")
  goSound.play();
}

function goodButton() {
  console.log("good is running")
  goodSound.play();
}

function hitButton() {
  console.log("hit is running")
  hitSound.play();
}

function listenButton() {
  console.log("listen is running")
  listenSound.play();
}

function okButton() {
  console.log("ok is running")
  okSound.play();
}

function onemoretimeButton() {
  console.log("onemoretime is running")
  onemoretimeSound.play();
}

function oneButton() {
  console.log("one is running")
  oneSound.play();
}

function quackButton() {
  console.log("quack is running")
  quackSound.play();
}

function riphigherButton() {
  console.log("rip heigher is running")
  riphigherSound.play();
}

function scratchButton() {
  console.log("scratch is running")
  scratchSound.play();
}

function sparkleButton() {
  console.log("sparkle is running")
  sparkleSound.play();
}

function squishButton() {
  console.log("squish is running")
  squishSound.play();
}

function threeButton() {
  console.log("three is running")
  threeSound.play();
}

function uuhghButton() {
  console.log("uuhgh is running")
  uuhghSound.play();
}

function verygoodButton() {
  console.log("very good is running")
  verygoodSound.play();
}

function woohButton() {
  console.log("wooh is running")
  woohSound.play();
}

function yoButton() {
  console.log("yo is running")
  yoSound.play();
}

function zipupButton() {
  console.log("zipup is running");
  zipupSound.play();
}

//switch SoundBoard--------------------------------------------------------------------------------------------
document.getElementById("switchUp").addEventListener("click", pianoTone1);
document.getElementById("switchUp").addEventListener("click", pianoTone2);
document.getElementById("switchUp").addEventListener("click", pianoTone3);
document.getElementById("switchUp").addEventListener("click", pianoTone4);
document.getElementById("switchUp").addEventListener("click", pianoTone5);
document.getElementById("switchUp").addEventListener("click", pianoTone6);
document.getElementById("switchUp").addEventListener("click", pianoTone7);
document.getElementById("switchUp").addEventListener("click", pianoTone8);
document.getElementById("switchUp").addEventListener("click", pianoTone9);
document.getElementById("switchUp").addEventListener("click", pianoTone10);
document.getElementById("switchUp").addEventListener("click", pianoTone11);
document.getElementById("switchUp").addEventListener("click", pianoTone12);
document.getElementById("switchUp").addEventListener("click", pianoTone13);
document.getElementById("switchUp").addEventListener("click", pianoTone14);
document.getElementById("switchUp").addEventListener("click", pianoTone15);
document.getElementById("switchUp").addEventListener("click", pianoTone16);
document.getElementById("switchUp").addEventListener("click", pianoTone17);
document.getElementById("switchUp").addEventListener("click", pianoTone18);
document.getElementById("switchUp").addEventListener("click", pianoTone19);
document.getElementById("switchUp").addEventListener("click", pianoTone20);
document.getElementById("switchUp").addEventListener("click", pianoTone21);
document.getElementById("switchUp").addEventListener("click", pianoTone22);
document.getElementById("switchUp").addEventListener("click", pianoTone23);
document.getElementById("switchUp").addEventListener("click", pianoTone24);
document.getElementById("switchUp").addEventListener("click", pianoTone25);
document.getElementById("switchUp").addEventListener("click", pianoTone26);
document.getElementById("switchUp").addEventListener("click", pianoTone27);
document.getElementById("switchUp").addEventListener("click", pianoTone28);

function pianoTone1(){
  console.log("aagh was switched");
  aaghSound.setAttribute('src','djmix/pianoscale/piano1.wav');
}

function pianoTone2(){
  console.log("alarmrise was switched");
  alarmriseSound.setAttribute('src','djmix/pianoscale/piano2.wav');
}
