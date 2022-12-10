const articles = {
    "articles": [
        {
            "id": 1,
            "title": "Why do crowned pulleys keep a flat belt on track?",
            "preview": "In this article, you will learn why a convex curvature of a crowned pulley will cause a flat belt to keep track and not jump off the pulley!            Paradoxical as it may seem at first glance, a convex curvature of a pulley causes a flat belt to keep track and not jump off!...",
            "text": "In this article, you will learn why a convex curvature of a crowned pulley will cause a flat belt to keep track and not jump off the pulley!            Paradoxical as it may seem at first glance, a convex curvature of a pulley causes a flat belt to keep track and not jump off!, In this article, you will learn why a convex curvature of a crowned pulley will cause a flat belt to keep track and not jump off the pulley!            Paradoxical as it may seem at first glance, a convex curvature of a pulley causes a flat belt to keep track and not jump off!, In this article, you will learn why a convex curvature of a crowned pulley will cause a flat belt to keep track and not jump off the pulley!            Paradoxical as it may seem at first glance, a convex curvature of a pulley causes a flat belt to keep track and not jump off!, In this article, you will learn why a convex curvature of a crowned pulley will cause a flat belt to keep track and not jump off the pulley!            Paradoxical as it may seem at first glance, a convex curvature of a pulley causes a flat belt to keep track and not jump off!"
        },
        {
            "id": 2,
            "title": "Shaft work in open systems",
            "preview": "Shaft work is the total work performed in open systems, which is usually transferred by shafts...",
            "text": "Shaft work is the total work performed in open systems, which is usually transferred by shafts. Shaft work is the total work performed in open systems, which is usually transferred by shafts. Shaft work is the total work performed in open systems, which is usually transferred by shafts.Shaft work is the total work performed in open systems, which is usually transferred by shafts.Shaft work is the total work performed in open systems, which is usually transferred by shafts. Shaft work is the total work performed in open systems, which is usually transferred by shafts."
        }
    ]
};

function getArticles() {
    return articles;
}

function getArticleById(id) {
    return articles.articles.find(article => article.id === id)
}

export { getArticles, getArticleById };