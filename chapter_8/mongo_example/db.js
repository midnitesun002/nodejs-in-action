const { MongoClient, ObjectID } = require('mongodb');

let collection;

const uri = 'mongodb://localhost:27017/articles';

module.exports = () => {
    const db = new MongoClient(uri).db('articles2');
    collection = db.collection('articles2');
}

module.exports.Article = {
    all() {
        return collection.find().sort({ title: 1 }).toArray();
    },
    find(_id) {
        if (typeof _id !== 'object') _id = ObjectID(_id);
        return collection.findOne({ _id });
    },
    create(data) {
        return 
    }
}