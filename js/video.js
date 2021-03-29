var video = document.querySelector("#player1")
// could also select "video" //

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Play Video //
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
	// append % to end
});

// Pause Video //
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down by 5% on each click and log to console //
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	// a little math for the current rate
	video.playbackRate *= 0.95;
	// shortcut for = video.playbackRate * 0.05;
	console.log(video.playbackRate);
});

// Speed Up by 5% on each click and log to console //
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	// a little math for the current rate
	video.playbackRate /= .95;
	// video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

// Skip ahead by 15 seconds, return to the video if at the end //
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 15;
	video.loop = true;
	console.log(video.currentTime);
	video.play();
});

// Mute / Unmute Button //
document.querySelector("#mute").addEventListener("click", function() {
	// video.muted = true;
	// if (video.muted == true) {
	// 	document.querySelector("#mute").innerHTML = "Unmute";
	// 	// document.querySelector("#volume").innerHTML = "0%"
	// }
	// else {
	// 	console.log("Unmuted");
	// 	video.muted = false;
	// 	document.querySelector("#mute").innerHTML = "Mute";
	// }

	if(video.muted == true){
		console.log("Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} 
	else if (video.muted == false){
		console.log("Muted");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		
	}
	// else {
	// 	document.querySelector("#mute").innerHTML = "Mute";
	// // 	// document.querySelector("#volume").innerHTML = "100%"
	// }
});


// Volume slider - only one where we use "this"//
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

// Add Old School //
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	// video.play()
	video.classList.add("oldSchool")
});

// Return to Original //
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	// video.play()
	video.classList.remove("oldSchool")
});