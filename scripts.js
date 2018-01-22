function fadeIn(elem, speed, opac, target) { /*Fades in an array of elements at given speed in ms, from a starting opac to target*/

	var id = setInterval(frame, speed);

	function frame() {
		if (opac >= target) {
			clearInterval(id);
		} else {
			opac += 0.01;
			for(i = 0; i< elem.length; i++)	{
				elem[i].style.opacity = opac; 
				elem[i].style.filter = alpha(opacity=opac*100); /* For IE8 and earlier */
			}
		}
	}
}

function fadeOut(elem, speed, opac, target) { /*Fades out an array of elements at given speed in ms, from a starting opac to target*/

	var id = setInterval(frame, speed);

	function frame() {
		if (opac <= target) {
			clearInterval(id);
		} else {
			opac -= 0.01;
			for(i = 0; i< elem.length; i++)	{
				elem[i].style.opacity = opac; 
				elem[i].style.filter = alpha(opacity=opac*100); /* For IE8 and earlier */
			}
		}
	}
}

function fadeOutPage(elem, speed, opac, target, next) { /*Fades out an page given speed in ms, from a starting opac to target and goes to the next page*/

	var id = setInterval(frame, speed);

	function frame() {
		if (opac <= target) {
			clearInterval(id);
			window.location.href=next;
		} else {
			opac -= 0.01;
			for(i = 0; i< elem.length; i++)	{
				elem[i].style.opacity = opac; 
				elem[i].style.filter = alpha(opacity=opac*100); /* For IE8 and earlier */
			}
		}
	}
}