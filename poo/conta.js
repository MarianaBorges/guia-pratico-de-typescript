"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Conta = void 0;
function analisaSaldo(target, key, descriptor) {
}
function validaTitular(target, propertyKey) { }
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
    __decorate([
        validaTitular
    ], Conta.prototype, "titular");
    __decorate([
        analisaSaldo
    ], Conta.prototype, "consultaSaldo");
    return Conta;
}());
exports.Conta = Conta;
