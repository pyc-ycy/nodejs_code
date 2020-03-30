// 多维数组
// var a = [];
// for (var i = 0; i < 10; i++) {
//     var b = [];
//     for (var j = 0; j < 10; j++) {
//         b[j] = i * 10 + j + 1;
//     }
//     a[i] = b;
// }
// console.log(a);
console.log("// 空位数组");
var a2 = [1, , 2];
console.log(a2.length);
console.log(a2[1]);
console.log("==============");
// 关联数组
console.log("关联数组");
var a = [];
a[false] = false;
a[true] = true;
console.log(a[0]);
console.log(a[1]);
console.log(a[false]);
console.log(a[true]);
console.log(a["false"]);
console.log(a["true"]);
console.log("=================");
var a1 = [["张三", 1], ["李四", 2], ["王五", 3]];
for (var i in a1) {
    if (a1[i][0] == "李四")
        console.log(a1[i][1]);
}
console.log("===============");
var a3 = [];
a3["张三"] = 1;
a3["李四"] = 2;
a3["王五"] = 4;
console.log(a3["王五"]);
console.log("============");
// 伪类数组
console.log("伪类数组");
var obj = {};
obj[0] = 0;
obj[1] = 1;
obj[2] = 2;
obj.length = 3;
console.log(obj["2"]);
console.log("================");

// forEach 访问数组
console.log("forEach 访问数组");
function f(value, index, array) {
    console.log("a4[" + index + "] = " + value);
}

var a4 = ['a', 'b', 'c', 'd'];
a4.forEach(f);
console.log("============");
var obj1 = {
    f1: function (value, index, array) {
        console.log("a5[" + index + "] = " + value);
        array[index] = this.f2(value);
    },
    f2: function (x) {
        return x * x;
    }
};
var a5 = [12, 26, 36];
a4.forEach(obj1.f1, obj1);
console.log(a5);
console.log("===========");
// keys 迭代
console.log("keys 迭代");
var o = {a: "A", b: "B", c: "C"};
console.log(Object.keys(o).length);
var a6 = ["A", "B", "C"];
console.log(Object.keys(a6).length);
console.log("================");

// 栈操作
console.log("栈操作")
function d2b(num) {
    var a = [], r, b = '';
    while (num > 0) {
        r = Math.floor(num % 2);
        a.push(r);
        num = Math.floor(num / 2);
    }
    while (a.length) {
        b += a.pop().toString();
    }
    return b;
}

console.log(d2b(59));
console.log((59).toString(2));
console.log("===================");

function f1(n, m) {
    var arr = [];
    for (var i = 1; i < n + 1; i++) {
        arr.push(i);
    }
    while (arr.length > 1) {
        for (var j = 0; j < m - 1; j++) {
            arr.push(arr.shift());
        }
        arr.shift();
    }
    return arr;
}

console.log(f1(5, 3));
console.log("===========");
console.log("concat 函数");
// concat 函数特性
var b = [1, 2, 3, 4, 5];
var b1 = b.concat([1, 2, 3], [4, 5]);
console.log(b1.length);
var b2 = b.concat([[1, 2], 3], [4, 5]);
console.log(b2.length);
console.log("==============");
console.log("splice 函数");
// 使用 splice 添加元素
var a7 = [1, 2, 3, 4, 5];
a7.splice(1, 0, 3, 4, 5);
console.log(a7);
// 使用 splice 删除元素
a7.splice(5);
console.log(a7);
a7.splice(3, 1);
console.log(a7);
console.log("==================");
// 截取数组
// splice 方法
var a8 = [1, 2, 3, 4, 5];
var b3 = a8.splice(2);
console.log(b3);
b3 = a8.splice(2, 0);
console.log(b3.constructor === Array);
b3 = a8.splice(6, 2, 2, 3);
console.log(b3);
console.log(a8);
b3 = a8.splice(-2, -2, 2, 3);
console.log(a8);
console.log("=======================");
console.log("slice 方法");
// slice 放法
var a9 = [1, 2, 3, 4, 5, 6];
var b4 = a9.slice(2, 5);
console.log(b4);
console.log(a9);