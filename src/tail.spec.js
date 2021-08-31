const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3] returns [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of [] returns []', () => {
        expect(tail([])).toEqual([]);
    });

})
