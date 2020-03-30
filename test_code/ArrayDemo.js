// 自动初始化数组
console.log("初始化数组：");
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for( i = 0; i < m; i+=1){
        a = [];
        for( j = 0; j < n; j+=1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
var myMatrix = Array.matrix(5,5,2);
console.log(myMatrix[2][4]);
// 扩展数组原型方法
console.log("==============");
console.log("扩展数组原型方法");
Array.prototype._sum = Array.prototype.sum ||
    ( Array.prototype.sum = function () {
            var _n = 0, _this=[];
            for(var i in this){
                if(_this[i] = parseFloat(this[i])) _n += _this[i];
            }
            return _n;
        });
Object.prototype.sum = Array.prototype._sum;
var a = [1, 2, 3, 4, 5, 6, 7, 8, "9"];
console.log(a.sum());