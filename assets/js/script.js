const nav = document.querySelector(".overlay");
const headerOpen = document.querySelector('.header__nav-toggle');
const overlayClose = document.querySelector('.overlay__toggler');

function openMenu(e) {
	nav.classList.add('active');
}

function closeMenu(e) {
	nav.classList.remove('active');
}

headerOpen.addEventListener("click", openMenu);
overlayClose.addEventListener("click", closeMenu);

window.addEventListener('resize', function (e) {
	if (window.innerWidth > 600) {
		nav.classList.remove('active');
	}
});

$('.first__circle').circleProgress({
	value: 0.96,
	size: 160,
	startAngle: -1,
	lineCap: 'round',
	fill: '#12282C'
});

$('.second__circle').circleProgress({
	value: 0.94,
	size: 160,
	startAngle: -1,
	lineCap: 'round',
	fill: '#12282C'
});

$('.third__circle').circleProgress({
	value: 0.97,
	size: 160,
	startAngle: -1,
	lineCap: 'round',
	fill: '#12282C'
});

$('.forth__circle').circleProgress({
	value: 0.93,
	size: 160,
	startAngle: -1,
	lineCap: 'round',
	fill: '#12282C'
});