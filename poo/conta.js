"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(titular, saldo) {
        this._numeroDaConta = Math.floor(Math.random() * 1000);
        this.titular = titular;
        this._saldo = saldo;
    }
    Conta.prototype.consultaSaldo = function () {
        return this._saldo;
    };
    Conta.prototype.adicionaSaldo = function (saldo) {
        this._saldo += saldo;
    };
    Conta.prototype.sacarDoSaldo = function (valor) {
        this._saldo -= valor;
    };
    Object.defineProperty(Conta.prototype, "numeroDaConta", {
        get: function () {
            return this._numeroDaConta;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
