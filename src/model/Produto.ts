export abstract class Produto {
    protected id: number;
    protected nome: string;
    protected preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    // método abstrato que cada subclasse implementa
    public abstract visualizar(): void;
}
