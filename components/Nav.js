'use client'
import Image from "next/image";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

export default function Nav() {
    const { status } = useSession();
    return (
        <>
            <nav className={`flex p-4 justify-between sticky top-0 bg-[#0000009d]`}>
                <div className="w-30">
                    <Link href='/'><Image src='/images/Netflix_Logo.png' alt="logo" width={95} height={95} /></Link>
                </div>
                {status === "unauthenticated" ?
                    <ul className="text-white">
                        <li className="text-start px-6">
                            <Link href='/login' className='text-sm rounded-md p-3 ms-3 w-40 bg-[#E50914]'>
                                Sign in
                            </Link>
                        </li>
                    </ul >
                    :
                    <ul className="text-white">
                        <li className="text-start px-6">
                            <span onClick={() => signOut()} className='text-sm rounded-md p-3 ms-3 w-40 bg-[#E50914] cursor-pointer'>
                                Logout
                            </span>
                        </li>
                    </ul >
                }

            </nav>
        </>
    )
}