import React from 'react';
import Image from 'next/image';

import { getMovie } from '@/lib/getMovie';

export default function MovieDetails({ params }) {
    const movie = getMovie(params.slug);
    if (!movie) {
        return null;
    }

    return (
        <div className="justify-self-end">
            <Image src={`/images/${movie.imageBg}`} alt="" width={433} height={500} />
            <Image src={`/images/${movie.imageIcon}`} alt="" width={348} height={150} className="ml-8" />
            <div className="p-6">
                <h1 className="text-white text-[22px] font-semibold">{movie.title}</h1>
                <section className="text-[#888888]">
                    <ul className="flex mt-3">
                        <li className="mr-2">{movie.year}</li>
                        |
                        <li className="mx-2 border px-1">{movie.rating}</li>
                        |
                        <li className="mx-2">{movie.length}</li>
                        |
                        <li className="mx-2">{movie.audience}</li>
                    </ul>
                </section>
                <section className="text-white mt-3">
                    <p>{movie.description}</p>
                    <p className="text-[14px] mt-3">
                        <span className="text-[#888888]">Starring: </span> {movie.cast}
                    </p>
                </section>
            </div>
        </div>
    );
}
