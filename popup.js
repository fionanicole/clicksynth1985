// changing the color of a key
// https://www.geeksforgeeks.org/how-to-pick-a-random-color-from-an-array-using-css-and-javascript/

// Make the keys light up when rolled over
// SOURCE for random rollover code: https://stackoverflow.com/questions/31468794/how-to-show-random-color-on-hover-in-css
var rollKey = document.getElementsByClassName('keySet');
for (var i = 0; i < rollKey.length; i++) {
    rollKey[i].onmouseover = function(e) {
      var colors = ['rgb(51, 153, 255)', 'rgb(153, 102, 255)', 'rgb(255, 179, 255)','rgb(204, 51, 255)','rgb(0, 102, 255)','rgb(102, 0, 255)','rgb(255, 51, 204)','rgb(128, 204, 255)'];
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      this.style.backgroundColor = random_color;
    }
}

// sound variables----------------------------------------------------------------------------------------------------------
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

// https://stackoverflow.com/questions/31773344/how-to-instantly-play-an-audio-clearly-using-javascript-without-any-lag
"*.wav".preload = 'auto';

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

//switch SoundBoard to piano--------------------------------------------------------------------------------------------
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
document.getElementById("switchUp").addEventListener("click", pianoTone29);

function pianoTone1() {
  console.log("aagh was switched");
  aaghSound.setAttribute('src', 'djmix/pianoscale/piano1.wav');
}

function pianoTone2() {
  console.log("alarmrise was switched");
  alarmriseSound.setAttribute('src', 'djmix/pianoscale/piano2.wav');
}

function pianoTone3() {
  console.log("chatter was switched");
  chatterSound.setAttribute('src', 'djmix/pianoscale/piano3.wav');
}

function pianoTone4() {
  console.log("clap was switched");
  clapSound.setAttribute('src', 'djmix/pianoscale/piano4.wav');
}

function pianoTone5() {
  console.log("come on was switched");
  comeonSound.setAttribute('src', 'djmix/pianoscale/piano5.wav');
}

function pianoTone6() {
  console.log("cymbalrise was switched");
  cymbalriseSound.setAttribute('src', 'djmix/pianoscale/piano6.wav');
}

function pianoTone7() {
  console.log("dictionary was switched");
  dictionarySound.setAttribute('src', 'djmix/pianoscale/piano7.wav');
}

function pianoTone8() {
  console.log("dingdong was switched");
  dingdongSound.setAttribute('src', 'djmix/pianoscale/piano8.wav');
}

function pianoTone9() {
  console.log("djshout was switched");
  djshoutSound.setAttribute('src', 'djmix/pianoscale/piano9.wav');
}

function pianoTone10() {
  console.log("excellent was switched");
  excellentSound.setAttribute('src', 'djmix/pianoscale/piano10.wav');
}

function pianoTone11() {
  console.log("femalesing was switched");
  femalesingSound.setAttribute('src', 'djmix/pianoscale/piano11.wav');
}

function pianoTone12() {
  console.log("four was switched");
  fourSound.setAttribute('src', 'djmix/pianoscale/piano12.wav');
}

function pianoTone13() {
  console.log("get up was switched");
  getupSound.setAttribute('src', 'djmix/pianoscale/piano13.wav');
}

function pianoTone14() {
  console.log("go was switched");
  goSound.setAttribute('src', 'djmix/pianoscale/piano14.wav');
}

function pianoTone15() {
  console.log("good was switched");
  goodSound.setAttribute('src', 'djmix/pianoscale/piano15.wav');
}

function pianoTone16() {
  console.log("hit was switched");
  hitSound.setAttribute('src', 'djmix/pianoscale/piano16.wav');
}

function pianoTone17() {
  console.log("listen was switched");
  listenSound.setAttribute('src', 'djmix/pianoscale/piano17.wav');
}

function pianoTone18() {
  console.log("ok was switched");
  okSound.setAttribute('src', 'djmix/pianoscale/piano18.wav');
}

function pianoTone19() {
  console.log("one more time was switched");
  onemoretimeSound.setAttribute('src', 'djmix/pianoscale/piano19.wav');
}

function pianoTone20() {
  console.log("one was switched");
  oneSound.setAttribute('src', 'djmix/pianoscale/piano20.wav');
}

function pianoTone21() {
  console.log("quack was switched");
  quackSound.setAttribute('src', 'djmix/pianoscale/piano21.wav');
}

function pianoTone22() {
  console.log("rip higher was switched");
  riphigherSound.setAttribute('src', 'djmix/pianoscale/piano22.wav');
}

function pianoTone23() {
  console.log("scratch was switched");
  scratchSound.setAttribute('src', 'djmix/pianoscale/piano23.wav');
}

function pianoTone24() {
  console.log("sparkle was switched");
  sparkleSound.setAttribute('src', 'djmix/pianoscale/piano24.wav');
}

function pianoTone25() {
  console.log("squish was switched");
  squishSound.setAttribute('src', 'djmix/pianoscale/piano25.wav');
}

function pianoTone26() {
  console.log("three was switched");
  threeSound.setAttribute('src', 'djmix/pianoscale/piano26.wav');
}

function pianoTone27() {
  console.log("uuhgh was switched");
  uuhghSound.setAttribute('src', 'djmix/pianoscale/piano27.wav');
}

function pianoTone28() {
  console.log("very good was switched");
  verygoodSound.setAttribute('src', 'djmix/pianoscale/piano28.wav');
}

function pianoTone29() {
  console.log("wooh was switched");
  woohSound.setAttribute('src', 'djmix/pianoscale/piano29.wav');
}

//switch SoundBoard back to sound effects--------------------------------------------------------------------------------------------
// document.getElementById("switchBack").addEventListener("click", switchpianoTone1);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone2);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone3);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone4);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone5);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone6);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone7);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone8);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone9);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone10);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone11);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone12);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone13);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone14);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone15);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone16);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone17);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone18);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone19);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone20);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone21);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone22);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone23);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone24);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone25);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone26);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone27);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone28);
// document.getElementById("switchBack").addEventListener("click", switchpianoTone29);
//
// function switchpianoTone1() {
//   console.log("aagh was switched");
//   aaghSound.setAttribute('src', 'djmix/pianoscale/aagh.wav');
// }
//
// function switchpianoTone2() {
//   console.log("alarmrise was switched");
//   alarmriseSound.setAttribute('src', 'djmix/pianoscale/alarm-rise.wav');
// }
//
// function switchpianoTone3() {
//   console.log("chatter was switched");
//   chatterSound.setAttribute('src', 'djmix/pianoscale/chatter.wav');
// }
//
// function switchpianoTone4() {
//   console.log("clap was switched");
//   clapSound.setAttribute('src', 'djmix/pianoscale/clap.wav');
// }
//
// function switchpianoTone5() {
//   console.log("come on was switched");
//   comeonSound.setAttribute('src', 'djmix/pianoscale/come-on.wav');
// }
//
// function switchpianoTone6() {
//   console.log("cymbalrise was switched");
//   cymbalriseSound.setAttribute('src', 'djmix/pianoscale/cymbal-rise.wav');
// }
//
// function switchpianoTone7() {
//   console.log("dictionary was switched");
//   dictionarySound.setAttribute('src', 'djmix/pianoscale/dictionary.wav');
// }
//
// function switchpianoTone8() {
//   console.log("dingdong was switched");
//   dingdongSound.setAttribute('src', 'djmix/pianoscale/dingdong.wav');
// }
//
// function switchpianoTone9() {
//   console.log("djshout was switched");
//   djshoutSound.setAttribute('src', 'djmix/pianoscale/piano9.wav');
// }
//
// function switchpianoTone10() {
//   console.log("excellent was switched");
//   excellentSound.setAttribute('src', 'djmix/pianoscale/piano10.wav');
// }
//
// function switchpianoTone11() {
//   console.log("femalesing was switched");
//   femalesingSound.setAttribute('src', 'djmix/pianoscale/piano11.wav');
// }
//
// function switchpianoTone12() {
//   console.log("four was switched");
//   fourSound.setAttribute('src', 'djmix/pianoscale/piano12.wav');
// }
//
// function switchpianoTone13() {
//   console.log("get up was switched");
//   getupSound.setAttribute('src', 'djmix/pianoscale/piano13.wav');
// }
//
// function switchpianoTone14() {
//   console.log("go was switched");
//   goSound.setAttribute('src', 'djmix/pianoscale/piano14.wav');
// }
//
// function switchpianoTone15() {
//   console.log("good was switched");
//   goodSound.setAttribute('src', 'djmix/pianoscale/piano15.wav');
// }
//
// function switchpianoTone16() {
//   console.log("hit was switched");
//   hitSound.setAttribute('src', 'djmix/pianoscale/piano16.wav');
// }
//
// function switchpianoTone17() {
//   console.log("listen was switched");
//   listenSound.setAttribute('src', 'djmix/pianoscale/piano17.wav');
// }
//
// function switchpianoTone18() {
//   console.log("ok was switched");
//   okSound.setAttribute('src', 'djmix/pianoscale/piano18.wav');
// }
//
// function switchpianoTone19() {
//   console.log("one more time was switched");
//   onemoretimeSound.setAttribute('src', 'djmix/pianoscale/piano19.wav');
// }
//
// function switchpianoTone20() {
//   console.log("one was switched");
//   oneSound.setAttribute('src', 'djmix/pianoscale/piano20.wav');
// }
//
// function switchpianoTone21() {
//   console.log("quack was switched");
//   quackSound.setAttribute('src', 'djmix/pianoscale/piano21.wav');
// }
//
// function switchpianoTone22() {
//   console.log("rip higher was switched");
//   riphigherSound.setAttribute('src', 'djmix/pianoscale/piano22.wav');
// }
//
// function switchpianoTone23() {
//   console.log("scratch was switched");
//   scratchSound.setAttribute('src', 'djmix/pianoscale/piano23.wav');
// }
//
// function switchpianoTone24() {
//   console.log("sparkle was switched");
//   sparkleSound.setAttribute('src', 'djmix/pianoscale/piano24.wav');
// }
//
// function switchpianoTone25() {
//   console.log("squish was switched");
//   squishSound.setAttribute('src', 'djmix/pianoscale/piano25.wav');
// }
//
// function switchpianoTone26() {
//   console.log("three was switched");
//   threeSound.setAttribute('src', 'djmix/pianoscale/piano26.wav');
// }
//
// function switchpianoTone27() {
//   console.log("uuhgh was switched");
//   uuhghSound.setAttribute('src', 'djmix/pianoscale/piano27.wav');
// }
//
// function switchpianoTone28() {
//   console.log("very good was switched");
//   verygoodSound.setAttribute('src', 'djmix/pianoscale/piano28.wav');
// }
//
// function switchpianoTone29() {
//   console.log("wooh was switched");
//   woohSound.setAttribute('src', 'djmix/pianoscale/piano29.wav');
// }
