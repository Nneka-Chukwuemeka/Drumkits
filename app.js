function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; // will stop the audio from pressing keys not included.
  audio.currentTime = 0; // this will make it rewind immediately
  audio.play();
  key.classList.add("playing");
}
const keys = document.querySelectorAll(".key");
function removeTransition(e) {
  if (e.propertyName != "transform") return; // it means kip if its not transform
  this.classList.remove("playing");
}
for (i = 0; i < keys.length; i++) {
  newKey = keys[i];
  newKey.addEventListener("transitionend", removeTransition);
}

window.addEventListener("keydown", playSound);
/*const key = document.querySelector(".key");
key.addEventListener("click", function (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  console.log(audio);
});*/

function clickSound(e) {
  if (!audio) return;

  audio.play();
}

const btnA = document.querySelector("#key-a");
const btnS = document.querySelector("#key-s");
const btnD = document.querySelector("#key-d");
const btnF = document.querySelector("#key-f");
const btnG = document.querySelector("#key-g");
const btnH = document.querySelector("#key-h");
const btnJ = document.querySelector("#key-j");
const btnK = document.querySelector("#key-k");
const btnL = document.querySelector("#key-l");
btnA.addEventListener("click", function (e) {
  const audioA = document.querySelector(".play-A");
  audioA.currentTime = 0;
  audioA.play();
  key.classList.add("playing");
});
btnS.addEventListener("click", function (e) {
  const audioS = document.querySelector(".play-S");
  audioS.currentTime = 0;
  audioS.play();
  key.classList.add("playing");
});
btnD.addEventListener("click", function (e) {
  const audioD = document.querySelector(".play-D");
  audioD.currentTime = 0;
  audioD.play();
  key.classList.add("playing");
});
btnF.addEventListener("click", function (e) {
  const audioF = document.querySelector(".play-F");
  audioF.currentTime = 0;
  audioF.play();
  key.classList.add("playing");
});
btnG.addEventListener("click", function (e) {
  const audioG = document.querySelector(".play-G");
  audioG.currentTime = 0;
  audioG.play();
  key.classList.add("playing");
});
btnH.addEventListener("click", function (e) {
  const audioH = document.querySelector(".play-H");
  audioH.currentTime = 0;
  audioH.play();
  key.classList.add("playing");
});
btnJ.addEventListener("click", function (e) {
  const audioJ = document.querySelector(".play-J");
  audioJ.currentTime = 0;
  audioJ.play();
  key.classList.add("playing");
});
btnK.addEventListener("click", function (e) {
  const audioK = document.querySelector(".play-K");
  audioK.currentTime = 0;
  audioK.play();
  key.classList.add("playing");
});
btnL.addEventListener("click", function (e) {
  const audioL = document.querySelector(".play-L");
  audioL.currentTime = 0;
  audioL.play();
  key.classList.add("playing");
});
