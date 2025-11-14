import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

// implementação simples em memória (Array)
export class ProdutoController implements ProdutoRepository {
    private lista: Produto[] = [];

    procurarPorId(id: number): Produto | undefined {
        return this.lista.find(p => p.getId() === id);
    }

    listarTodos(): Produto[] {
        return this.lista;
    }

    cadastrar(produto: Produto): void {
        // Poderia validar id duplicado
        const existe = this.procurarPorId(produto.getId());
        if (existe) {
            throw new Error("Já existe produto com esse ID.");
        }
        this.lista.push(produto);
    }

    atualizar(produto: Produto): void {
        const index = this.lista.findIndex(p => p.getId() === produto.getId());
        if (index === -1) {
            throw new Error("Produto não encontrado para atualizar.");
        }
        this.lista[index] = produto;
    }

    deletar(id: number): void {
        const index = this.lista.findIndex(p => p.getId() === id);
        if (index === -1) {
            throw new Error("Produto não encontrado para deletar.");
        }
        this.lista.splice(index, 1);
    }
}

// exportar uma instância para usar no Menu
export const produtoController = new ProdutoController();
