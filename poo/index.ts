import { ContaPf } from "./contaPf";
import { ContaPj } from "./contaPj";

const pessoaFisica = new ContaPf(22223333344, "Thiago Adriano", 1000);

const pessoaJuridica = new ContaPj(333444555, "Thiago Adriano", 1000);

console.log("Pessos fisica", pessoaFisica.cpf);
console.log("Pessos juridica", pessoaJuridica.numeroDaConta);
