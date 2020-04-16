// https://stackoverflow.com/questions/36324333/refused-to-execute-inline-event-handler-because-it-violates-csp-sandbox#answer-36349056
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
document.getElementById("myButton30").addEventListener("click", yoButton);
document.getElementById("myButton31").addEventListener("click", zipupButton);


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

function djshoutButton(){
  console.log("djshout is running")
  var djshoutSound = new Audio(chrome.runtime.getURL("djmix/DJ-shout.wav"));
  djshoutSound.play();
}

function excellentButton(){
  console.log("excellent is running")
  var excellentSound = new Audio(chrome.runtime.getURL("djmix/excellent.wav"));
  excellentSound.play();
}

function femalesingButton(){
  console.log("femalesing is running")
  var femalesingSound = new Audio(chrome.runtime.getURL("djmix/female-sing.wav"));
  Sound.play();
}

function fourButton(){
  console.log("four is running")
  var fourSound = new Audio(chrome.runtime.getURL("djmix/four.wav"));
  fourSound.play();
}

function getupButton(){
  console.log("getup is running")
  var getupSound = new Audio(chrome.runtime.getURL("djmix/get-up.wav"));
  getupSound.play();
}

function goButton(){
  console.log("go is running")
  var goSound = new Audio(chrome.runtime.getURL("djmix/go.wav"));
  goSound.play();
}

function goodButton(){
  console.log("good is running")
  var goodSound = new Audio(chrome.runtime.getURL("djmix/good.wav"));
  goodSound.play();
}

function hitButton(){
  console.log("hit is running")
  var hitSound = new Audio(chrome.runtime.getURL("djmix/hit.wav"));
  hitSound.play();
}

function listenButton(){
  console.log("listen is running")
  var listenSound = new Audio(chrome.runtime.getURL("djmix/listen.wav"));
  listenSound.play();
}

function okButton(){
  console.log("ok is running")
  var okSound = new Audio(chrome.runtime.getURL("djmix/ok.wav"));
  okSound.play();
}

function onemoretimeButton(){
  console.log("onemoretime is running")
  var onemoretimeSound = new Audio(chrome.runtime.getURL("djmix/one-more-time.wav"));
  onemoretimeSound.play();
}

function oneButton(){
  console.log("one is running")
  var oneSound = new Audio(chrome.runtime.getURL("djmix/one.wav"));
  oneSound.play();
}

function quackButton(){
  console.log("quack is running")
  var quackSound = new Audio(chrome.runtime.getURL("djmix/quack.wav"));
  quackSound.play();
}

function riphigherButton(){
  console.log("rip heigher is running")
  var riphigherSound = new Audio(chrome.runtime.getURL("djmix/rip-higher.wav"));
  riphigherSound.play();
}

function scratchButton(){
  console.log("scratch is running")
  var scratchSound = new Audio(chrome.runtime.getURL("djmix/scratch.wav"));
  scratchSound.play();
}

function sparkleButton(){
  console.log("sparkle is running")
  var sparkleSound = new Audio(chrome.runtime.getURL("djmix/sparkle.wav"));
  sparkleSound.play();
}

function squishButton(){
  console.log("squish is running")
  var squishSound = new Audio(chrome.runtime.getURL("djmix/squish.wav"));
  squishSound.play();
}

function threeButton(){
  console.log("three is running")
  var threeSound = new Audio(chrome.runtime.getURL("djmix/three.wav"));
  threeSound.play();
}

function uuhghButton(){
  console.log("uuhgh is running")
  var uuhghSound = new Audio(chrome.runtime.getURL("djmix/uuhgh.wav"));
  uuhghSound.play();
}

function verygoodButton(){
  console.log("very good is running")
  var verygoodSound = new Audio(chrome.runtime.getURL("djmix/very-good.wav"));
  verygoodSound.play();
}

function woohButton(){
  console.log("wooh is running")
  var woohSound = new Audio(chrome.runtime.getURL("djmix/wooh.wav"));
  woohSound.play();
}

function yoButton(){
  console.log("yo is running")
  var yoSound = new Audio(chrome.runtime.getURL("djmix/yo.wav"));
  yoSound.play();
}

function zipupButton(){
  console.log("zipup is running")
  var zipupSound = new Audio(chrome.runtime.getURL("djmix/zipup.wav"));
  zipupSound.play();
}
