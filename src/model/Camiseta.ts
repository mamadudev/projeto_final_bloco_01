import { Produto } from "./Produto";

export class Camiseta extends Produto {
    private _tamanho: string;

    constructor(id: number, nome: string, preco: number, tamanho: string) {
        super(id, nome, preco);
        this._tamanho = tamanho;
    }

    public get tamanho(): string {
        return this._tamanho;
    }

    public set tamanho(novo: string) {
        this._tamanho = novo;
    }

    public visualizar(): void {
        console.log("\n----------------------------");
        console.log("Camiseta:");
        console.log(`ID: ${this.getId()}`);
        console.log(`Nome: ${this.getNome()}`);
        console.log(`Preço: R$ ${this.getPreco().toFixed(2)}`);
        console.log(`Tamanho: ${this.tamanho}`);
        console.log("----------------------------\n");
    }
}
