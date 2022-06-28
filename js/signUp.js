"use strict";
var el = function(element) {
	return document.getElementById(element);
});

var isEmail = function(email) {
			var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (emailPattern.test(email)){
				return true;
			}
			else {
				return false;
			}
			};

var validateForm = function(e) {
	var isValid = true;
	var age = parseInt(el("age").value);

	if(!isEmail(el("email").value)) {
		el("emailError").innerHTML = "<p>*Please enter a valid email.*</p>";
		isValid = false;
	}
	else if(el("fname").value == " ") {
		isValid = false;
		el("errors").innerHTML += "<p>*Please fill in your first name.*</p>";
	} 
	else if(el("lname").value == " "){
		isValid = false;
		el("errors").innerHTML += "<p>*Please fill in your last name.*</p>";
	} 
	else if(age <= 17 && age >= 121){
		isValid = false;
		el("errors").innerHTML += "<p>*You must be 18 years old to sign up.*</p>";
	} 
	else if(el("username").value == " "){
		isValid = false;
		el("errors").innerHTML += "<p>*Please put in a username.*</p>";
	} 
	else(el("password").value == "" && el("password").length < 8)
		isValid = false;
		el("errors").innerHTML += "<p>*Please fill in a proper password and it must be 10 characers long.*</p>";

	if(isValid = false) {
		el("submit").preventDefault;
	}
};

window.onload = function(){
			el("submit").addEventListener("click", validateForm, false);
};	
				

		