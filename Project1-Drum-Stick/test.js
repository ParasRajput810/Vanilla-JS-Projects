let a = document.getElementsByClassName('keys');
let audioarray = new Array("/uses/01 - JavaScript Drum Kit_sounds_clap (1).wav" , '/uses/01 - JavaScript Drum Kit_sounds_hihat.wav' , '/uses/01 - JavaScript Drum Kit_sounds_kick.wav','/uses/01 - JavaScript Drum Kit_sounds_openhat.wav','/uses/01 - JavaScript Drum Kit_sounds_boom.wav','/uses/01 - JavaScript Drum Kit_sounds_ride.wav','/uses/01 - JavaScript Drum Kit_sounds_snare.wav','/uses/01 - JavaScript Drum Kit_sounds_tink.wav','/uses/01 - JavaScript Drum Kit_sounds_tom.wav');
let b = Array.from(a);

for(let i =0 ;i<= b.length-1 ;i++){
    a[i].addEventListener("click", ()=>{
        var audio = new Audio(audioarray[i]);
        audio.play();
    })
}
