import express, { request, response } from "express";
import bodyParser from "body-parser";

const dishRouter = express.Router();

dishRouter.route("/")
    .all((request, response, next) => {
        response.statusCode = 200;
        response.setHeader = ("Content-Type", "text/plain");
        next();
    })
    .get((resquest, response, next) => {
        response.end("Vou enviar todas as refeições pra você.");
    })
    .post((resquest, response, next) => {
        response.statusCode = 201;
        response.end(`Irei adicionar a refeição com os detalhes ${ resquest.body.name } com os detalhes ${ resquest.body.description }.`);
    })
    .put((resquest, response, next) => {
        response.statusCode = 403;
        response.end("A operação PUT não é permitida em /dishes.");
    })
    .delete((resquest, response, next) => {
        response.statusCode = 204;
        response.end("Deletando todas as refeições.");
    });

dishRouter.route("/:id")
    .get((request, response, next) => {
        response.end(`Vou enviar os detalhes da refeição ${ request.params.id } para você.`);
    })
    .post((request, response, next) => {
        response.statusCode = 403;
        response.end(`A operação POST não é suportada em /dishes/${ request.params.id }.`);
    })
    .put((request, response, next) => {
        response.write(`Atualizando a refeição ${ request.params.id }\n`);
        response.end(`Irá atualizar a refeição ${ request.body.name } com os detalhes ${ request.body.description }.`);
    })
    .delete((request, response, next) => {
        response.statusCode = 204;
        response.end(`Deletando todas as refeição ${ request.params.id }`);
    });

export { dishRouter };