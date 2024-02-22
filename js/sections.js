
// Constants
const ACTIVE_TIME_MS = 5000;
const DEACTIVATION_TIME_MS = 750;

// Variables
var felix = document.getElementById("felix");
var responseFrame = document.getElementById("response-frame");
var responseMessage = document.getElementById("response-message");
var userMadeDecision = false;
var funny = [
	'¿Cuál es el café más peligroso del mundo? El ex-preso.',
	'¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.',
	'¿Qué le dice una iguana a su hermana gemela? Iguanita.',
	'¿Cuál es el animal más antiguo? La cebra, porque está en blanco y negro.',
	'¿Qué hace una abeja en el gimnasio? Zumba.',
	'¿Por qué el libro de matemáticas estaba triste? Porque tenía muchos problemas.',
	'¿Cómo se despiden los químicos? Ácido un placer.',
	'¿Cuál es el pez más divertido? El pez payaso.',
	'¿Qué le dice un jardinero a otro? Nos vemos en la poda próxima.',
	'¿Cómo se llama el campeón de buceo japonés? Tokofondo. ¿Y el subcampeón? Kasitoko.'
];

// Activate felix and set timeout for awaiting a command.
function activateFelix() {
	userMadeDecision = false;
	felix.classList.remove("inactive");
	felix.classList.add("active");
	setTimeout(function() {
		if (!userMadeDecision) {
			felix.classList.remove("active");
			felix.classList.add("inactive");
			setTimeout(function() {
				felix.classList.remove("inactive");
			}, 750);
		}
	}, 5000);
}
function deactivateFelix() {
	userMadeDecision = true;
	felix.classList.remove("active");
	felix.classList.add("inactive");
	setTimeout(function() {
		felix.classList.remove("inactive");
	}, 750);
}
function getWeather() {
	$(".personal-assistant").css("margin-top", "0px");
	$("#tooltipmsg").fadeIn(1000).css("display", "flex");

	setTimeout(function() {
		$(".personal-assistant").css("margin-top", "100px");
		$("#tooltipmsg").fadeIn(1000).css("display", "none");
	}, 30000);
	// responseMessage.innerText = "The weather really just kind of sucks here, and I know you wanted the weather at your location, but that's life for you.";
	// showResponse();
}
function getTime() {
	$(".personal-assistant").css("margin-top", "0px");
	$("#tooltipchivato").fadeIn(1000).css("display", "flex");

	setTimeout(function() {
		$(".personal-assistant").css("margin-top", "100px");
		$("#tooltipchivato").fadeIn(1000).css("display", "none");
	}, 7000);
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
	responseMessage.innerText = "A calendar is a great investment you know; I mean, your computer even has one! Since you asked, today is " + date + ".";
	showResponse();
}
function tellJoke() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	$(".personal-assistant").css("margin-top", "0px");
	$("#tooltipdate").fadeIn(1000).css("display", "flex");
	// console.log(today.getDate(), today.getDay(), today.getFullYear() ,time);
	document.getElementById("tooltipdate").innerText = today.getDate() + "/" +today.getDay()+ "/" + today.getFullYear()+ " " +time;
	// $("#tooltipdate").innerText = today.getDate(), today.getDay(), today.getFullYear() ,time;

	setTimeout(function() {
		$(".personal-assistant").css("margin-top", "100px");
		$("#tooltipdate").fadeIn(1000).css("display", "none");
	}, 7000);
	// var index = Math.floor((Math.random() * jokes.length) - 1);
	// responseMessage.innerText = jokes[index];
	// showResponse();
}
function searchGoogle() {
	$(".personal-assistant").css("margin-top", "0px");
	$("#tooltipfunny").fadeIn(1000).css("display", "flex");
	document.getElementById("tooltipfunny").innerText = funny[Math.floor(Math.random() * funny.length)];

	setTimeout(function() {
		$(".personal-assistant").css("margin-top", "100px");
		$("#tooltipfunny").fadeIn(1000).css("display", "none");
	}, 7000);
}
function showInspiration() {
  $(".question--container").fadeIn(1000).css("display", "flex");
	// deactivateFelix();
	// window.open("https://dribbble.com/shots/5473987-AI-Robot", "_blank");
}
function showResponse() {
	responseFrame.classList.add("active");
	deactivateFelix();
}
function closeResponse() { responseFrame.classList.remove("active"); }
// changeTheme(SiteTheme.Dark);

