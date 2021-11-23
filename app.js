let video = document.querySelector('.video');
let rouge = document.querySelector('.rougebar');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let Bar = document.querySelector('.bar');





function BasculerPlayPause() {

    if(video.paused){
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }

}

btn.onclick = function(){
    BasculerPlayPause();
}







function moove() {
    let Pos = video.currentTime / video.duration;

    rouge.style.width = Pos * 100 + '%';

    if(video.ended) {
        btn.className ="play";
    }


}

video.ontimeupdate = function() {moove()}; 












muteBtn.addEventListener('click', function(){

    if(video.muted){
        video.muted = false;
        const unmute = "<i class='fas fa-volume-up'></i>"
        muteBtn.innerHTML = unmute;
    } else {
        video.muted = true
       const  mute = "<i class= 'fas fa-volume-mute'> </i>"
        muteBtn.innerHTML = mute;
    }

})










volumeslider.addEventListener('change', function(){


    video.volume = volumeslider.value / 100;

})








let rect = Bar.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

Bar.addEventListener('click', function(e){


    

    let x = e.clientX - rect.left;
    
    let widthPercent = ((x*100)/largeur);
    
    let currentTimeTrue = (widthPercent *(video.duration) ) / 100;
    
    
    video.currentTime = currentTimeTrue;
    
    rouge.style.width = widthPercent + '%';

})