const assert = require('chai').assert;
const isSymmetric = require('../05.check-for-symmetry');

describe('Test is symmetric', () => {

    it('Should pass when symmetric array is provided', () => {
        //Arrange
        let input = [1, 2, 3, 2, 1];
        let expectResult = true;
        //Act
        let actualResult = isSymmetric(input)
        //Assert
        assert.equal(actualResult, expectResult);
    });

    it('Should fail when non symmetric array is provided', () => {
        //Arrange
        let input = [1, 2, 6, 7, 8, 9]
        let expectResult = false;
        //Act
        let actualResult = isSymmetric(input);
        //Assert
        assert.equal(actualResult, expectResult);
    });

    it('Should fail when non array is provided  as an argument', () => {
        //Arrange
        let expectResult = false;
        //Act
        
        //Assert
        assert.equal(isSymmetric(''), expectResult);
        assert.equal(isSymmetric(1), expectResult);
        assert.equal(isSymmetric(null), expectResult);
        assert.equal(isSymmetric(true), expectResult);
        assert.equal(isSymmetric(undefined), expectResult);
        assert.equal(isSymmetric({}), expectResult);
    });
    
    it('Should fail', () => {
        //Arrange
        let input = [1, '1'];
        let expectResult = false;
        //Act
        let actualResult = isSymmetric(input);
        //Assert
        assert.equal(actualResult, expectResult);
    });
});