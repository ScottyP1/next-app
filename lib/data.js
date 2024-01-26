'use server'
import sql from 'better-sqlite3';

const db = sql('Data.db');

export const getMovie = async (slug) => {
    return db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
};
export const GetData = async () => {
    return db.prepare(`SELECT * FROM Data`).all();
}


