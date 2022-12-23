import express, { request, response } from "express";
import bodyParser from "body-parser";

const promoRouter = express.Router();

promoRouter.route("/")
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader = ("Content-Type", "text/plain");
        next();
    })
    .get((resquest, response, next) => {
        response.end("Vou enviar todas as promoções pra você.");
    })
    .post((resquest, response, next) => {
        response.statusCode = 201;
        response.end(`Irei adicionar a promoção com os detalhes ${ resquest.body.name } com os detalhes ${ resquest.body.description }.`);
    })
    .put((resquest, response, next) => {
        response.statusCode = 403;
        response.end("A operação PUT não é permitida em /promos.");
    })
    .delete((resquest, response, next) => {
        response.statusCode = 204;
        response.end("Deletando todas as promoções.");
    });

promoRouter.route("/:id")
    .get((request, response, next) => {
        response.end(`Vou enviar os detalhes da promoção ${ request.params.id } para você.`);
    })
    .post((request, response, next) => {
        response.statusCode = 403;
        response.end(`A operação POST não é suportada em /promos/${ request.params.id }.`);
    })
    .put((request, response, next) => {
        response.write(`Atualizando a promoção ${ request.params.id }\n`);
        response.end(`Irá atualizar a promoção ${ request.body.name } com os detalhes ${ request.body.description }.`);
    })
    .delete((request, response, next) => {
        response.statusCode = 204;
        response.end(`Deletando todas as promoções ${ request.params.id }`);
    });

export { promoRouter };