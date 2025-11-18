# 👕 Loja de Roupas (GENERATION) - Sistema de Gerenciamento (CLI)

> **Status:** Concluído (Bloco 01) | **Tecnologia:** TypeScript

Um sistema de gerenciamento de loja focado em produtos de vestuário, desenvolvido como uma aplicação de console (CLI). O objetivo principal é demonstrar proficiência em TypeScript e na organização de código utilizando padrões de arquitetura como o MVC (Model-View-Controller).

---

## ✨ Funcionalidades Principais

O usuário interage com o sistema através de um menu de opções, que permite a execução das operações CRUD (Criar, Ler, Atualizar, Deletar) sobre os produtos da loja:

1.  **Cadastrar Roupa**: Adiciona um novo produto ao catálogo.
2.  **Listar Todas as Roupas**: Exibe o estoque completo.
3.  **Buscar Roupa por ID**: Localiza e exibe os detalhes de um item específico.
4.  **Atualizar Roupa**: Permite modificar dados de um produto existente.
5.  **Deletar Roupa**: Remove um produto permanentemente do sistema.
6.  **Sair**: Encerra a aplicação.

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes ferramentas e conceitos:

| Ferramenta | Descrição |
|       :--- | :--- |
| **TypeScript** | Linguagem de desenvolvimento principal, garantindo tipagem estática e segurança do código. |
| **Node.js** | Ambiente de execução para rodar a aplicação. |
| **`readline-sync`** | Biblioteca utilizada para criar a interface de console interativa. |
| **Organização MVC** | Separação lógica entre **Model** (dados), **Controller** (regras de negócio) e **Repository** (acesso a dados). |
| **Tratamento de Exceções** | Utilização de classes de exceção (`src/exception/`) para um controle de erros limpo e estruturado. |

## ⚙️ Instalação e Execução

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) e o npm instalados.

### 1. Clonar o Repositório

```bash
# Clone o repositório
git clone [https://github.com/mamadudev/projeto_final_bloco_01.git](https://github.com/mamadudev/projeto_final_bloco_01.git)

# Acesse o diretório do projeto
cd projeto_final_bloco_01
cd src
# E em fim rodar com o seguinte comando:
ts-node Menu.ts