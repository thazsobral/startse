import express from "express";

import { getArticleById, getArticles } from "./services/article.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(request, response) {
    return response.render("pages/home", { title: "Hello my brother!", text: "It's my home page with EJS" });;
});

app.get("/articles", async function(request, response) {
    let { articles } = await getArticles();
    return response.render("pages/articles", { articles });
});

app.get("/articles/:id", async function(request, response) {
    let id = Number(request.params.id);
    let article = await getArticleById(id);
    if(article) {
        return response.render("pages/article", { title: article.title, text: article.text });
    } else {
        return response.render("pages/article", { title: "Not Found", text: "" });
    }
});

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:${PORT}`);
})