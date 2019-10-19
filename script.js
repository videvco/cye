
var surname = document.getElementById('surname');
var email = document.getElementById('email');
var cell = document.getElementById('cell');


function validateForm(){
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var email = document.getElementById('email');
	var cell = document.getElementById('cell');

	if(name.value == "")
	{
		alert("Please enter name");
		console.log("Please enter name");
		return false;
	}

	if(surname.value == "")
	{
		alert("Please enter surname");
		return false;	
	}

	if(email.value == "")
	{
		alert("Please enter email");
		return false;
	}

	if(cell.value == "")
	{
		alert("Please enter cell numbers");
		return false;
	}

	if(cell.value.length != 10)
	{
		alert("Please enter ten numbers");
		return false;
	}

}