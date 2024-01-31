'use client'
import GoogleButton from "@/components/GoogleButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const router = useRouter()
    const [data, setData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        if (password === '' || email === '') {
            toast.error("Fill all fields!");
            return;
        }
        try {
            const res = await signIn('credentials', { email, password, redirect: false });
            if (res?.error == null) {
                router.push('/browse')
            } else {
                toast.error("Email or Password is incorrect");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <main className='text-white bg-FILM rounded-md p-6 w-[350px]'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
            <h1 className="text-[32px] font-normal mb-4 text-center">Sign in with</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="email" />
                        <input onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email}
                            name='email' id="email" placeholder="Email" type='email' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <p>
                        <label htmlFor="password" />
                        <input onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password}
                            name='password' id="password" placeholder="Add a password" type='password' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
                    <button type="submit" className="rounded-sm text-center bg-RED w-full">Login</button>
                </form>
                <div className="pt-3">
                    <p className="text-slate-400">New to Netflix? <span className="text-white hover:text-sky-200"><Link href={'/signup/register'}>Sign up now.</Link></span></p>
                </div>
            </div >
        </main >
    )
};
export default LoginPage;