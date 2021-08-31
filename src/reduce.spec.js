const reduce = require('./reduce.js');

describe('Reduce',()=>{
    it('returns undefined for input [] and reducer func (x,y)=>x+y',()=>{
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });
     it('returns 10 for input [],accumulator 10 and reducer func (x,y)=>x+y',()=>{
            expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
     });
      it('returns abc for input [a,b,c] and reducer func (x,y)=>x+y',()=>{
             expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
      });
       it('returns undefined for input [a,b,c] and accumulator z reducer func (x,y)=>x+y',()=>{
              expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
       });

})