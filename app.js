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
