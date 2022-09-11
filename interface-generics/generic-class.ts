class classeGenerica<T> {
    private arr: Array<T> = [];

    adicionarValor(item: T){
        this.arr.push(item);
    }

    retornaValores(){
        return this.arr;
    }

}

let classeGenerica1 = new classeGenerica<number>();
classeGenerica1.adicionarValor(4);
console.log(classeGenerica1.retornaValores());

let classeGenerica2 = new classeGenerica<string>();
classeGenerica2.adicionarValor('Homen de Ferro');
console.log(classeGenerica2.retornaValores());