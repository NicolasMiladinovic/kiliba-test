const sqlite3 = require('sqlite3')
const dbname = 'main.db'

// Open database
let db = new sqlite3.Database(dbname, err => {
    if (err) { throw err }
    console.log('Database stated on ' + dbname);

       // CREATE DATABASE
         db.run(`CREATE TABLE users (
            email	TEXT NOT NULL UNIQUE,
            note	INTEGER NOT NULL,
            PRIMARY KEY(email)
        )`)  
 
});

module.exports = db;