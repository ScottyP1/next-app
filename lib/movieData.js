'use server'
import sql from 'better-sqlite3';

const db = sql('Data.db');

export const allMovies = async () => db.prepare(`SELECT * FROM Data`).all();
export const movie = async (slug) => db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
