function cardValidator(numberStrings) {
	// Se o valor recebido for string vazia, retorno falso, ou seja, não é valido 
    if (numberString === "") {
        return false;
    }
	
	// 1. Transformar de string para array de números
	var numberArray = [];
	// Aqui percorro cada caracter da string
	for (var i = 0; i < numberString.length; i++) {
		var charAtPosition = numberString.charAt(i);
		//Colocar no array o número correspondente ao caracter da string
		numberArray.push(parseInt (charAtPosition));
	}
	// 2. Inverter o array 
	var invertedNumberArray = numberArray.reverse(); 
	// 3. Multiplicar por 2 os dígitos que ocupam as posições pares (indice impar)
	for (var i = 1; i < invertedNumberArray.length; i = i+2) {
		var element = invertedNumberArray[i];
		var product = element * 2;
		var finalResult;	
		if (product >= 10) {
			// 3.1 Se o resultado da multiplicação for maior ou igual a 10, subtraio 9 (ex: 18-9 = 9 que é = 1+8)
			finalResult = product - 9;
		} else {
			finalResult = product;
		}
		// 3.2 Substituir esses digitos pelo resultado da multiplicação
		invertedNumberArray[i] = finalResult;
  	}
	// 4. Somar todos os números que estão no array = valor total
	var total = 0;
	for (var i = 0; i < invertedNumberArray.length; i++) {
		total = total + invertedNumberArray[i];
	}
	// 5. Pegar o resto da divisão por 10 do valor total e verificar se é igual a zero
	var rest = total % 10;
	// 6. Sendo igual a zero retorno true; não sendo, retorno false
	return rest === 0; 
}

module.exports = cardValidator;