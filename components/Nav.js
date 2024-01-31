'use client'
import Image from "next/image";
import Link from "next/link";
import supabase from "@/utils/supabase";

import { signOut, useSession } from "next-auth/react";

export default function Nav() {

    const { status } = useSession();
    return (
        <>
            {/* {status === "authenticated" ? */}
            <div className="navbar bg-[#0000009d] p-3 sticky top-0 z-40">
                <div className="flex-1">
                    <Link className="text-3xl font-bold font-heading" href='/browse'><Image src='/images/Netflix_Logo.png' alt="logo" width={95} height={95} /></Link>
                    <ul className="flex ml-4">
                        <li className="mx-2"><Link className="text-white hover:text-gray-200" href="/browse">Home</Link></li>
                        <li className="mx-2"><Link className="text-white hover:text-gray-200" href="/browse/movies">Movies</Link></li>
                        <li className="mx-2"><Link className="text-white hover:text-gray-200" href="/browse/tvShows">Tv Shows</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-sm">
                            <Image alt="Tailwind CSS Navbar component" src={supabase.storage.from('NetflixImages').getPublicUrl('userLogo').data.publicUrl} height={20} width={20} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[-1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a >Settings</a></li>
                        <li><a onClick={() => signOut()}>Logout</a></li>
                    </ul>
                </div>
            </div>
            {/* : */}
            {/* <div className="navbar bg-[#0000009d] p-3 sticky top-0">
                    <div className="flex-1">
                        <Link className="text-3xl font-bold font-heading" href='/browse'><Image src='/images/Netflix_Logo.png' alt="logo" width={95} height={95} /></Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <ul className="text-white">
                            <li className="text-end">
                                <Link href='/login' className='text-sm rounded-md p-3 ms-3 w-40 bg-[#E50914]'>
                                    Sign in
                                </Link>
                            </li>
                        </ul >
                    </div>
                </div>
            } */}
        </>
    )
}