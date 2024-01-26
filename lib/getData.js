// lib/data.js
const db = require('./db');

export default async function getData() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM Data', (err, rows) => {
            if (err) {
                console.error("Couldn't fetch all movies", err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};
