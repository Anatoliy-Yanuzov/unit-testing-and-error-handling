const assert = require('chai').assert;

const createCalculator = require('../07.add-subtract');

describe('Test return calculator functions', () => {

    it('Test return an object', () => {
        //Arrange
        let expectResult = 'object';
        //Act
        let actualResult = (typeof createCalculator());
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it('Test return get function from object', () => {
        //Arrange
        let expectResult = 'function';
        //Act
        let actualResult = (typeof (createCalculator().get));
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it('Test return subtract function from object', () => {
        //Arrange
        let expectResult = 'function';
        //Act
        let actualResult = (typeof (createCalculator().subtract));
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it(`Test internal sum cannot be modified`, () => {
        //Arrange
        let expectResult = undefined;
        //Act
        let actualResult = (createCalculator().value);
        //Assert
        assert.equal(expectResult, actualResult);
    });
    

    it(`Test add method adds parsable input`, () => {
        //Arrange
        let expectResult = 1;
        //Act
        const obj = createCalculator();
        obj.add('1')
        let actualResult = (obj.get());
        //Assert
        assert.strictEqual(expectResult, actualResult);
    });

    it('Test add and subtract functions take parameters and get function return result', () => {
        //Arrange
        let expectResult = 5;
        //Act
        const obj = createCalculator();
        obj.add('10');
        obj.subtract('5');
        let actualResult = obj.get();
        //Assert
        assert.equal(expectResult, actualResult)
    });

});