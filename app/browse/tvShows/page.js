import { cookies } from 'next/headers';
import Image from 'next/image';

import ItemSections from "@/components/browsePage/ItemSections";
import supabase from "@/utils/supabase";


export default function TvShows() {
    const cookieStore = cookies()
    return (
        <div className="text-white w-screen ">
            <div className='bg-[#181818]'>
                <header>
                    <video autoPlay muted playsInline loop className="object-cover absolute w-[800px] h-[300px] md:h-[800px] md:w-[2000px]">
                        <source src={supabase.storage.from('NetflixImages').getPublicUrl('rickandmorty.mp4').data.publicUrl} />
                    </video>
                </header>
                <div className='relative top-[100px] bg-transparent'>
                    <Image src={supabase.storage.from('NetflixImages').getPublicUrl('rickandmorty-icon.png').data.publicUrl} alt='' width={250} height={350} />
                    <div className='ml-3'>
                        <p >Rated: R</p>
                        <p>Watch Now</p>
                    </div>
                </div>
                <main className="p-2 relative top-[90px] md:top-[650px] ">
                    <ItemSections caption={'Popular on Netflix'} />
                    <ItemSections caption={'Suspenseful Movies'} />
                    <ItemSections caption={'Comedy Movies'} />
                    <ItemSections caption={'Released in the Past Year'} />
                    <ItemSections caption={'Horror Movies'} />
                </main>
            </div>
        </div>
    )
}

