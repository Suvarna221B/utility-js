const reduce = (arr,reducer,accumulator = undefined) =>{
    if(accumulator!=undefined)
        return arr.reduce(reducer,accumulator);
    else if(arr.length==0)
        return undefined;
    else
        return arr.reduce(reducer);
}
module.exports = reduce;