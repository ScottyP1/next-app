import Image from 'next/image';
import Link from 'next/link';

import supabase from "@/utils/supabase";

export default function Row({ genre, data }) {
    const movies = data.filter(function (item) {
        return item.audience === genre;
    });
    return (
        <div className="mx-auto flex flex-col justify-center mt-6 ">
            <h1 className="text-white text-[18px] md:text-[26px]">{genre}</h1>
            <div>
                <div className="flex flex-row-4 gap-2 overflow-y-auto">
                    {movies.map((item, idx) => (
                        <div key={idx} className="shrink-0 last:pr-3">
                            <Link href={`/browse/${item.slug}`}>
                                <Image src={supabase.storage.from('NetflixImages').getPublicUrl(item.imageCard).data.publicUrl}
                                    alt="" width={170} height={100} className="md:w-[300px] h-[100px] md:h-[170px] rounded-md" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
