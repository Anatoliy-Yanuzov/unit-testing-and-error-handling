const assert = require('chai').assert;
const sum = require('../04.sum-of-numbers');

describe('Test sum functionality', () => {

    it('Should add positive numbers', () => {
        // Arrange
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;
        //Act
        let actualResult = sum(input);
        //Assert
        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should return false when adding positive numbers', () => {
        // Arrange
        let input = [10, 20, 30, 40];
        let expectedResult = 15;
        //Act
        let actualResult = sum(input);
        //Assert
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when adding negative numbers', () => {
        // Arrange
        let input = [-1, -2, -3, -4];
        let expectedResult = -10;
        //Act
        let actualResult = sum(input);
        //Assert
        assert.equal(actualResult, expectedResult);
    });
});