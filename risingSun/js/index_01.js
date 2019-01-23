


const animation = lottie.loadAnimation({
	container: document.querySelector('.lottieContainer'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path:'js/json/risingSun.json',
});


animation.playSegments([1,10]);





