const Produto = require("../models/produtoModel");
const errors = require("restify-errors");

module.exports = {
    listarTodos: async (req, res, next) => {
        try {
            const dados = await Produto.getAll();
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.InternalServerError(err.message));
        }
    },

    listarPorId: async (req, res, next) => {
        try {
            const dados = await Produto.getById(req.params.idProd);
            if (!dados) return next(new errors.NotFoundError("Produto não encontrado"));
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.InternalServerError(err.message));
        }
    },

    inserir: async (req, res, next) => {
        try {
            const dados = await Produto.insert(req.body);
            res.send(dados);
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao inserir produto"));
        }
    },

    atualizar: async (req, res, next) => {
        try {
            const dados = await Produto.update(req.params.idProd, req.body);
            if (!dados) return next(new errors.NotFoundError("Produto não encontrado"));
            res.send({ success: true });
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao atualizar produto"));
        }
    },

    remover: async (req, res, next) => {
        try {
            const dados = await Produto.remove(req.params.idProd);
            if (!dados) return next(new errors.NotFoundError("Produto não encontrado"));
            res.send({ success: true });
            next();
        } catch (err) {
            return next(new errors.BadRequestError("Erro ao remover produto"));
        }
    }
};
