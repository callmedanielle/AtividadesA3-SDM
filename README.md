
# 📦 API REST - Lojinha (Produtos e Clientes)

API REST desenvolvida com Node.js, seguindo o padrão MVC, usando Restify, MySQL e Knex.js.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Restify
- MySQL
- Knex.js

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/
│   ├── clienteController.js
│   └── produtoController.js
├── models/
│   ├── clienteModel.js
│   └── produtoModel.js
├── routes/
│   ├── clienteRoutes.js
│   └── produtoRoutes.js
├── db.js
├── app.js
server.js
```

---

## 📌 Pré-requisitos

- Node.js instalado
- MySQL rodando localmente
- Banco de dados `loja` criado

---

## 🧱 Script para o Banco de Dados

```sql
CREATE DATABASE IF NOT EXISTS loja;

USE loja;

CREATE TABLE produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL
);

CREATE TABLE cliente (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefone VARCHAR(20)
);
```

---

## ▶️ Executando a aplicação

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   node server.js
   ```

3. Acesse a API:
   ```
   http://localhost:8001
   ```

---

## 🔁 Endpoints disponíveis

### 📦 Produtos

- `GET /produto` → Lista todos os produtos
- `GET /produto/:idProd` → Retorna um produto pelo ID
- `POST /produto` → Cadastra um novo produto
- `PUT /produto/:idProd` → Atualiza um produto
- `DELETE /produto/:idProd` → Deleta um produto

### 👤 Clientes

- `GET /cliente` → Lista todos os clientes
- `GET /cliente/:idCli` → Retorna um cliente pelo ID
- `POST /cliente` → Cadastra um novo cliente
- `PUT /cliente/:idCli` → Atualiza um cliente
- `DELETE /cliente/:idCli` → Deleta um cliente

---

## 💡 Exemplo de requisição com JSON (POST /cliente)

```json
{
  "nome": "Danielle",
  "email": "danielle@exemplo.com",
  "telefone": "11999999999"
}
```

---

## 🤝 Autor

Danielle – para atividade de Sistemas Distribuídos e Mobile
