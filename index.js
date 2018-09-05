function intToRoman(int) {
  if (typeof int !== 'number') {
    throw new Error('Please, use only numbers.');
    } else if (int <= 0 || int >= 4000) {
    throw new Error('Please use numbers between 1 and 3999.');
    } else {
  let result = '';  
  let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];  
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (let i = 0; i <= integer.length; i++) {  
    while (int % integer[i] < int) {     
      result += roman[i];  
      int -= integer[i]; 
    }
  }
  return result;
}
}
module.exports = intToRoman;
