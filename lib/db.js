// lib/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('Data.db');

module.exports = db;
