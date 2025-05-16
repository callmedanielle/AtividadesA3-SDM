const Cliente = require("../models/clienteModel");
const errors = require("restify-errors");

module.exports = {
    listarTodos: async (req, res, next) => {
        try {
            const dados = await Cliente.getAll();
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.InternalServerError(err.message));
        }
    },

    listarPorId: async (req, res, next) => {
        try {
            const dados = await Cliente.getById(req.params.idCli);
            if (!dados) return next(new errors.NotFoundError("Cliente não encontrado"));
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.InternalServerError(err.message));
        }
    },

    inserir: async (req, res, next) => {
        try {
            const dados = await Cliente.insert(req.body);
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao inserir cliente"));
        }
    },

    atualizar: async (req, res, next) => {
        try {
            const dados = await Cliente.update(req.params.idCli, req.body);
            if (!dados) return next(new errors.NotFoundError("Cliente não encontrado"));
            res.send({ success: true });
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao atualizar cliente"));
        }
    },

    remover: async (req, res, next) => {
        try {
            const dados = await Cliente.remove(req.params.idCli);
            if (!dados) return next(new errors.NotFoundError("Cliente não encontrado"));
            res.send({ success: true });
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao remover cliente"));
        }
    }
};
