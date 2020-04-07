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