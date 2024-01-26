'use server'
import sql from 'better-sqlite3';

const db = sql('Data.db');

export async function getMovie(slug) {
    return db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
};
export async function GetData() {
    return db.prepare(`SELECT * FROM Data`).all();
}


