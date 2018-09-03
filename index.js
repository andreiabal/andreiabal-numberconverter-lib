function cardValidator(numberString) { 
	
	if (typeof numberString !== "number") {
		throw new Error('Erro: digite apenas números.');
	}

	if (numberString.toString().length === 1) {
		throw new Error('Erro: digite uma quantidade de digitos que seja válida.');  
	}

	const numberArray = [];
	for (let i = 0; i < numberString.length; i++) {
		let charAtPosition = numberString.charAt(i);
		numberArray.push(parseInt (charAtPosition));
	}
	const invertedNumberArray = numberArray.reverse(); 
	for (let i = 1; i < invertedNumberArray.length; i = i+2) {
		let element = invertedNumberArray[i];
		let product = element * 2;
		let finalResult;	
		if (product >= 10) {
			finalResult = product - 9;
		} else {
			finalResult = product;
		}
		invertedNumberArray[i] = finalResult;
  	}
	let total = 0;
	for (let i = 0; i < invertedNumberArray.length; i++) {
		total = total + invertedNumberArray[i];
	}
	const rest = total % 10;
	return rest === 0; 
}

module.exports = cardValidator;