const cardValidator = require('../index');
const assert = require('assert');
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

describe('cardValidator', () => {

  describe('when parameter is empty or a string', () => {
    it('should return an error', () => {
      let stringOrEmptyParameter = () => { cardValidator('when the parameter is empty or is not a number'); };
      expect(stringOrEmptyParameter).throw('Error: Please, enter a parameter and use only numbers.');
    });
  });

  describe('When the number is an integer but has only one digit', () => {
    it('should return an error', () => {
      let insufficientDigit = () => { cardValidator(5); };
      expect(insufficientDigit).throw('Error: Please, enter a quantity of digits that is valid.');
    });
  });

  describe('When the number is an integer and a valid card', () => {
    it('should return true', () => {
      expect(cardValidator(42)).to.be.true;
    });
  });

  describe('When the number is an integer and a valid card', () => {
    it('should return true', () => {
      expect(cardValidator(5555613252427230)).to.be.true;
    });
  });

  describe('When the number is an integer and a valid card', () => {
    it('should return true', () => {
      expect(cardValidator(4424)).to.equal(true);
    });
  });

  describe('When the number is an integer and an invalid card', () => {
    it('should return false', () => {
      expect(cardValidator(013)).equal(false);
    });
  }); 

  describe('When the number is an integer and an invalid card', () => {
    it('should return false', () => {
      expect(cardValidator(5893952979785)).equal(false);
    });
  }); 

  describe('When the number is an integer and an invalid card', () => {
    it('should return false', () => {
      expect(cardValidator(3638733997900000000)).to.be.false;
    });
  }); 

});
