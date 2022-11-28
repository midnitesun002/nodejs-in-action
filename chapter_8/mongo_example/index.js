const { MongoClient } = require('mongodb');

const article = {
    title: 'I like cake',
    content: 'It is quite good'
};

// MongoClient.connect('mongodb://localhost:27017/articles')
//     .then((db) => {
//         console.log('Client ready');
//         db.collection('articles')
//             .insertOne(article)
//             .then(result => {
//                 console.log(result.insertId);
//                 console.log(article._id);
//                 db.close();
//             });
//     }, console.error);

const uri = 'mongodb://localhost:27017/articles';
const client = new MongoClient(uri);

const main = async () => {
    try {
        const database = client.db('test_db');
        const articles = database.collection('articles');

        const result = await articles.insertOne(article);
        console.log(result.insertedId);
        console.log(article._id);

        // const results = await articles.find({ title: 'I like cake' }).toArray();
        // console.log(results);
    } finally {
        await client.close();
    }
}

main();