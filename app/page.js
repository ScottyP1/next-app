'use client'
import Link from 'next/link';

import LandingPage from '../components/LandingPage';
import { IoIosArrowForward } from "react-icons/io";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Home() {
  const { status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <header className='p-4 bg-header h-[30em] lg:h-[32em] 2xl:h-[40em] bg-cover w-screen'>
          <div className="text-center text-white mt-32">
            <h1 className='text-[2em] lg:text-[4em]'>Unlimited movies, TV shows, and more</h1>
            <p className='text-lg md:text-xl '>Watch anywhere. Cancel anytime.</p>
          </div>
          <div className="text-white text-center pt-4 mx-8 content-center">
            <Link href='/signup' className="text-[18px] rounded-md p-3 ms-3 w-40 bg-[#E50914]">Get Started<IoIosArrowForward className='inline ms-3 text-2xl' /></Link>
          </div>
        </header>
        <main>
          <LandingPage />
        </main>
      </>
    )
  }
  else if (status === "unauthenticated") (
    redirect('/login')
  )
}

