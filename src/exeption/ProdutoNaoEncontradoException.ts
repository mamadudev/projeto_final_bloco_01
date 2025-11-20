export class ProdutoNaoEncontradoException extends Error {
    constructor(id: number) {
        super(`Produto com ID ${id} não foi encontrado.`);
        this.name = "ProdutoNaoEncontradoException";
    }
}