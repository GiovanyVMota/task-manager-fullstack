# 📋 Task Manager (Gerenciador de Tarefas)

Uma aplicação Fullstack moderna para gerenciamento de tarefas, desenvolvida como requisito da disciplina de **[Nome da Disciplina]**.

O sistema permite criar, visualizar, editar e excluir tarefas de forma segura, contando com autenticação via JWT, proteção de rotas e uma interface com design futurista ("Cyberpunk").

---

## 👥 Integrantes do Grupo

* **Giovany Mota**
* **Tallis Teixeira**
* **Hiago Vinicius**
* **Marcos Rezende*
---

## 🚀 Links do Projeto (Deploy)

O projeto encontra-se em produção e funcional nos links abaixo:

* **Frontend (Vercel):** https://task-manager-frontend-jet-two.vercel.app/
* **Backend (Render):** https://task-manager-backend-sog1.onrender.com


---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Java 21**
* **Spring Boot 3.3**
* **Spring Security + JWT** (Autenticação e Autorização)
* **Maven** (Gerenciador de Dependências)
* **PostgreSQL** (Banco de Dados em Nuvem - Render)
* **Docker** (Containerização para Deploy)

### Frontend
* **React.js** (Vite)
* **Axios** (Consumo de API)
* **CSS Modules / Tailwind** (Estilização Customizada)

---

## 💻 Como executar o projeto localmente

Siga os passos abaixo para rodar a aplicação na sua máquina. O sistema está configurado para se conectar automaticamente ao banco de dados na nuvem, facilitando o teste.

### Pré-requisitos
* **Java 21** instalado.
* **Node.js** instalado.
* **Conexão com a Internet** (Necessária para conectar ao banco PostgreSQL no Render).

### 1. Backend (API)

1.  Clone este repositório e entre na pasta do backend:
    ```bash
    cd backend/taskmanager
    ```
    *(Ajuste o caminho conforme a estrutura da sua pasta)*

2.  Execute a aplicação:
    ```bash
    mvn spring-boot:run
    ```
    *Aguarde a inicialização. O backend rodará em `http://localhost:8080`.*

### 2. Frontend (Interface)

1.  Abra um novo terminal e entre na pasta do frontend:
    ```bash
    cd frontend/task-manager-frontend
    ```
    *(Ajuste o caminho conforme a estrutura da sua pasta)*

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Rode o projeto:
    ```bash
    npm run dev
    ```
    *O frontend rodará em `http://localhost:5173`.*

4.  Acesse `http://localhost:5173` no seu navegador.

---

## 📹 Roteiro de Funcionalidades (Testes)

Para verificar o funcionamento completo do sistema, siga este fluxo:

1.  **Cadastro:** Na tela inicial, clique em "Cadastre-se" e crie uma conta.
2.  **Login:** Use as credenciais criadas para entrar no sistema.
3.  **Criar Tarefa:** No campo superior, digite um título e clique em "Adicionar".
4.  **Editar Tarefa:** Clique no botão "Editar". O título subirá para o campo de texto; altere-o e clique em "Salvar".
5.  **Alterar Status:** Clique na etiqueta de status (ex: "PENDENTE ⏳") para alternar para "CONCLUÍDA ✅".
6.  **Excluir Tarefa:** Clique no botão "Excluir" para remover o item.
7.  **Logout:** Clique em "Sair" para encerrar a sessão.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
