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
function checkArg(a) {
    if (a.length !== a.callee.length) {
        console.log("Mismatch of actual and formal parameters!");
        return false;
    }
    return true;
}

function f2(a, b) {
    if(checkArg(arguments))
        return ((a * 1 ? a : 0) + (b * 1 ? b : 0)) / 2;
}

console.log(f2(6));