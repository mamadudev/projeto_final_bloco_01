import readlinesync from 'readline-sync';

const Cores = {
    reset: "\x1b[0m",
    fundo: "\x1b[40m",
    verde: "\x1b[32m",
    amarelo: "\x1b[33m"
}

export function main() {
    let opcao: number = 0;

    do {
        
        console.log(Cores.fundo + Cores.amarelo);
        console.log("*****************************************************");
        console.log("            loja online DE ROUPAS (GENERATION)       ");
        console.log("*****************************************************");
        console.log("\n1 - Cadastrar Produto");
        console.log("2 - Listar Todos os Produtos");
        console.log("3 - Buscar Produto por ID");
        console.log("4 - Atualizar Produto");
        console.log("5 - Deletar Produto");
        console.log(Cores.verde + "0 - Sair");
        console.log(Cores.amarelo + "*****************************************************" + Cores.reset);

        try {
            opcao = readlinesync.questionInt("Entre com a opcao desejada: ");
        } catch (error) {
            // Tratamento de erro básico para entrada inválida (ainda não é a Exception da Etapa 3)
            opcao = -1;
        }


        switch (opcao) {
            case 1:
                console.log("\nCadastrar Produto - Funcionalidade em desenvolvimento...");
                let nome = readlinesync.question("Digite o Nome da Roupa: ");
                console.log(`Nome cadastrado: ${nome}`);
                break;
            case 2:
                console.log("\nListar Todos os Produtos - Funcionalidade em desenvolvimento...");
                break;
            case 3:
                console.log("\nBuscar Produto por ID - Funcionalidade em desenvolvimento...");
                break;
            case 4:
                console.log("\nAtualizar Produto - Funcionalidade em desenvolvimento...");
                break;
            case 5:
                console.log("\nDeletar Produto - Funcionalidade em desenvolvimento...");
                break;
            case 0:
                console.log(Cores.verde + "\nEncerrado! Volte sempre!" + Cores.reset);
                break;
            default:
                console.log(Cores.fundo + Cores.verde + "\nOpção Invalida! Tente novamente." + Cores.reset);
                break;
        }
        // Pausa para visualização
        //if (opcao !== 0) {
        //  readlinesync.keyInPause();
        //}

    } while (opcao !== 0);
}

main();