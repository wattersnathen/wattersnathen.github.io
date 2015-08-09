$(document).ready(function () {
	var neighborhoodMap = $('.project .projectDetails p')[3];
	neighborhoodMap.innerHTML = '<p style="color: red; font-weight: 900; font-size: 14px; text-align: center;">This app is currently under construction. Inquire about progress using the contact form below. Thanks!</p>';

	resizeHeader();
});

window.onresize = function (e) {
	resizeHeader();
};

var resizeHeader = function () {
	var viewportHeight = window.innerHeight,
		siteHeader = document.getElementsByClassName('siteHeader')[0];

	siteHeader.style.height = viewportHeight + 'px';

	if (viewportHeight > 580) {
		siteHeader.style.paddingTop = (viewportHeight * 0.3) + 'px';
	} else {
		siteHeader.style.paddingTop = (viewportHeight * 0.2) + 'px';
	}
};