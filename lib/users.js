
import sql from 'better-sqlite3';

const db = sql('Data.db');

export function getMovie(slug) {
    return db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
};


export function getData() {
    return db.prepare(`SELECT * FROM Data`).all();
}


