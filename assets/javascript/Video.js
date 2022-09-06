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
let autoSwitching = 1; // автомотическое переключение видео. 0 - false; 1 - true;
mySource.volume = 0.3; // изменения громкости видео
mySource.disablePictureInPicture = true; // отключение функции "Окно в окне"

//
//
//
let index = Math.ceil(Math.random() * videoLength);
let X = document.getElementById('X')

function autoSwitch() {
    if (autoSwitching === 1) {
        mySource.removeAttribute(`loop`);
        mySource.onended = function(e) {
            if(index === videoLength) {
                index = 1;
            } else {
                index = index + 1;
            }
            mySource.setAttribute(`src`,  pathVideo + indexTag + index + fileFormat);
            mySource.play();
        }
    }
}

X.addEventListener('click', videoPlay);
function videoPlay() {
    X.style.display='none';
    document.getElementById('main').style.display='block';
    mySource.setAttribute(`src`,  pathVideo + indexTag + index + fileFormat);
    autoSwitch();
    mySource.play();
    document.removeEventListener('click', videoPlay);
}

mySource.onloadeddata = function() {
    document.getElementById(`menu`).style.filter = `none`;
    document.getElementById(`menu`).style.animation="animate 1s linear";
}
