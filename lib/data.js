'use server'
import sql from 'better-sqlite3';

const db = sql('Data.db');

export const getMovie = async (slug) => {
    return await db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
};
export const getData = async () => {
    return await db.prepare(`SELECT * FROM Data`).all();
}


