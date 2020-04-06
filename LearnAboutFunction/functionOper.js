//Functional operation
// One、 compose
// In functional programing, we can use "compose" function to combine functions
//example:
// let compose =function (f, g) {
//     return function (x) {
//         return f(g(x));
//     };
// };
// let add = function (x) {
//     return x+1;
// };
// let mul = function (x) {
//     return x*5;
// };
// let t1 = compose(mul, add)(2);
// console.log(t1);
// Note:
// 1) The arguments of "compose" function are function,and the return value type of "compose" function also is a function.
// 2) At all function of compose's arguments list,except the initial function can income arguments more than one,
// other function only income one arguments that is the return value of previous function(from right to left)
// 3) The initial function must be put the rightmost in compose's arguments list, because of the execution order of compose is from right to left
let compose = function () {
    let _arguments = arguments;
    let length = _arguments.length;
    let index = length;
    while (index--) {
        if (typeof _arguments[index] !== 'function') {
            throw new TypeError("Type of arguments must be function!");
        }
    }
    return function () {
        let index = length - 1;
        let result = length ? _arguments[index].apply(this, arguments) : arguments[0];
        while (index--) {
            result = _arguments[index].call(this, result);
        }
        return result;
    }
};
let composeLeft = function () {
    return compose.apply(null, [].reverse.call(arguments));
};
let add = function (x) {
    return x+5;
};
let mul = function (x) {
    return x*5;
};
let sub = function (x) {
    return x-5;
};
let div = function (x) {
    return x/5;
};