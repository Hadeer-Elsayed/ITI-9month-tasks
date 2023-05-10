const video = document.querySelector("#myVideo");
const btns = document.querySelectorAll("button");
const sound = document.querySelector("#sound");
const speed = document.querySelector("#speed");
const progress = document.querySelector("#progress");
const currTime = document.querySelector("#current");
const totTime = document.querySelector("#total");

video.addEventListener("timeupdate", function() {
    progress.value = (video.currentTime / video.duration) * 100;
    let time = getTime(video.currentTime);
    currTime.innerText = time;
});

video.addEventListener("play", function() {
    let time = getTime(video.duration)
    totTime.innerText = time;
})


speed.addEventListener("change", function() {
    video.playbackRate = this.value / 4;
});

sound.addEventListener("change", function() {
    video.volume = this.value / 10;
});
for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        let action = e.target.id;
        switch(action) {
            case "play":
                video.play();
            break;
            case "stop":
                video.pause();
            break;
            case "increase":
                video.currentTime += 5;
            break;
            case "decrease":
                video.currentTime -= 5;
            break;
            case "start":
                video.currentTime = 0;
            break;
            case "end":
                console.log(video.duration);
                video.currentTime = video.duration;
            break;
            case "mute":
                if(video.muted) {
                    video.muted = false;
                    e.target.innerText = "Mute";
                }
                else {
                    video.muted = "true";
                    e.target.innerText = "Unmute";
                }
            break;
        }
    })
}


function getTime(secs) {
    let minutes = Math.floor(secs/ 60);
    let seconds = (secs% 60).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}