import { Conta } from "./conta";
import { Tributavel } from "./types";

export class ContaPj extends Conta implements Tributavel {
    cnpj: number;

    constructor(cnpj: number, titular: string, saldo: number){
        super( titular,saldo);
        this.cnpj = cnpj;
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    sacar(valor: number){
        this.sacarDoSaldo(valor);
    }

    calculaTributo(): number {
        //Calculo do trubuto
        return 0;
    }
}