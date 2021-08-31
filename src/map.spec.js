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

    it('The result of cube func for input [] is []',()=>{
        expect(map([],cube)).toEqual([]);
    });

    it('The result of identity func for input [1,2,3] is [1,2,3]',()=>{
            expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });

    it('The result of a given func for input array is the func applied to all the elements of the array',()=>{
            expect(map([{x:10}],(obj)=>(obj.x + 1))).toEqual([11]git );
    });

})




