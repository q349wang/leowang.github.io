function fade(elem, speed, target) { /*Fades  an page given speed in ms, to a target opac using jQuery*/

	$(elem).animate({
		opacity: target
	}, speed);
}
/* Depreciated
function fadeOut(elem, speed, opac, target) { Fades out an array of elements at given speed in ms, from a starting opac to target using jQuery

	var id = setInterval(frame, speed);

	function frame() {
		if (opac <= target) {
			clearInterval(id);
		} else {
			opac -= 0.01;
			for(i = 0; i< elem.length; i++)	{
				elem[i].style.opacity = opac; 
			}
		}
	}
}*/

function fadeOutPage(elem, speed, target, next) { /*Fades  an page given speed in ms, to a target opac and goes to the next page using jQuery*/

	$(elem).animate({
		opacity: target
	}, speed, 
	function() {window.location.href=next;});

}


function translateTop(elem, speed, x) { /*Moves an array of elements (top space) at given speed in ms, a given x percent using jQuery*/
	$(elem).animate({
		top: "+=" + x + "%"
	}, speed);
}