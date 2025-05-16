const db = require("../db");

module.exports = {
    getAll: () => db("produto"),
    getById: (id) => db("produto").where("id", id).first(),
    insert: (data) => db("produto").insert(data),
    update: (id, data) => db("produto").where("id", id).update(data),
    remove: (id) => db("produto").where("id", id).delete()
};