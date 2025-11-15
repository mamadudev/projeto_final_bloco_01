import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { ProdutoNaoEncontradoException } from "../exeption/ProdutoNaoEncontradoException";

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Produto[] = [];

    listarTodos(): Produto[] {
        return this.listaProdutos; 
    }

    procurarPorId(id: number): Produto | null {
        const p = this.listaProdutos.find(item => item.getId() === id) || null;
        if (!p) throw new ProdutoNaoEncontradoException(id);
        return p;
    }

    cadastrar(produto: Produto): void {
        const existe = this.listaProdutos.some(p => p.getId() === produto.getId());
        if (existe) throw new Error(`Já existe produto com ID ${produto.getId()}`);
        this.listaProdutos.push(produto);
    }

    atualizar(produtoAtualizado: Produto): void {
        const idx = this.listaProdutos.findIndex(p => p.getId() === produtoAtualizado.getId());
        if (idx === -1) throw new ProdutoNaoEncontradoException(produtoAtualizado.getId());
        this.listaProdutos[idx] = produtoAtualizado;
    }

    deletar(id: number): void {
        const idx = this.listaProdutos.findIndex(p => p.getId() === id);
        if (idx === -1) throw new ProdutoNaoEncontradoException(id);
        this.listaProdutos.splice(idx, 1);
    }
}
