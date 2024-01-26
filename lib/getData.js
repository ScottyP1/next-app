// lib/data.js
const db = require('./db');

export default async function getData() {
    return db.all('SELECT * FROM Data')
};
