// lib/movies.js
const db = require('./db');

export default async function getMovie(slug) {
    return db.get('SELECT * FROM Data WHERE slug = ?', [slug])
}
