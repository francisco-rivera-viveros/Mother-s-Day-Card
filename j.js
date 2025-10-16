var audio = new Audio('song.mp3');


function play() {
    audio.play();
}

function mute() {
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}


