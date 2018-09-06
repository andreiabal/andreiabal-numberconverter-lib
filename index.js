function intToRoman(int) {
  try {
    if (int === '') {
      throw new Error('Please, type a number.');
    }
    if (typeof int !== 'number') {
      throw new Error('Please, use only numbers.');
    } else if (int <= 0 || int >= 4000) {
      throw new Error('Please use numbers between 1 and 3999.');
    } else {
      let result = '';
      let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];  
      let roman = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I'];
      for (let i = 0; i <= integer.length; i++) {
        while (int % integer[i] < int) {  // resto da divisão
          result = result + roman[i];
          int = int - integer[i];
        }
      }
      return result;
    }
  } catch (error) {
    return error.message;
  }
}

function romanToInt(string) {
  try {
    if (string === '') {
      throw new Error('Please, type a roman numeral.');
    }
    if (typeof string !== 'string') {
      throw new Error('Please, use only roman numerals.');
    } else {
      let stringToUpperCase = string.toUpperCase();
      let result = 0;
      let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      let roman = ['M', 'CM','D','CD','C', 'XC', 'L', 'XL', 'X','IX','V','IV','I'];

      for (let i = 0; i <= integer.length; i++) {
        while (stringToUpperCase.indexOf(roman[i]) === 0){ 
          result = result + integer[i];
          stringToUpperCase = stringToUpperCase.replace(roman[i],'');
        }
      }
      return result;
    }
  } catch (error) {
    return error.message;
  }
}

module.exports = {
  intToRoman,
  romanToInt,
};
