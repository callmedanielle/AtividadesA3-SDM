const server = require("./src/app");

server.listen(8001, () => {
    console.log("%s executando em %s", server.name, server.url);
});
