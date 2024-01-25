'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import FormSubmit from '../../../components/FormSubmit';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const router = useRouter();
    const [data, setData] = useState({ name: '', email: '', password: '' });

    const registerUser = async (e) => {
        e.preventDefault();
        console.log('User', { name: data.name, email: data.email, password: data.password });
        if (data.password === '' || data.email === '') {
            toast.error("Fill all fields!");
            return;
        }
        if (data.password.length < 6) {
            toast.error("Password must be longer than 6 characters long");
            return
        }
        try {
            const response = await axios.post('/api/register', {
                name: data.name,
                email: data.email,
                password: data.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const user = response.data;
            router.push('/login')
        } catch (error) {
            console.log('Error registering user:', error)
        }
    };

    return (
        <main className='text-white bg-FILM rounded-md p-6'>
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
            <h1 className="text-[32px] font-normal mb-4">Create a password to start your membership</h1>
            <p className="text-[18px] leading-6 mb-4">Just one more step and you&#39;re done! We hate paperwork, too.</p>
            <div>
                <form method='POST' onSubmit={registerUser}>
                    <p>
                        <label htmlFor="name" />
                        <input onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name}
                            name='name' id='name' placeholder="Name" type='text' className="border-2 border-stone-400 p-2 mb-2 w-full rounded-md bg-FILM" required />
                    </p>
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
                    <FormSubmit text={'Submit'} />
                </form>
            </div >
        </main >
    )
};
export default Register;