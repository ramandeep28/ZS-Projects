console.log("Welcome to spotify");
// script for spotify clone

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "420", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
];

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//listen_to_events
audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
