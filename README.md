# [wattersnathen.github.io](http://wattersnathen.github.io/)

### Site To-Do List

1. CSS3 Transitions and Animations
2. Build out the resume page and styling


### Issues

On iOS devices, the 100vh is rendering as 100% body which creates an unnecessarily long header section. I used the following JavaScript to resize the header section based on viewport height.

```javascript
var resizeHeader = function () {
	
	var viewportHeight = window.innerHeight,
		siteHeader = document.getElementsByClassName('siteHeader')[0];

	// set siteHeader section to 100% of the viewport
	siteHeader.style.height = viewportHeight + 'px';

	// adjust positioning of header content -- to make it more 'centered'
	if (viewportHeight > 580) {
		siteHeader.style.paddingTop = (viewportHeight * 0.3) + 'px';
	}
	else {
		siteHeader.style.paddingtop = (viewportHeight * 0.2) + 'px';
	}
};
```

^ This method is then called on two events:

```javascript
$(document).ready(function () {
	// ...
	resizeHeader(); // resize the header on page load - DOM ready event
});

// ...

window.onresize = function (e) {
	resizeHeader();
};

```