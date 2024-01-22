'use server';

import { Login, Register } from "./users";
import { redirect } from "next/navigation";
import sql from 'better-sqlite3';

const bcrypt = require("bcrypt");
const db = sql('Users.db');

const isInvalidText = (text) => {
    return !text || text.trim === '';
}



export async function addUser(prevState, formData) {
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    };
    if (isInvalidText(user.name) ||
        isInvalidText(user.email) ||
        !user.email.includes('@') ||
        isInvalidText(user.password)
    ) {
        return {
            message: 'Invalid input'
        }
    }
    await Register(user);
    redirect('/browse')
};

export async function LoginUser(prevState, formData) {
    const user = {
        email: formData.get('email'),
        password: formData.get('password'),
    };
    if (isInvalidText(user.email) ||
        !user.email.includes('@') ||
        isInvalidText(user.password)
    ) {
        return {
            message: 'Invalid input'
        }
    };
    const userRow = db.prepare(`SELECT * FROM Users WHERE email = ?`).get(user.email);
    if (userRow) {
        const compareHash = await bcrypt.compare(user.password, userRow.password);
        if (compareHash) {
            redirect('/browse')
        }
        else {
            return {
                message: 'Invalid Email or Password'
            }
        }
    }
    else if (!userRow) {
        redirect('/signup/register')
    }

};



