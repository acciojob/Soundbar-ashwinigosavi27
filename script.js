//your JS code here. If required.
var audio = new Audio();
function playSound(filename) {
	setTimeout(()=>{
	audio.src = 'sounds/' + filename;
    audio.play();
	},4000);
	
}
function stopSound() {
	audio.pause();
    audio.currentTime = 0;
}