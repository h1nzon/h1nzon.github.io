//
// Скрипт видеоплеера
//

document.getElementById('main').style.display='none';
let mySource = document.getElementById(`myVideo`);

// Параметры плеера

let videoLength = 4; // количество видео файлов
let pathVideo = `assets/video-bg/`; // путь до видео
let indexTag = `` // например background1.mp4, в данном случае background - tag
let fileFormat = '.mp4' // формат видоефайлов
mySource.volume = 0.3; // изменения громкости видео
mySource.disablePictureInPicture = true; // отключение функции "Окно в окне"

//
//
//

let X = document.getElementById('X')
X.addEventListener('click', videoPlay);
function videoPlay() {
    X.style.display='none';
    document.getElementById('main').style.display='block';
    let index = Math.ceil(Math.random() * videoLength);
    mySource.setAttribute(`src`,  pathVideo + indexTag + index + fileFormat);
    document.getElementById('myVideo').play();
    document.removeEventListener('click', videoPlay);
}

let video = document.getElementById("myVideo");
video.onloadeddata = function() {
    document.getElementById(`menu`).style.filter = `none`;
    document.getElementById(`menu`).style.animation="animate 1s linear";
}