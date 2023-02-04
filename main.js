function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running
  const associateKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  associateKey.classList.add("playing");

  setTimeout(() => {
    associateKey.classList.remove("playing");
  }, 200);
}

// const keys = document.querySelectorAll(".key");

// function removeTransition(e) {
//   const associateKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   associateKey.classList.remove("playing");
// }
// window.addEventListener("keyup", removeTransition);
window.addEventListener("keydown", playSound);
