interface InterfaceGenerica<I> {
    removeItem(item: I): void;
}

class classGenerica<T> implements InterfaceGenerica<T>{

    private arr: Array<T> = [];

    adicionarValor(item: T){
        this.arr.push(item);
    }

    retornaValores(){
        return this.arr;
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1){
            this.arr.splice(index, 1)
        }
    }
}

let classGenerica1 = new classGenerica<number>();
classGenerica1.adicionarValor(1);
classGenerica1.adicionarValor(2);
classGenerica1.adicionarValor(3);

console.log(classGenerica1.retornaValores());

classGenerica1.removeItem(1);

console.log(classGenerica1.retornaValores());


