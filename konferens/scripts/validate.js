var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var requiredFields = ['field_firstname', 'field_lastname', 'field_organisation', 'field_email', 'field_pres_title'];

document.addEventListener("DOMContentLoaded", function(event) {
	requiredFields.forEach(function(item) {
		document.getElementById(item).required = true;
	});
	
	document.getElementById('registration_form').setAttribute('onsubmit', 'return validateForm()');

	var presTitle = document.getElementById('field_pres_title');

	document.getElementById('pres_type_1').addEventListener("click", function(event) {
		presTitle.required = true;
	});

	document.getElementById('pres_type_2').addEventListener("click", function(event) {
		presTitle.required = true;
	});

	document.getElementById('pres_type_3').addEventListener("click", function(event) {
		presTitle.required = false;
	});
});

var validateForm = function() {
	var check = true;
	var email = document.getElementById('field_email').value;
	var isValid = pattern.test(email);
	var messageLength = document.getElementById('field_message').value.length;
	if (!isValid) {
		check = false;
		alert('Ogiltig emailadress!');
	}
	if (messageLength > 200) {
		check = false;
		alert('För långt meddelande!');
	}
	return check;
}



