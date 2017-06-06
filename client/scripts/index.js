var nightMode = false;

if (getCookie("night") == "true") {
	nightMode = true;
	document.querySelector('body').classList.add('night');
}

document.querySelector('.night-mode').addEventListener('click', function () {
	if (nightMode) {
		document.querySelector('body').classList.remove('night');
		document.cookie = "night=false";
		nightMode = false;
	} else {
		document.querySelector('body').classList.add('night');
		document.cookie = "night=true";
		nightMode = true;
	}
});

var buttons = document.querySelectorAll('.photography button');
Array.prototype.forEach.call(buttons, function(el){
	console.log('went');
	el.addEventListener('click', function(){
		var index = Array.prototype.indexOf.call(buttons, el);
		document.querySelector(".photography img").src = "/client/images/photo-" + index + ".jpg";
		document.querySelector('.photography-selected').classList.remove('photography-selected');
		el.classList.add('photography-selected');
	});
});

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}