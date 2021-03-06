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
let composeLeft;
composeLeft = function () {
    return compose.apply(null, [].reverse.call(arguments));
};
let add = function (x) {
    return x + 5;
};
let mul = function (x) {
    return x * 5;
};
let sub = function (x) {
    return x - 5;
};
let div = function (x) {
    return x / 5;
};
let fn = compose(add, mul, sub, div);
console.log(fn(50));
// Function currying
// The so-called currying is to convert a multi-parameter function into a single parameter function
// Sample:
function curry(fn) {
    let _argLen = fn.length;
    let _args = [].slice.call(arguments, 1);

    function wrap() {
        _args = _args.concat([].slice.call(arguments));

        function act() {
            _args = _args.concat([].slice.call(arguments));
            if ((_argLen === 0 && arguments.length === 0) || (_argLen > 0 && _args.length >= _argLen)) {
                return fn.apply(null, _args);
            }
            return arguments.callee;
        }

        if ((_argLen === 0 && arguments.length === 0) || (_argLen > 0 && _args.length >= _argLen)) {
            return fn.apply(null, _args);
        }
        act.toString = function () {
            return fn.toString();
        };
        return act;
    }

    return wrap;
}

let addNum = function () {
    return [].slice.call(arguments).reduce(function (a, b) {
        return (typeof a === "number" ? a : 0) + (typeof b === "number" ? b : 0);
    });
};
let curried = curry(addNum);
console.log(curried(1)(2)(3)());
let addNum2 = function (a, b, c) {
    return a+b+c;
};
let curried1 = curry(addNum2, 2);
console.log(curried1(2)(2));
let curried2 = curry(addNum2,2,1);
console.log(curried2(3));
let curried3=curry(addNum2);
console.log(curried3(2)(2)(2));
console.log(curried3(2,2,2));
console.log("===============");
// Callback function
let x1 = {id:1,date:new Date(2019,3,12)},
    x2 = {id:2,date:new Date(2020,1,14)},
    x3 = {id:3,date:new Date(2020,4,7)};
let arr = [x1, x2, x3];
arr.sort(function (x, y) {
    return x.date-y.date;
});
for(let i=0;i<arr.length;i++){
    console.log(arr[i].id + " " + arr[i].date.toLocaleDateString())
}
function map(array, func) {
    let res = [];
    for(let i in array){
        res.push(func(array[i]));
    }
    return res;
}
console.log(map([1,3,5,7,8], function (n) {
    return n*n;
}));
console.log(map(["one","two","three","four"], function (item) {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
}));
console.log("===================");
// Singleton pattern
// One class one example
let getSingle = function (fn) {
    let ret;
    return function () {
        return ret || (ret = fn.apply(this, arguments));
    };
};
function XHR() {
    return new Date(2019,2,15);
}
let xhr = getSingle(XHR);
let x4 = xhr();
let x5 = xhr();
console.log(x4===x5);