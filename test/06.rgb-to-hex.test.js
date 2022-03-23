const assert = require('chai').assert;
const rgbToHexColor = require('../06.rgb-to-hex');

describe('Test is RGB color', () => {

    it('Test RGB color is in range [0...255]', () => {
        //Arrange
        let input = (10, 20, 30);
        let expectResult = true;
        //Act
        let actualResult = isSymmetric(input)
        //Assert
        assert.strictEqual(actualResult, expectResult);
    });

    it('Test RGB color is same with hexadecimal format', () => {


    });

    it('Test RGB is invalid type', () => {
        //Arrange

        //Act

        //Assert

    });
});