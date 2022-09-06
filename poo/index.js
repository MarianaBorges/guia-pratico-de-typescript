"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contaPf_1 = require("./contaPf");
var contaPj_1 = require("./contaPj");
var pessoaFisica = new contaPf_1.ContaPf(22223333344, "Thiago Adriano", 1000);
var pessoaJuridica = new contaPj_1.ContaPj(333444555, "Thiago Adriano", 1000);
console.log("Pessos fisica", pessoaFisica.cpf);
console.log("Pessos juridica", pessoaJuridica.numeroDaConta);
