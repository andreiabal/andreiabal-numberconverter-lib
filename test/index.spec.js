const { intToRoman, romanToInt} = require('../index');
const assert = require('assert');

describe('convert()', () => {

  describe('intToRoman()', () => {
    context('when there is no parameter', () => {
      it('should return an error', () => {
        assert.equal(intToRoman(''), 'Please, type a number.');
      });
    });
      
    context('when the parameter is not a number', () => {
      it('should return an error', () => {
        assert.equal(intToRoman('typing letters'), 'Please, use only numbers.');
      });
    });
      
    context('when the number is greater than or equal to 4000 or when it is less than or equal to 0', () => {
      it('should return an error', () => {
        assert.equal(intToRoman(0), 'Please use numbers between 1 and 3999.');
      });
    });
  
    context('convert int into roman', () => {
      it('should return a roman XX for the 20 arabic', () => {
        assert.equal(intToRoman(20), 'XX');
      });
    });
  
    context('convert int into roman', () => {
      it('should return a roman I for the 1 arabic', () => {
        assert.equal(intToRoman(1), 'I');
      });
    });
  
    context('convert int into roman', () => {
      it('should return a roman MMMCMXCIX for the 3999 arabic', () => {
        assert.equal(intToRoman(3999), 'MMMCMXCIX');
      });
    });
  
    context('convert int into roman', () => {
      it('should return a roman MMCCCXVIII for the 2318 arabic', () => {
        assert.equal(intToRoman(2318), 'MMCCCXVIII');
      });
    });
  })

  describe('romanToInt()', () => {

    context('when there is no parameter', () => {
      it('should return an error', () => {
        assert.equal(romanToInt(''), 'Please, type a roman numeral.');
      });
    });

    context('when the parameter is not a string of roman numerals', () => {
      it('should return an error', () => {
        assert.equal(romanToInt(875), 'Please, use only roman numerals.');
      });
    });

    context('convert roman into int', () => {
      it('should return number 17 for the roman XVII or xvii.', () => {
        assert.equal(romanToInt('xvii'), 17);
      });
    });

    context('convert roman into int', () => {
      it('should return number 3999 for the roman MMMCMXCIX', () => {
        assert.equal(romanToInt('MMMCMXCIX'), 3999);
      });
    });

    context('convert roman into int', () => {
      it('should return number 446 for the roman CDXLVI', () => {
        assert.equal(romanToInt('CDXLVI'), 446);
      });
    });

  });
});
