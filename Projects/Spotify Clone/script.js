console.log("Welcome to spotify");
// script for spotify clone

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let prev = document.getElementById("previous");
let masterSongName = document.getElementById("masterSongName");
let nxt = document.getElementById("next");

let songs = [
  {
    songName: "Mi-Amor",filePath: "songs/1.mp3",coverPath: "pics/covers/1.jpg",
  },
  {
    songName: "Bohemia-420",filePath: "songs/2.mp3",coverPath: "pics/covers/2.jpg",
  },
  {
    songName: "Tera Hone Laga Hoon",filePath: "songs/3.mp3",coverPath: "pics/covers/3.jpg",
  },
  {
    songName: "Bijli",filePath: "songs/4.mp3",coverPath: "pics/covers/4.jpg",
  },
  {
    songName: "Mere Na",filePath: "songs/5.mp3",coverPath: "pics/covers/5.jpg",
  },
  {
    songName: "Haal Munde Nu",filePath: "songs/6.mp3",coverPath: "pics/covers/6.jpg",
  },
  {
    songName: "Gill Skill, Vol. 1",filePath: "songs/7.mp3",coverPath: "pics/covers/7.jpg",
  },
  {
    songName: "I GOT YOU",filePath: "songs/8.mp3",coverPath: "pics/covers/8.jpg",
  },
];

// to add cover photo and song names in the song list we made in the app
songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

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

//listen_to_events, updating song progress value and seekbar
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
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// when we play song from the list, then that song icon changes to pause as its being played and others change to play icon.
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

// to make the song play and pause from the icons present in song list in app.
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      // when sing will change, then current time will change to 0 everytime bro
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

// to play previous song using previous button
nxt.addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

// to play next song using next button
prev.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
