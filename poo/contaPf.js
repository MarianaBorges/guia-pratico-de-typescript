"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPf = void 0;
var conta_1 = require("./conta");
var ContaPf = /** @class */ (function (_super) {
    __extends(ContaPf, _super);
    function ContaPf(cpf, titular, saldo) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.cpf = cpf;
        return _this;
    }
    ContaPf.prototype.consultar = function () {
        return "Saldo atual: ".concat(this.consultaSaldo());
    };
    ContaPf.prototype.sacar = function (valor) {
        if (this.consultaSaldo() > 0 && valor <= this.consultaSaldo()) {
            this.sacarDoSaldo(valor);
        }
    };
    ContaPf.prototype.calculaTributo = function () {
        //Calculo do trubuto
        return 0;
    };
    return ContaPf;
}(conta_1.Conta));
exports.ContaPf = ContaPf;
