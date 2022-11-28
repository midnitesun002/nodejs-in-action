require('dotenv').config();
const pg = require('pg');
const db = new pg.Client({ database: 'articles' });


db.connect((err, client) => {
    if (err) throw err;
    console.log('Connected to database', db.database);
    db.query(`CREATE TABLE IF NOT EXISTS snippets (id SERIAL, PRIMARY KEY(id), body text);`, (err, result) => {
        if (err) throw err;
        console.log('Created table "snippets"');

        const body = 'hello world';
        db.query(`INSERT INTO snippets (body) VALUES ('${body}') RETURNING id;`, (err, result) => {
            if (err) throw err;
            const id = result.rows[0].id;
            console.log('Inserted row with id %s', id);

            const new_id = 1;
            const new_body = 'greetings, world';
            db.query(`UPDATE snippets SET body = '${new_body}' WHERE id=${new_id};`, (err, result) => {
                if (err) throw err;
                console.log('Updated %s rows', result.rowCount);

                db.query(`SELECT * FROM snippets ORDER BY id;`, (err, result) => {
                    if (err) throw err;
                    console.log('results:', result.rows);
                    db.end();
                });
            });
        });
    });
});