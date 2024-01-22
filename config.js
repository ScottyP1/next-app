// const sqlite3 = require('sqlite3').verbose();
const sql = require('better-sqlite3')

const db = sql('Users.db');

db.prepare(`CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)`).run()

