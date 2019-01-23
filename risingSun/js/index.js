


const lottieContainer = document.querySelector('.lottieContainer')
const animData = {
	container: lottieContainer,
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path:'js/json/risingSun.json',
};

const animation = lottie.loadAnimation(animData);

// console.log("frame: "+ animation.currentRawFrame);
// animation.goToAndStop(20, true); 
// console.log("frame: "+ animation.currentRawFrame);

window.addEventListener('scroll', function(){
let scrollPercent = 100*window.scrollTop()/(document.height()-window.height);
// console.log("frame: "+ animation.currentRawFrame);
let scrollPercentRounded = Math.round(scrollPercent); 

// animation.goToAndStop( (scrollPercentRounded / 100) * 4000);
console.log('halp');


});





