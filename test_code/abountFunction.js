// It is called method when a function is set as a attribute of object
// We can use Object.method to call a method.
// Example:
let obj = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
obj.increment();
console.log(obj.value);      // 1
obj.increment(2);
console.log(obj.value);       // 3
console.log("=======");
// call() and apply() are the prototype method of Function,
// they can regard goal function as a method and bind it on a goal object and then use it
// example:
function f(x, y) {
    return x + y;
}

console.log(f.call(null, 3, 4));
console.log(f.apply(null, [3, 4]));

function max() {
    let m = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > m)
            m = arguments[i];
    }
    return m;
}

let a = [23, 45, 2, 46, 62, 45, 56, 63];
let m = max.apply(Object, a);
console.log(m);
console.log("===========================");
// Using "new" command can instantiate object, and the function of object will be activated and run during the process of new object
// so that we can use "new" command to call method.
// Example:
function f1(x, y) {
    console.log("x=" + x + ",y=" + y);
}

new f1(3, 4);
console.log("=============");
// About argument of function
// In javascript the number of argument may not equal to the number of formal parameter
// and the default value of the extra parameter is undefined, but the extra arguments will be ignored。
// example:
(function (a, b) {
    console.log(a);
    console.log(b);
})(1);
(function (a, b) {
    console.log(a);
    console.log(b);
})(1, 2, 3, 4);
console.log("============");

// We can get the number of arguments of a function by using the "length" attribute of "arguments" object.
// function checkArg(a) {
//     if (a.length !== a.callee.length) {
//         console.log("Mismatch of actual and formal parameters!");
//         return false;
//     }
//     return true;
// }
//
// function f2(a, b) {
//     if(checkArg(arguments))
//         return ((a * 1 ? a : 0) + (b * 1 ? b : 0)) / 2;
// }
//
// console.log(f2(6));
// console.log("================");
// The "arguments" object is the set of function's parameters
// Only can be used directly in a function scope
// We can use the "arguments" to gain a argument of a function in this function scope.
function f3() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

f3(2, 3, 6);
console.log("============");

function f4() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] += i;
        console.log(arguments[i]);
    }
}

f4(3, 3, 6);
console.log("===============");

function f5() {
    arguments.length = 2;
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

f5(1, 2, 3);
console.log("============");
// "callee" is a attribute of "arguments" object，it refers to the function where the arguments object is currently located.
// we can call a function itself in this function scope by the "callee" attribute
function f6(x, y, z) {
    let a = arguments.length;
    let b = arguments.callee.length;
    if (a !== b) {
        console.log("formal parameters not equal of arguments");
        return null;
    } else {
        return x + y + z;
    }
}

console.log(f6(3, 4, 5));
console.log("==============");
// Some useful examples about "arguments" object
// Sample one:
console.log("use arguments object to gain the average of num");
function avg() {
    let num = 0, l = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number")
            continue;
        num += arguments[i];
        l++;
    }
    num /= l;
    return num;
}

console.log(avg(1, 2, 3, 4));
console.log(avg(1, 2, "3", 4));
// sample two
console.log("Verify email address is legal or not");
