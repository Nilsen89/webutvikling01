window.addEventListener('load', onLoad);

var open = false;

function onLoad() {
	console.log("script loaded");
	
	var popup = document.getElementById('popup');
	var learn = document.getElementById('learn');
	
	document.addEventListener('click', 
		function() {
			if(open) {
				learn.innerHTML = "click<br> ANYWHERE<br>to<br> learn<br> more<br> ◄";
				popup.style.height = "0%";
				open = !open;
			} else {
				learn.innerHTML = "click<br> ANYWHERE<br>to<br> learn<br> more<br> ►";
				popup.style.height = "70%";
				open = !open;
			}
		}
	);
}