const map = (arr,func) => {
    return arr.map(x => func(x));
}
module.exports = map;