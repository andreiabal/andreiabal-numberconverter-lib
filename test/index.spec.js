const assert = require('assert');
const cardValidator = require('../index');

/*describe('returnsWritten()', function() {
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(0), 'zero');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1), 'um');
  });*/
  

 
/*describe('cardValitor()', function () {
 it('throws an error when no params are given', function () {
     const wrongCall = function () {
       cardValidator()
   } 
   expect(wrongCall).to.throw('não pode ser vazio')
 });*/

 describe('cardValitor', function () {
  it('works', function () {
    expect(cardValidator()).to.equal(0)
  })
 })