// lib/movies.js
const db = require('./db');

exports.getMovie = async (slug) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM Data WHERE slug = ?', [slug], (err, row) => {
            if (err) {
                console.error("Couldn't fetch movie", err);
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};
