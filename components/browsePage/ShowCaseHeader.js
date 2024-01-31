import Image from "next/image";
import Link from "next/link";

import { FiPlay } from "react-icons/fi";
import supabase from "@/utils/supabase";

export default async function ShowCaseHeader({ title }) {
    const { data } = await supabase
        .from('Movies')
        .select()
        .eq('title', title)

    const movie = data[0];

    return (
        <>
            <header className="bg-FILM">
                <video poster={supabase.storage.from('NetflixImages').getPublicUrl(movie.imageBg).data.publicUrl}
                    muted playsInline autoPlay className="object-cover absolute w-[430px] h-[300px] md:h-[800px] md:w-[2000px]" >
                    <source src={supabase.storage.from('NetflixImages').getPublicUrl(movie.video).data.publicUrl} type="video/mp4" />
                </video>
            </header>
            <div className='relative top-[150px] md:top-[400px] bg-FILM w-[200px] md:w-[400px] ml-3 rounded-md p-2'>
                <Image src={supabase.storage.from('NetflixImages').getPublicUrl(movie.imageIcon).data.publicUrl} alt='' width={250} height={350}
                    className='md:w-[500px]' />
                <div>
                    <p>Rated: {movie.rating}</p>
                    <Link href={`/browse/${movie.slug}`}><p className="flex hover:text-[#E50914]">Watch Now<span className="text-[20px] mt-[.2px] md:mt-[1px]"><FiPlay /></span></p></Link>
                </div>
            </div>
        </>
    )
}