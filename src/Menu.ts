import readlinesync from 'readline-sync';
//import { Cores } from './utils/Cores';             cores
import { Camiseta } from "./model/Camiseta";
import { produtoController } from "./controller/ProdutoController";

const CoresLocal = {
    reset: "\x1b[0m",
    fundo: "\x1b[40m",
    verde: "\x1b[32m",
    amarelo: "\x1b[33m"
};

function cadastrarProduto() {
    try {
        const id = readlinesync.questionInt("ID do produto: ");
        const nome = readlinesync.question("Nome: ");
        const preco = Number(readlinesync.question("Preco: "));
        const tamanho = readlinesync.question("Tamanho: ");
        const p = new Camiseta(id, nome, preco, tamanho);
        produtoController.cadastrar(p);
        console.log("\nProduto cadastrado com sucesso!");
    } catch (err: any) {
        console.log("Erro ao cadastrar:", err.message);
    }
}

function listarProdutos() {
    const lista = produtoController.listarTodos();
    if (lista.length === 0) {
        console.log("\nNenhum produto cadastrado.");
        return;
    }
    lista.forEach(p => p.visualizar());
}

function buscarPorId() {
    const id = readlinesync.questionInt("Digite o ID para busca: ");
    const p = produtoController.procurarPorId(id);
    if (!p) {
        console.log("\nProduto nao encontrado.");
    } else {
        p.visualizar();
    }
}

function atualizarProduto() {
    try {
        const id = readlinesync.questionInt("ID do produto a atualizar: ");
        const existente = produtoController.procurarPorId(id);
        if (!existente) {
            console.log("\nProduto não encontrado.");
            return;
        }
        const novoNome = readlinesync.question(`Novo nome (${existente.getNome()}): `) || existente.getNome();
        const novoPrecoStr = readlinesync.question(`Novo preco (${existente.getPreco()}): `);
        const novoPreco = novoPrecoStr ? Number(novoPrecoStr) : existente.getPreco();

        // se for Camiseta, pedir tamanho também
        if (existente instanceof Camiseta) {
            const camiseta = existente as Camiseta;
            const novoTam = readlinesync.question(`Novo tamanho (${camiseta.tamanho}): `) || camiseta.tamanho;
            const atualizado = new Camiseta(id, novoNome, novoPreco, novoTam);
            produtoController.atualizar(atualizado);
        } else {
            // caso tenha outras subclasses futuramente
            existente.setNome(novoNome);
            existente.setPreco(novoPreco);
            produtoController.atualizar(existente);
        }

        console.log("\nProduto atualizado com sucesso.");
    } catch (err: any) {
        console.log("Erro ao atualizar:", err.message);
    }
}

function deletarProduto() {
    try {
        const id = readlinesync.questionInt("ID do produto a deletar: ");
        produtoController.deletar(id);
        console.log("\nProduto deletado com sucesso.");
    } catch (err: any) {
        console.log("Erro ao deletar:", err.message);
    }
}

export function main() {
    let opcao = -1;
    do {
        console.log(CoresLocal.fundo + CoresLocal.amarelo);
        console.log("*****************************************************");
        console.log("         loja online DE ROUPAS (GENERATION)       ");
        console.log("*****************************************************");
        console.log("\n1 - Cadastrar Produto");
        console.log("2 - Listar Todos os Produtos");
        console.log("3 - Buscar Produto por ID");
        console.log("4 - Atualizar Produto");
        console.log("5 - Deletar Produto");
        console.log(CoresLocal.verde + "0 - Sair");
        console.log(CoresLocal.amarelo + "*****************************************************" + CoresLocal.reset);

        try {
            opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
        } catch (error) {
            opcao = -1;
        }

        switch (opcao) {
            case 1: cadastrarProduto(); break;
            case 2: listarProdutos(); break;
            case 3: buscarPorId(); break;
            case 4: atualizarProduto(); break;
            case 5: deletarProduto(); break;
            case 0:
                console.log(CoresLocal.verde + "\nEncerrado! Volte sempre!" + CoresLocal.reset);
                break;
            default:
                console.log(CoresLocal.fundo + CoresLocal.verde + "\nOpcao Invalida! Tente novamente." + CoresLocal.reset);
        }

    } while (opcao !== 0);
}

main();
