import { Conta } from "./conta";
import { Tributavel } from "./types";

export class ContaPf extends Conta implements Tributavel {
    cpf: number;

    constructor(cpf: number, titular: string, saldo: number){
        super(titular,saldo);
        this.cpf = cpf;
    }

    consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`
    }

    sacar(valor: number) {
        if(this.consultaSaldo() > 0 && valor <= this.consultaSaldo()){
            this.sacarDoSaldo(valor)
        }
    }
    calculaTributo(): number {
        //Calculo do trubuto
        return 0;
    }
}