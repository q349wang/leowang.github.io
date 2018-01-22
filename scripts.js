function fadeIn(elem, speed, opac, target) { /*Fades in an array of elements at given speed in ms, from a starting opac to target*/

	var id = setInterval(frame, speed);

	function frame() {
		if (opac >= target) {
			clearInterval(id);
		} else {
			opac += 0.01;
			for(i = 0; i< elem.length; i++)	{
				elem[i].style.opacity = opac; 
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
			}
		}
	}
}


function translateTop(elem, speed, x) { /*Moves an array of elements (top space) at given speed in ms, a given x*/

	var initX = [];
	var currX = []

	for(i = 0; i< elem.length; i++)	{

		initX.push(elem[i].style.top);
		currX.push(elem[i].style.top);

	}


	var id = setInterval(frame, speed);

	function frame() {
		for(i = 0; i< elem.length; i++)	{

			if (currX[i] == x + initX[i]) {
				clearInterval(id);
			} else if(currX < x + initX[i]) {
				currX[i] += 0.1;
			} else {
				currX[i] -= 0.1;

			}

			elem[i].style.top = currX[i] + '%'; 

		}
	}
}