import Image from "next/image";
import { notFound, redirect } from "next/navigation";

import { movie } from "@/lib/movieData";
export default function MovieDetails({ params }) {
    const movieItem = movie(params.slug);
    console.log(movie)
    if (!movieItem) {
        notFound();
    };

    return (
        <div className="justify-self-end">
            <Image src={`/images/${movieItem.imageBg}`} alt="" width={433} height={500} />
            <Image src={`/images/${movieItem.imageIcon}`} alt="" width={348} height={150} className="ml-8" />
            <div className="p-6">
                <h1 className="text-white text-[22px] font-semibold">{movieItem.title}</h1>
                <section className="text-[#888888]">
                    <ul className="flex mt-3">
                        <li className="mr-2">{movieItem.year}</li>
                        |
                        <li className="mx-2 border px-1">{movieItem.rating}</li>
                        |
                        <li className="mx-2">{movieItem.length}</li>
                        |
                        <li className="mx-2">{movieItem.audience}</li>
                    </ul>
                </section >
                <section className="text-white mt-3">
                    <p>{movieItem.description}</p>
                    <p className="text-[14px] mt-3"><span className="text-[#888888]">Staring: </span> {movieItem.cast}</p>
                </section>
            </div>
        </div>
    )

}
