export async function getData() {
    try {
        return await db.prepare('SELECT * FROM Data').all();
    } catch (error) {
        console.error("Couldn't fetch all movies", error);
        throw error; // Rethrow the error to propagate it
    }
}
