# [wattersnathen.github.io](http://wattersnathen.github.io/)

### Missing Features/Enhancements/Pages (TODO Items)

1. Interactive resume page:
  * Elaborate more throughly on projects and skills. Things that were'nt covered in the resume PDF, etc.
2. Transitions and animations:
  * Smooth scrolling
  * Showing section headers on `<a href="#sectionId>"` navigation. Currently, when using the navigation links, the section headers are cut off (moved underneath the navbar)
  * use CSS3 and JavaScript to animate section content on user scroll/navigation events

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

---

