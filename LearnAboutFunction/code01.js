// AOP
// using Function.prototype to achieve AOP
Function.prototype.before = function (beforeFn) {
    let __self = this;
    return function () {
        beforeFn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
};
Function.prototype.after = function (afterFn) {
    let __self = this;
    return function () {
        let ret = __self.apply(this, arguments);
        afterFn.apply(this, arguments);
        return ret;
    }
};
let func = function () {
    console.log(2);
};
func = func.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
});
func();
console.log("=========================");
// Function throttling
// It is mean that reducing function usage frequency, and mainly used for DOM events.
// Example in throttling.html
// Time-sharing function
// Perform a step-by-step function in time to extend the overall time, thus avoiding browser freezes or false deaths
// Sample in TS.html
// Lazy loading function
// it will execute with condition is right When the function is called for the first time,
// it will execute directly without check condition when the function is called for the second time
// Example in lazyLoading.html
// Partial function
// Fix some parameters of a function by setting default values ​​and return a new function
// and then receive the remaining parameters in the new function
// example:
let isType=function(type){
    return function(obj){
        return Object.prototype.toString.call(obj)==='[object ' + type+ ']';
    }
};
let isString = isType("String");
let isFunction = isType("Function");
console.log( isString("12"));
console.log( isFunction(function(){}));
console.log( isFunction( {} ));
console.log("===============");
// Uncurry function
// Extract the process of generalizing this pointer，Abstract fn.call or fn.apply into a generic function
// example
Function.prototype.uncurry = function () {
    let self = this;
    return function () {
        return Function.prototype.apply.apply(self, arguments);
    }
}