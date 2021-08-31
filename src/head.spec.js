const head = require('./head');

describe('Head', () => {

    it('Head element of [1,2,3] is 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head element of [] is null or undefined',() =>{
        expect(head([])).toEqual(undefined);
    });
})
