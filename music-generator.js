const music = [65, 83, 68, 70, 71, 72, 74, 75, 76];

const playBtn = document.querySelector("#playBtn");

function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return; // stop the function from running
  const associateKey = document.querySelector(`div[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  console.log(associateKey);
  associateKey.classList.add("playing");
  setTimeout(() => {
    associateKey.classList.remove("playing");
  }, 200);
}

let playing = false;

playBtn.onclick = function (e) {
  if (playing) return;
  playing = true;
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * music.length);
    console.log(randomIndex);
    const keyCode = music[randomIndex];
    playSound(keyCode);
  }, 200);
};
