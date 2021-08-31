const filter =require('./filter');
function filterUpperCase(value)
{
    return value === value.toUpperCase();
}
describe('Filter',()=>{
    it('returns [1,2,3] for input [1,2,3] and func true',()=>{
        expect(filter([1,2,3],()=>true)).toEqual([1,2,3]);
    });
    it('returns [] for input [1,2,3] and func false',()=>{
        expect(filter([1,2,3],()=>false)).toEqual([]);
    });
    it('returns [] for input [] and func true',()=>{
            expect(filter([],()=>true)).toEqual([]);
    });
    it('returns [2,3] for input [1,2,3] and func x>1',()=>{
            expect(filter([1,2,3],(x)=>x>1)).toEqual([2,3]);
    });
    it('returns [B,D] for input [a,B,c,D] and func filterUpperCase',()=>{
            expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });
})