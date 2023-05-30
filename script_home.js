window.onload = () => {
	const img = document.querySelector("#header-pic");
	const maxImg = 3;
	let currImg = 1;

	const switchImage = () => {
		img.src = `assets/home_header_pic${currImg}.jpg`;
		currImg++;
		if (currImg > maxImg) {
			currImg = 1;
		}
	};

	window.setInterval(switchImage, 3000);
};
