// closure
// Closure Structure
function f(x) {
    return function (y) {
        return x+y;
    }
}
let c = f(5);
console.log(c(6));
// Closure variant
 let add;
function f1() {
    let a;
    a = [1, 2, 3];
    add = function (x) {
        a[0] = x*x;
    };
    return a;
}
let d = f1();
console.log(d[0]);
add(5);
console.log(d[0]);
add(10);
console.log(d[0]);
// Some classical samples of closure
// sample one
let f2 = function () {
    let a = [];
    return function (x) {
        a.push(x);
        return a;
    }
}();
let a1 = f2(1);
console.log(a1);
let b1 = f2(2);
console.log(b1);