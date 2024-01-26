// lib/data.js
const db = require('./db');

exports.getData = async () => {
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
