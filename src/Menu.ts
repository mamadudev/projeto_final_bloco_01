// src/Menu.ts
import readlinesync from 'readline-sync';
import { ProdutoController } from "./controller/ProdutoController";
import { Camiseta } from "./model/Camiseta";

const controller = new ProdutoController();

const Cores = {
  reset: "\x1b[0m",
  fundo: "\x1b[40m",
  verde: "\x1b[32m",
  amarelo: "\x1b[33m"
};

export function main() {
  let opcao: number = -1;
  let Id = 1;

  do {
    console.log(Cores.fundo + Cores.amarelo);
    console.log("*****************************************************");
    console.log("                Loja de Roupas (GENERATION)          ");
    console.log("*****************************************************");
    console.log("\n1 - Cadastrar roupa");
    console.log("2 - Listar Todas as roupa");
    console.log("3 - Buscar roupa por ID");
    console.log("4 - Atualizar roupa");
    console.log("5 - Deletar roupa");
    console.log(Cores.verde + "0 - Sair");
    console.log(Cores.amarelo + "*****************************************************" + Cores.reset);

    try {
      opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
    } catch {
      opcao = -1;
    }

    switch (opcao) {
      case 1: // Cadastrar
        try {
          const nome = readlinesync.question("Nome da roupa: ");
          const preco = readlinesync.questionFloat("Preço: ");
          const tamanho = readlinesync.question("Tamanho (P/M/G): ");
          const camiseta = new Camiseta(Id, nome, preco, tamanho);
          controller.cadastrar(camiseta);
          console.log("\nCadastrado com sucesso! ID:", Id);
          Id++;
        } catch (err: any) {
          console.log("\nErro:", err.message);
        }
        break;

      case 2: // Listar
        {
          const lista = controller.listarTodos();
          if (lista.length === 0) {
            console.log("\nNenhuma roupa cadastrada.");
          } else {
            lista.forEach(p => p.visualizar());
          }
        }
        break;

      case 3: // Buscar por ID
        try {
          const idBusca = readlinesync.questionInt("ID para buscar: ");
          
          const p = controller.procurarPorId(idBusca);
          
          if (p) {
            p.visualizar();
          } else {
            console.log("\nProduto nao encontrado.");
          }
        } catch (err: any) {
          console.log("\nErro:", err.message);
        }
        break;

      case 4: // Atualizar
        try {
          const idAtual = readlinesync.questionInt("ID da camiseta a atualizar: ");
          // garantimos que existe (buscarPorId lançará exceção se não)
          const existente = controller.procurarPorId(idAtual);
          if (!existente) {
            console.log("\nProduto nao encontrado.");
            break;
          }

          const novoNome = readlinesync.question("Novo nome: ");
          const novoPreco = readlinesync.questionFloat("Novo preco: ");
          const novoTam = readlinesync.question("Novo tamanho: ");
          const novaId = readlinesync.question("Nova id: ");

          const atualizado = new Camiseta(idAtual, novoNome, novoPreco, novoTam);
          controller.atualizar(atualizado);
          console.log("\nAtualizado com sucesso.");
        } catch (err: any) {
          console.log("\nErro:", err.message);
        }
        break;

      case 5: // Deletar
        try {
          const idDel = readlinesync.questionInt("ID da camiseta a deletar: ");
          controller.deletar(idDel);
          console.log("\nDeletado com sucesso.");
        } catch (err: any) {
          console.log("\nErro:", err.message);
        }
        break;

      case 0:
        console.log(Cores.verde + "\nEncerrado! Volte sempre!" + Cores.reset);
        break;

      default:
        console.log("\nOpcao invalida! Tente novamente.");
    }

  } while (opcao !== 0);
}

main();
