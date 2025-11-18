import readlineSync from "readline-sync";
import { produtoController } from "./controller/ProdutoController";
import { Produto } from "./model/Produto";  
import { Camiseta } from "./model/Camiseta";

// Paleta de Cores
const Cores = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",

  preto: "\x1b[30m",
  vermelho: "\x1b[31m",
  verde: "\x1b[32m",
  amarelo: "\x1b[33m",
  azul: "\x1b[34m",
  roxo: "\x1b[35m",
  ciano: "\x1b[36m",
  branco: "\x1b[37m",

  fundoPreto: "\x1b[40m",
  fundoVermelho: "\x1b[41m",
  fundoVerde: "\x1b[42m",
  fundoAmarelo: "\x1b[43m",
  fundoAzul: "\x1b[44m",
  fundoRoxo: "\x1b[45m",
  fundoCiano: "\x1b[46m",
  fundoBranco: "\x1b[47m",
};

// Função para centralizar
function center(text: string, width = 60) {
  const space = Math.max(0, Math.floor((width - text.length) / 2));
  return " ".repeat(space) + text;
}

function logo() {
  console.clear();

  console.log(
    Cores.fundoPreto +
      Cores.verde +
      Cores.bold +
      "\n" +
      center("====================================================") +
      "\n" +
      center("LOJA ONLINE DE ROUPAS (GENERATION)") +
      "\n" +
      center("====================================================") +
      "\n" +
      Cores.reset
  );
}

function menu() {
  while (true) {
    logo();

    console.log(
      Cores.amarelo +
        Cores.bold +
        "\n" +
        center("1 • Cadastrar Produto") +
        "\n" +
        center("2 • Listar Todos os Produtos") +
        "\n" +
        center("3 • Buscar Produto por ID") +
        "\n" +
        center("4 • Atualizar Produto") +
        "\n" +
        center("5 • Deletar Produto") +
        "\n" +
        center("0 • Sair") +
        "\n" +
        Cores.reset
    );
    console.log(
    Cores.fundoPreto +
      Cores.ciano +
      Cores.bold +
      "\n" +
      center("====================================================") +
      "\n" +
      Cores.reset
    );

      const op = readlineSync.question(
      Cores.ciano + center("Escolha uma opcao: ") + Cores.reset
       +
      
      "\n"
    );

    


    switch (op) {
      case "1":
        cadastrarProduto();
        break;

      case "2":
        listarProdutos();
        break;

      case "3":
        buscarPorId();
        break;

      case "4":
        atualizarProduto();
        break;

      case "5":
        deletarProduto();
        break;

      case "0":
        console.log(center(Cores.verde + "       Sistema encerrado.\n" + Cores.reset));
        process.exit(0);
    }
  }
}

function cadastrarProduto() {
  console.clear();
  console.log(center(Cores.azul + Cores.bold + "            === CADASTRAR PRODUTO ===" + Cores.reset));

  const id = readlineSync.questionInt(center("ID: "));
  const nome = readlineSync.question(center("Nome: "));
  const preco = Number(readlineSync.question(center("Preco: ")));
  const tamanho = readlineSync.question(center("Tamanho: "));

  const produto = new Camiseta(id, nome, preco, tamanho);
  produtoController.cadastrar(produto);

  console.log(center(Cores.verde + "          Produto cadastrado!" + Cores.reset));
  readlineSync.question(center("ENTER para voltar..."));
}

function listarProdutos() {
  console.clear();
  console.log(center(Cores.azul + Cores.bold + "=== LISTA DE PRODUTOS ===" + Cores.reset));

  const lista = produtoController.listarTodos();

  if (lista.length === 0) {
    console.log(center(Cores.amarelo + "Nenhum produto encontrado." + Cores.reset));
  } else {
    lista.forEach((p) => {
      console.log(
        center(
          Cores.ciano +
            `ID: ${p.getId()} | Nome: ${p.getNome()} | Preco: R$ ${p.getPreco()}` +
            Cores.reset
        )
      );
    });
  }

  readlineSync.question(center("ENTER para voltar..."));
}

function buscarPorId() {
  console.clear();
  console.log(center(Cores.azul + Cores.bold + "=== BUSCAR PRODUTO ===" + Cores.reset));

  const id = readlineSync.questionInt(center("ID: "));
  const p = produtoController.procurarPorId(id);

  console.log(
    center(
      Cores.verde +
        `Encontrado: ${p.getNome()} | R$ ${p.getPreco()}` +
        Cores.reset
    )
  );

  readlineSync.question(center("ENTER para voltar..."));
}

function atualizarProduto() {
  console.clear();
  console.log(center(Cores.azul + Cores.bold + "=== ATUALIZAR PRODUTO ===" + Cores.reset));

  const id = readlineSync.questionInt(center("ID: "));
  const nome = readlineSync.question(center("Novo nome: "));
  const preco = Number(readlineSync.question(center("Novo preco: ")));
  const tamanho = readlineSync.question(center("Novo tamanho: "));

  const produto = new Camiseta(id, nome, preco, tamanho);
  produtoController.atualizar(produto);

  console.log(center(Cores.verde + "Atualizado!" + Cores.reset));
  readlineSync.question(center("ENTER para voltar..."));
}

function deletarProduto() {
  console.clear();
  console.log(center(Cores.azul + Cores.bold + "=== DELETAR PRODUTO ===" + Cores.reset));

  const id = readlineSync.questionInt(center("ID: "));
  produtoController.deletar(id);

  console.log(center(Cores.verde + "Removido!" + Cores.reset));
  readlineSync.question(center("ENTER para voltar..."));
}

menu();
