// getMovie.js
import db from './db';

export async function getMovie(slug) {
    try {
        return await db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug);
    } catch (error) {
        console.error("Couldn't fetch movie", error);
        throw error; // Rethrow the error to propagate it
    }
}
