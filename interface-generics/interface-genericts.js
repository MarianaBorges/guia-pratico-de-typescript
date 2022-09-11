var classGenerica = /** @class */ (function () {
    function classGenerica() {
        this.arr = [];
    }
    classGenerica.prototype.adicionarValor = function (item) {
        this.arr.push(item);
    };
    classGenerica.prototype.retornaValores = function () {
        return this.arr;
    };
    classGenerica.prototype.removeItem = function (item) {
        var index = this.arr.indexOf(item);
        if (index > -1) {
            this.arr.splice(index, 1);
        }
    };
    return classGenerica;
}());
var classGenerica1 = new classGenerica();
classGenerica1.adicionarValor(1);
classGenerica1.adicionarValor(2);
classGenerica1.adicionarValor(3);
console.log(classGenerica1.retornaValores());
classGenerica1.removeItem(1);
console.log(classGenerica1.retornaValores());
