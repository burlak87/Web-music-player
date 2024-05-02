// слайдер
let currentSlide = 0;

function Slider() {
  let image = document.querySelectorAll(".imgSwiperOne");
  let imagesList = document.querySelector("ul");
  if (image.length === 0) {
    imagesList.style.transform = `translateX(0px)`;
    return;
  };
  imagesList.style.transform = `translateX(-${currentSlide * 600}px)`;
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[currentSlide].classList.add("active");
  if (currentSlide === image.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  };
};
setInterval(() => {
  Slider();
}, 3000);

// слайдер с текстом

const text1_options = [
  "пятый студийный альбом американского музыканта Брайана Уилсона, выпущенный 28 сентября 2004 года на Nonesuch.",
  "концертный альбом американской рок-группы Nirvana",
];
const text2_options = [
  "Brian Wilson - Smile",
  "Nirvana - MTV Unplugged in New York",
];
const color_options = ["#FE9968", "#6CE5B1"];
const image_options = [
  "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-399-brian-wilsons-smile.jpg?w=1000",
  "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-279-Nirvana-MTV-Unplugged.jpg?w=1000",
];

// поменять на свои картинки и цвета и  текст

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carouselText");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
carousel.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];
  currentOptionText2.dataset.nextText = text2_options[i];
  carousel.style.background = color_options[i];
  carousel.classList.add("anim-next");
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];
  currentOptionText2.dataset.previousText = text2_options[i];
  carousel.style.background = color_options[i];
  carousel.classList.add("anim-previous");
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};

// слайдер с текстом 2

const text1_optionsSongs = [
  "песня американского фолк-рок музыканта Бенсона Буна",
  "песня чилийских певцов Флойменора и Криса М.Дж"
];
const text2_optionsSongs = [
  "Benson Boone - Beautiful Things",
  "FloyyMenor - Gata Only"
];
const color_optionsSongs = ["#FE9968", "#6CE5B1"];
const image_optionsSongs = [
  "https://upload.wikimedia.org/wikipedia/ru/4/4b/Benson_Boone_-_Beautiful_Things.png",
  "https://upload.wikimedia.org/wikipedia/en/9/95/FloyyMenor_%26_Cris_MJ_-_Gata_Only.png?20240412182239"
];

// поменять на свои картинки и цвета и  текст

var m = 0;
const currentOptionText1Songs = document.getElementById("current-option-text1Songs");
const currentOptionText2Songs = document.getElementById("current-option-text2Songs");
const currentOptionImageSongs = document.getElementById("imageSongs");
const carouselSongs = document.getElementById("carouselTextSongs");
const mainMenuSongs = document.getElementById("menuSongs");
const optionPreviousSongs = document.getElementById("previous-optionSongs");
const optionNextSongs = document.getElementById("next-optionSongs");

currentOptionText1Songs.innerText = text1_optionsSongs[m];
currentOptionText2Songs.innerText = text2_optionsSongs[m];
currentOptionImageSongs.style.backgroundImage = "url(" + image_optionsSongs[m] + ")";
carouselSongs.style.background = color_optionsSongs[m];

optionNextSongs.onclick = function () {
  m = m + 1;
  m = m % text1_optionsSongs.length;
  currentOptionText1Songs.dataset.nextText = text1_optionsSongs[m];
  currentOptionText2Songs.dataset.nextText = text2_optionsSongs[m];
  carouselSongs.style.background = color_optionsSongs[m];
  carouselSongs.classList.add("anim-next");
  setTimeout(() => {
    currentOptionImageSongs.style.backgroundImage = "url(" + image_optionsSongs[m] + ")";
  }, 455);
  setTimeout(() => {
    currentOptionText1Songs.innerText = text1_optionsSongs[m];
    currentOptionText2Songs.innerText = text2_optionsSongs[m];
    carouselSongs.classList.remove("anim-next");
  }, 650);
};

optionPreviousSongs.onclick = function () {
  if (m === 0) {
    m = text1_optionsSongs.length;
  }
  m = m - 1;
  currentOptionText1Songs.dataset.previousText = text1_optionsSongs[m];
  currentOptionText2Songs.dataset.previousText = text2_optionsSongs[m];
  carouselSongs.style.background = color_optionsSongs[m];
  carouselSongs.classList.add("anim-previous");
  setTimeout(() => {
    currentOptionImageSongs.style.backgroundImage = "url(" + image_optionsSongs[m] + ")";
  }, 455);
  setTimeout(() => {
    currentOptionText1Songs.innerText = text1_optionsSongs[m];
    currentOptionText2Songs.innerText = text2_optionsSongs[m];
    carouselSongs.classList.remove("anim-previous");
  }, 650);
};


// плеер

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");

const audio = document.getElementById("audio");

const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");

const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const currentProgress = document.getElementById("current-progress");


//изначльное значение условий нажатия
let loop = true;

//индекс песни
let index;

window.onload = () => {
  //initially first song
  index = 0;
  setSong(index);
  //создание плелиста
  initializePlaylist();
};

const songsList = [
  {
    name: "Beyond This Road",
    link: "../assets/audio/Currents - Beyond This Road.mp3",
    artist: "Currents",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/Currents.jpg",
  },
  {
    name: "The Death We Seek",
    link: "../assets/audio/Currents - The Death We Seek.mp3",
    artist: "Currents",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/Currents.jpg",
  },
  {
    name: "Bleeding Out",
    link: "../assets/audio/In Flames - Bleeding Out.mp3",
    artist: "in flames",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/inflames.jpg",
  },
  {
    name: "A Dialogue In B Flat Minor",
    link: "../assets/audio/In Flames - A Dialogue In B Flat Minor.mp3",
    artist: "in flames",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/inflames.jpg",
  },
  {
    name: "Disconnect",
    link: "../assets/audio/Korn - Disconnect.mp3",
    artist: "korn",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/korn.jpg",
  },
  {
    name: "Devils Night",
    link: "../assets/audio/Motionless In White - Devils Night.mp3",
    artist: "Motionless In White",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/MotionlessInWhitOne.jpg",
  },
  {
    name: "Cobwebs",
    link: "../assets/audio/Motionless In White - Cobwebs.mp3",
    artist: "Motionless In White",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/MotionlessInWhitTwo.jpg",
  },
  {
    name: "Reincarnate",
    link: "../assets/audio/Motionless In White - Reincarnate.mp3",
    artist: "Motionless In White",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/MotionlessInWhitThree.jpg",
  },
  {
    name: "RADIO",
    link: "../assets/audio/Rammstein - RADIO.mp3",
    artist: "rammstein",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/rammsteinOne.jpg",
  },
  {
    name: "TATTOO",
    link: "../assets/audio/Rammstein - TATTOO.mp3",
    artist: "rammstein",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/rammsteinOne.jpg",
  },
  {
    name: "Du Hast",
    link: "../assets/audio/Rammstein - Du Hast.mp3",
    artist: "rammstein",
    image: "../assets/IMAGES/Картинки-плеер/imges-player/rammsteinTwo.jpg",
  }
];

//Форматирование времени для отображения в time-container
const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};

//достаем песни из объекта
const setSong = (arrayIndex) => {
  //это извлекает все переменные из объекта
  let { name, link, artist, image } = songsList[arrayIndex];
  audio.src = link;
  songName.innerHTML = name;
  songArtist.innerHTML = artist;
  songImage.src = image;
  //продолжительность отображения при загрузке метаданных
  audio.onloadedmetadata = () => {
    maxDuration.innerText = timeFormatter(audio.duration);
  };
};

//кнопка проигрования песни
const playAudio = () => {
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
};

//реализация кнопки повтора
repeatButton.addEventListener("click", () => {
  if (repeatButton.classList.contains("active")) {
    repeatButton.classList.remove("active");
    audio.loop = false;
    console.log("repeat off");
  } else {
    repeatButton.classList.add("active");
    audio.loop = true;
    console.log("repeat on");
  }
});

//реализация кнопки следующей песни
const nextSong = () => {
  // если случайная песня
  if (loop) {
    if (index == songsList.length - 1) {
      //Если воспроизводится последняя песня
      index = 0;
    } else {
      index += 1;
    }
    setSong(index);

    playAudio();
  } else {
    //вдругом случае поиск случайного индекса песни и ее включение
    let randIndex = Math.floor(Math.random() * songsList.length);
    console.log(randIndex);
    setSong(randIndex);
    playAudio();
  }
};

//реализация кнопки паузы
const pauseAudio = () => {
  audio.pause();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
};

//реализация кнопки предыдущей песни, не предусмотрена работа при случайных песнях
const previousSong = () => {
  if (index > 0) {
    pauseAudio();
    index -= 1;
  } else {
    //если играет первая песня
    index = songsList.length - 1;
  }
  setSong(index);
  playAudio();
};

//переход песни при окончании
audio.onended = () => {
  nextSong();
};

//кнопка перемешивания песен
shuffleButton.addEventListener("click", () => {
  if (shuffleButton.classList.contains("active")) {
    shuffleButton.classList.remove("active");
    loop = true;
    console.log("shuffle off");
  } else {
    shuffleButton.classList.add("active");
    loop = false;
    console.log("shuffle on");
  }
});

//кнопка проигрывания
playButton.addEventListener("click", playAudio);

//кнопка следующего трека
nextButton.addEventListener("click", nextSong);

//кнопка паузы
pauseButton.addEventListener("click", pauseAudio);

//кнопка предыдущего трека
prevButton.addEventListener("click", previousSong);

//обновлять отображение в progress bar каждую секунду
setInterval(() => {
  currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
  currentProgress.style.width =
    (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

//Время обновления
// audio.addEventListener("timeupdate", () => {
//   currentTimeRef.innerText = timeFormatter(audio.currentTime);
// });