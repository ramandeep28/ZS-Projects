console.log("Welcome to spotify");
// script for spotify clone

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  { songName: "Mi-Amor", filePath: "songs/1.mp3", coverPath: "pics/covers/1.jpg" },
  { songName: "Zinda", filePath: "songs/2.mp3", coverPath: "pics/covers/2.jpg" },
  { songName: "Tera Hone Laga Hoon", filePath: "songs/3.mp3", coverPath: "pics/covers/3.jpg" },
  { songName: "Bijli", filePath: "songs/4.mp3", coverPath: "pics/covers/4.jpg" },
  { songName: "Mere Na", filePath: "songs/5.mp3", coverPath: "pics/covers/5.jpg" },
  { songName: "Haal Munde Nu", filePath: "songs/6.mp3", coverPath: "pics/covers/6.jpg" },
  { songName: "Gill Skill, Vol. 1", filePath: "songs/7.mp3", coverPath: "pics/covers/7.jpg" },
  { songName: "I GOT YOU", filePath: "songs/8.mp3", coverPath: "pics/covers/8.jpg" }
]

songItems.forEach((element, i)=>{
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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
  // console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log("currtime", audioElement.currentTime);
  // console.log("duration", audioElement.duration);
  // // this will give progress of the song that is being played.
  // console.log(progress);
  myProgressBar.value = progress;
});

// when we seek the progress bar, we seek the audio to that time also. 
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =(myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    e.target.remove('fa-circle-play');
    e.target.add('fa-circle-pause');
  })
})