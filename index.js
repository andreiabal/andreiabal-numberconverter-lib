function cardValidator(numberString) {
	
	if (typeof numberString !== "number") {
    throw new Error('Error: Please, enter only numbers.');
	}

	if (numberString.toString().length === 1) {
		throw new Error('Error: Please, enter a quantity of digits that is valid.');  
	}
	
	const numberArray = [];
	for (let i = 0; i < numberString.toString().length; i++) {
		let charAtPosition = numberString.toString().charAt(i);
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
