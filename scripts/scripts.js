function fade(elem, speed, target, callback) { /*Fades  an page given speed in ms, to a target opac using Velocity.js*/

	$(elem).velocity({
		opacity: target
	}, speed);

	typeof callback === 'function' && callback();
}

/* Depreciated
function fadeOut(elem, speed, opac, target) { Fades out an array of elements at given speed in ms, from a starting opac to target

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

function fadeOutPage(elem, speed, target, next) { /*Fades  an page given speed in ms, to a target opac and goes to the next page using Velocity.js*/

	$(elem).velocity({
		opacity: target
	}, speed, 
	function() {window.location.href=next;});

}


function translateTop(elem, speed, x, opac) { /*Moves an array of elements (top space) at given speed in ms, a given x percent using Velocity.js*/
	$(elem).velocity({
		top: "+=" + x + "%",
		opacity: opac
	}, speed);
}

function getQuote() {
	var url = "http://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.brainyquote.com/topics/lobster") + "&callback=?";
	console.log(url);
	$.getJSON('http://allorigins.me/get?url=' + encodeURIComponent('https://www.brainyquote.com/topics/lobster') + '&callback=?', function(data){
    alert(data.contents);
});

}