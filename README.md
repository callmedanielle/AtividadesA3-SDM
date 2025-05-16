
# Lojinha (Produtos e Clientes)

API desenvolvida com Node.js, seguindo o padrão MVC.

## Tecnologias Utilizadas

- Node.js
- Restify
- MySQL
- Knex.js


## Estrutura do Projeto

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

## Script para o Banco de Dados

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

## Endpoints disponíveis

### Produtos

- `GET /produto` → Lista todos os produtos
- `GET /produto/:idProd` → Retorna um produto pelo ID
- `POST /produto` → Cadastra um novo produto
- `PUT /produto/:idProd` → Atualiza um produto
- `DELETE /produto/:idProd` → Deleta um produto

### Clientes

- `GET /cliente` → Lista todos os clientes
- `GET /cliente/:idCli` → Retorna um cliente pelo ID
- `POST /cliente` → Cadastra um novo cliente
- `PUT /cliente/:idCli` → Atualiza um cliente
- `DELETE /cliente/:idCli` → Deleta um cliente

---

## Exemplo de requisição com JSON (POST /cliente)

```json
{
  "nome": "Danielle",
  "email": "danielle@exemplo.com",
  "telefone": "11999999999"
}
```

---
