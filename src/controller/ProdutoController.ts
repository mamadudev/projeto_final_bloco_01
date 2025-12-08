import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { ProdutoNaoEncontradoException } from "../exeption/ProdutoNaoEncontradoException";

export class ProdutoController implements ProdutoRepository {
    private lista: Produto[] = [];

    listarTodos(): Produto[] {
        return this.lista;
    }

    procurarPorId(id: number): Produto {
        const produto = this.lista.find(p => p.getId() === id);
        if (!produto) throw new ProdutoNaoEncontradoException(id);
        return produto;
    }

    cadastrar(produto: Produto): void {
        const existe = this.lista.some(p => p.getId() === produto.getId());
        if (existe) {
            throw new Error(`Já existe produto com ID ${produto.getId()}`);
        }
        this.lista.push(produto);
    }

    atualizar(produtoAtualizado: Produto): void {
        const index = this.lista.findIndex(p => p.getId() === produtoAtualizado.getId());
        if (index === -1) throw new ProdutoNaoEncontradoException(produtoAtualizado.getId());
        this.lista[index] = produtoAtualizado;
    }

    deletar(id: number): void {
        const index = this.lista.findIndex(p => p.getId() === id);
        if (index === -1) throw new ProdutoNaoEncontradoException(id);
        this.lista.splice(index, 1);
    }
}

export const produtoController = new ProdutoController();
