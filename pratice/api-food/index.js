import  express  from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";

import { dishRouter } from "./routes/dish.js";
import { promoRouter } from "./routes/promo.js";

const HOSTNAME = "localhost";
const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/dishes", dishRouter);
app.use("/promos", promoRouter);

app.use((request, response, next) => {
    response.statusCode = 200;
    response.setHeader("Contet-Type", "text/html");
    response.end(
        `<html>
            <body>
                <h1>
                    This is a Express Server.
                </h1>
            </body>
        </html>`
    )
});

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});