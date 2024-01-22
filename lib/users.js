import { redirect } from 'next/navigation';
import sql from 'better-sqlite3';

const bcrypt = require("bcrypt");
const db = sql('Users.db');

export function getMovie(slug) {
    return db.prepare('SELECT * FROM Data WHERE slug = ?').get(slug)
};

const doesEmailExist = (userEmail) => {
    const row = db.prepare(`SELECT * FROM Users WHERE email = ?`).get(userEmail);
    return !!row;
};

export async function Register(user) {
    const hash = await bcrypt.hash(user.password, 12);
    user.password = hash;
    const emailExists = doesEmailExist(user.email);
    if (emailExists) {
        redirect('/login');
    } else {
        db.prepare(`
    INSERT or IGNORE INTO Users
        (name, email, password)
    VALUES(
        @name,
        @email,
        @password
)
`).run(user)
    };
}


export default function GetData() {
    return db.prepare(`SELECT * FROM Data`).all();
}


