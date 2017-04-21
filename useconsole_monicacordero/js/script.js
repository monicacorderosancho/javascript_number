function doble_number (number) {
	return number*number; 
}

// esto es lo primero que se ejecuta //

function onclick_submit () {

	// Obtengo el valor del elemento del HTML que se llama field nummber //

	number = document.getElementById ("field_number").value;
	
	//Llamo a la funcion con el valor y guardo el resultado de la funcion en la variable result //
		
	result = doble_number (number);

	if (isNaN(result)) {

		//documento deme el elemento ID llamado result y en su valor asigne que lo siguiente//
	
	document.getElementById("result").value = "It is not a number"; 

	} else {

	document.getElementById("result").value = "The answer is ".concat(result); 

	//Unir la frase con el nunero: une dos string = concat//

	}

	
	console.log (result);
}

