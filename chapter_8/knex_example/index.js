const db = require('./db');

db().then(() => {
    db.Article.create({
        title: 'My Article',
        content: 'article content'
    }).then(() => {
        db.Article.all().then(articles => {
            console.log(articles);
            process.exit();
        });
    });
}).catch((err) => { throw err; });