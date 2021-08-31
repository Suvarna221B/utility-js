const map = require('./map');
function identity(value){
    return value;
}

function cube(value){
    return value*value*value;
}
describe('Map', () => {

    it('The result of cube function for input [1,2,3] is [1,8,27]', () => {
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('')


})




