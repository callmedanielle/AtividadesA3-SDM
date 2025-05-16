const produtoController = require("../controllers/produtoController");

module.exports = function(server) {
    server.get("/produto", produtoController.listarTodos);
    server.get("/produto/:idProd", produtoController.listarPorId);
    server.post("/produto", produtoController.inserir);
    server.put("/produto/:idProd", produtoController.atualizar);
    server.del("/produto/:idProd", produtoController.remover);
};
