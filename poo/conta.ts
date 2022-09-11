function analisaSaldo(target: any, key: any, descriptor: any){

}

function validaTitular(target: any, propertyKey: any,){}

export abstract class Conta {
    private readonly _numeroDaConta: number;
    @validaTitular
    titular: string;
    private _saldo: number;

    constructor(titular: string, saldo: number){
        this._numeroDaConta = Math.floor(Math.random() * 1000);
        this.titular = titular;
        this._saldo = saldo;
    }
    @analisaSaldo
    protected consultaSaldo(): number{
        return this._saldo;
    }

    protected adicionaSaldo(saldo: number): void{
        this._saldo += saldo;
    }

    protected sacarDoSaldo(valor: number): void{
        this._saldo -= valor;
    }

    get numeroDaConta(): number {
        return this._numeroDaConta;
    }

}

