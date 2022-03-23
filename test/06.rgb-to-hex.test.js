const assert = require('chai').assert;
const rgbToHexColor = require('../06.rgb-to-hex');

describe('Test is RGB color', () => {

    it('Test RGB color is same with hexadecimal format', () => {
        //Arrange
        let expectResult = ('#0A141E');
        //Act
        let actualResult = rgbToHexColor(10, 20, 30);
        //Assert
        assert.equal(actualResult, expectResult);
    });

    it('Test red color numbers are in range [0...255]', () => {
        assert.equal(rgbToHexColor(-1, 0, 0), undefined);
    });

    it('Test green color numbers are in range [0...255]', () => {
        assert.equal(rgbToHexColor(0, -1, 0), undefined);
    });

    it('Test blue color numbers are in range [0...255]', () => {
        assert.equal(rgbToHexColor(0, 0, -1), undefined);
    });

    it('Test is more than three parameters', () => {
        assert.equal(rgbToHexColor(0, 0, 0, 0), ('#000000'));
    });

    it('Test input is saturation from space', () => {
        assert.equal(rgbToHexColor(255, 158, 170), ('#FF9EAA'));
    });

    it('Test input is saturation from space', () => {
        assert.equal(rgbToHexColor(66, 135, 245), ('#4287F5'));
    });

    it('Test is in invalid range', () => {
        assert.equal(rgbToHexColor(256, 0, 0), (undefined));
    });

});