const text = require('body-parser/lib/types/text');
const md5  = require('md5');
const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.sqlite"
const tableQuery = `CREATE TABLE USER (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name text,
    email text UNIQUE,
    password text,
    CONSTRAINT email_unique UNIQUE (email)

)`
const insertQuery= `INSERT INTO user (name, email, password) VALUES (?,?,?)`

const db = new sqlite3.Database('./database/OlympusDB.sqlite3', err => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log(`Connected do the SQLite database` )
        db.run(tableQuery, err => {
        

            if (err) {
                console.log("Table already created")
            } else{
                db.run(insertQuery, ["admin", "admin@example.com", md5("admin123456")])
                db.run(insertQuery, ["user", "user@example.com", md5("user123456")])
            }
        } )
    }
}
);

/* db.serialize(() => {
    db.run("CREATE TABLE users (email varchar(255) , password varchar(255) )" );

    const stmt = db.prepare("INSERT INTO users VALUES (?)");
    for (let i = 0; i < 1; i++) {
        stmt.run("email " + "iagoracer1@gmail");
    }
    stmt.finalize();

    db.each("SELECT email FROM users", (err, row) => {
        console.log(row.email);
    });
}); */

module.exports = db
