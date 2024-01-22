'use client'
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Nav() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <>
            <nav className={`flex p-4 justify-between sticky top-0 bg-[#0000009d]`}>
                <div className="w-30">
                    <Link href='/'><Image src='/images/Netflix_Logo.png' alt="logo" width={95} height={95} /></Link>
                </div>
                <ul className="text-white">
                    <li className="text-start px-6">
                        <Link href='/login' className='text-sm rounded-md p-3 ms-3 w-40 bg-[#E50914]'>
                            Sign in
                        </Link>
                    </li>
                </ul >
            </nav>
        </>
    )
}