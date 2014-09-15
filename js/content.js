// Javascript File
var username;
var password;

function getCredentials() {
	username = localStorage.getItem("username");
	password  = localStorage.getItem("password");
	if (username && password) {
		return true;
	} else {
		return false;
	}
}

function setCredentials(username, password) {
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
}

$(document).ready(function() {
	if($("input#password").length != 0 && $("input#username").length != 0) {
		//logic of saving and everything else autologging in goes
		var hasCredentials = getCredentials();
		if (hasCredentials && $(".error").length == 0) {
			$("input#username").val(username);
			$("input#password").val(password);
			$("input.button").click();
		} else {
			console.log("NO credentials saved, or there's an error!");

			$("#loginForm").submit(function(e) {
				username = $("input#username").val();
				password = $("input#password").val();
				setCredentials(username, password);
				console.log("Setting new username and password");
			});
		}

	} else {
		console.log('No login form detected');
	}
	})
