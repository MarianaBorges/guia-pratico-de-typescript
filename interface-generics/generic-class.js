var classeGenerica = /** @class */ (function () {
    function classeGenerica() {
        this.arr = [];
    }
    classeGenerica.prototype.adicionarValor = function (item) {
        this.arr.push(item);
    };
    classeGenerica.prototype.retornaValores = function () {
        return this.arr;
    };
    return classeGenerica;
}());
var classeGenerica1 = new classeGenerica();
classeGenerica1.adicionarValor(4);
console.log(classeGenerica1.retornaValores());
var classeGenerica2 = new classeGenerica();
classeGenerica2.adicionarValor('Homen de Ferro');
console.log(classeGenerica2.retornaValores());
