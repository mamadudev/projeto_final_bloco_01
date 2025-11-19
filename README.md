# 👕 Loja de Roupas - Sistema de Gerenciamento CLI

[![Status](https://img.shields.io/badge/Status-Finalizado-success)]()
[![Linguagem](https://img.shields.io/badge/Linguagem-TypeScript-blue)]()
[![Licença](https://img.shields.io/badge/Licença-MIT-brightgreen)]()

Uma aplicação de **Interface de Linha de Comando (CLI)** para gerenciar o catálogo de produtos de uma loja de roupas. O projeto foi desenvolvido em TypeScript para demonstrar o domínio sobre arquitetura de software 

---

## ✨ Recursos

O sistema é focado em operações CRUD (Criação, Leitura, Atualização, Deleção) e oferece a seguinte interação via terminal:

| ID | Ação | Objetivo |
| :--: | :--- | :--- |
| **1** | Cadastrar Roupa | Adicionar um novo item ao estoque. |
| **2** | Listar Todas | Visualizar o catálogo completo de produtos. |
| **3** | Buscar por ID | Recuperar os detalhes de um produto específico. |
| **4** | Atualizar Roupa | Modificar dados de um produto existente. |
| **5** | Deletar Roupa | Remover permanentemente um item. |
| **6** | Sair | Encerrar a aplicação. |

---

## 💻 Stack Tecnológico

| Categoria | Tecnologia | Uso |
| :--- | :--- | :--- |
| **Linguagem** | **TypeScript** | Garante tipagem forte e segurança no desenvolvimento. |
| **Ambiente** | **Node.js** | Ambiente de execução. |
| **Arquitetura** | **MVC/Camadas** | Organização lógica do código em Controller, Model e Repository. |
| **Interface** | `readline-sync` | Criação da interface interativa do console. |
| **Qualidade** | Exceções Customizadas | Tratamento de erros limpo e previsível. |

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para compilar e executar o sistema:

### Pré-requisitos

* Node.js (LTS)
* npm (ou yarn)

### Instalação

```bash
# Clone o repositório

git clone https://github.com/mamadudev/projeto_final_bloco_01.git
cd projeto_final_bloco_01

# Instale as dependências
npm install
Execução
Bash

# Compila o código TypeScript para JavaScript
npx tsc

# Inicia a aplicação no terminal
node dist/src/Menu.js
💡 Estrutura do Código
A organização em pastas reflete a arquitetura MVC, separando a lógica de negócio (Controller), as entidades (Model) e o acesso a dados (Repository):

.
└── src/
    ├── controller/
    ├── exception/
    ├── model/
    ├── repository/
    └── Menu.ts 
👤 Autor
Desenvolvido com 💙 por Mamadou Diagne