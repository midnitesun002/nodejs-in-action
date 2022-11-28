// const User = require('./models/user');
// const user = new User({ name: 'Example', pass: 'test' });

// user.save((err) => {
//     if (err) console.error(err);
//     console.log('user id %d', user.id);
// });

// User.getByName('Example', (err, user) => {
//     console.log(user);
// });


const redis = require('redis');
const db = redis.createClient({ legacyMode: true });
db.connect();

let vals = [['name', 'john'], ['pass', 'salt']]
vals = { name: 'john', pass: 'salt' }
db.hSet('hello', Object.entries(vals).flat(), (err) => {
    if (err) console.error(err);
    db.hGetAll('hello', (err, value) => {
        if (err) console.error(err);
        console.log('value: ', value);
    });
});