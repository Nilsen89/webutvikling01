window.addEventListener('load', onLoad);
var open = false;

function onLoad() {
	console.log("script loaded");
	
	var popup = document.getElementById('popup');
	var learn = document.getElementById('learner');
	var close = document.getElementById('closer');

	learn.addEventListener('click', 
		function(x) {
			if(!open) {
				console.log("LOGGER: Anywhere clicked to open popup...");
				console.log(learn.innerHTML);
				document.getElementById("arrow").innerHTML = "►";
				popup.style.height = "auto";
				open = true;
			}
		}
	);
	close.addEventListener('click', 
		function() {
			console.log("LOGGER: Closer clicked to close popup...");
			popup.style.height = "0";
			document.getElementById("arrow").innerHTML = "◄";
			open = false;
		}
	);
}
