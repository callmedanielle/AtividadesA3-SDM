const clienteController = require("../controllers/clienteController");

module.exports = function(server) {
    server.get("/cliente", clienteController.listarTodos);
    server.get("/cliente/:idCli", clienteController.listarPorId);
    server.post("/cliente", clienteController.inserir);
    server.put("/cliente/:idCli", clienteController.atualizar);
    server.del("/cliente/:idCli", clienteController.remover);
};
