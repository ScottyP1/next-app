import Row from "./Row";
import supabase from "@/utils/supabase";

import Link from "next/link";
import Image from "next/image";

export default async function RowSection({ type }) {
    const { data } = await supabase
        .from('Movies')
        .select()
        .eq('category', type)

    return (
        <div className="relative top-[30px] md:top-[100px] w-screen">
            <div className="mx-auto flex flex-col justify-center mt-6 ">
                <h1 className="text-white text-[18px] md:text-[26px]">Popular on Netflix</h1>
                <div>
                    <div className="flex flex-row-4 gap-2 overflow-y-auto ">
                        {data.map((item, idx) => (
                            <div key={idx} className="shrink-0 ">
                                <Link href={`/browse/${item.slug}`}>
                                    <Image src={supabase.storage.from('NetflixImages').getPublicUrl(item.imageCard).data.publicUrl}
                                        alt="" width={170} height={100} className="md:w-[300px] h-[100px] md:h-[170px] rounded-md" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Row genre={'Action'} data={data} />
            <Row genre={'Drama'} data={data} />
            <Row genre={'Kids'} data={data} />
        </div>
    )
}