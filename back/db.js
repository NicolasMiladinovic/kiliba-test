const sqlite3 = require('sqlite3')
const dbname = 'main.db'

// Open database
let db = new sqlite3.Database(dbname, err => {
    if (err) { throw err }
    console.log('Database stated on ' + dbname);

     db.serialize(() => {
       // CREATE DATABASE
       /*    db.run(`CREATE TABLE users (
            email	TEXT NOT NULL UNIQUE,
            note	INTEGER NOT NULL,
            PRIMARY KEY(email)
        )`)  */
        
        // Select data
       /*  db.each(`SELECT * FROM users`, (err, data) => {
            if (err) { throw err }
            console.log(data);
        }) */

       /*  db.each('SELECT users.email FROM users WHERE note = 20', (err, data) => {
            if (err) { throw err }
            console.log(data);
        })
 */
    })
});

module.exports = db;