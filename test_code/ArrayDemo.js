// 自动初始化数组
console.log("初始化数组：");
Array.matrix = function (m, n, initial) {
    let a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
let myMatrix = Array.matrix(5, 5, 2);
console.log(myMatrix[2][4]);
// 扩展数组原型方法
console.log("==============");
console.log("扩展数组原型方法");
Array.prototype._sum = Array.prototype.sum ||
    (Array.prototype.sum = function () {
        let _n = 0, _this = [];
        for (let i in this) {
            _this[i] = parseFloat(this[i]);
            if (_this[i]) _n += _this[i];
        }
        return _n;
    });
Object.prototype["sum"] = Array.prototype._sum;
let a = [1, 2, 3, 4, 5, 6, 7, 8, "9"];
console.log(a.sum());
//设计迭代器
console.log("===================");
console.log("设计迭代器");
Array.prototype.each = function (f) {
    try {
        this.i || (this.i = 0);
        if (this.length > 0 && f.constructor === Function) {
            while (this.i < this.length) {
                let e = this[this.i];
                if (e && e.constructor === Array) {
                    e.each(f);
                } else {
                    f.apply(e, [e]);
                }
                this.i++;
            }
        }
    } catch (w) {
        return this;
    }
};
let a1 = [1, [2, [3, 4]]];
let f = function (x) {
    console.log(x);
};
a1.each(f);
console.log("============");
console.log("编辑器");
Array.prototype._edit = Array.prototype.edit ||
    (Array.prototype.edit = function () {
        let b = arguments, a = [];
        this.each(function () {
            a.push(b[0].call(b[1], this));
        });
        return a;
    });
Object.prototype["edit"] = Array.prototype._edit;
let a2 = [1, 2, 3, 4];
let f2 = function (x) {
    return x * x;
};
let b2 = a2.edit(f2);
console.log(b2);
console.log("===============");
console.log("过滤器");
Array.prototype._filter = Array.prototype.filter ||
    (Array.prototype.filter = function () {
        let b = arguments, a=[];
        this.each(function () {
            if(b[0].call(b[1], this)) a.push(this);
        });
        return a;
    });
Object.prototype["filter"] = Array.prototype._filter;
let a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let f3 = function (x) {
    if( x>4) return true;
};
let b3 = a3.filter(f3);
console.log(b3);