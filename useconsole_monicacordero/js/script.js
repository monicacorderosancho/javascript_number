function doble_number (number) {
	return number * number; 
}

function onclick_submit () {

	number = document.getElementById ("field_number").value;
	result = doble_number (number);
	console.log (result);
}