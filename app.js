const restify = require("restify");
const produtoRoutes = require("./routes/produtoRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

const server = restify.createServer({
    name: "Lojinha",
    version: "1.0.0"
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

produtoRoutes(server);
clienteRoutes(server);

server.get("/", (req, res, next) => {
    res.send({ resposta: "Sejam bem-vindos à nossa Lojinha" });
    next();
});

module.exports = server;