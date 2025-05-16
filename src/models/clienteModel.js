const db = require("../db");

module.exports = {
    getAll: () => db("cliente"),
    getById: (id) => db("cliente").where("id", id).first(),
    insert: (data) => db("cliente").insert(data),
    update: (id, data) => db("cliente").where("id", id).update(data),
    remove: (id) => db("cliente").where("id", id).delete()
};
