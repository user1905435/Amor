// import * as book from "./book.js";





let bookloaded = false;
var heartElement = document.getElementById('heart');
if (heartElement) {
	heartElement.addEventListener('click', getLetter);
}

function getLetter() {
	$(".envelop").fadeIn(1000).css("display", "flex");
}