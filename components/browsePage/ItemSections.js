import Image from "next/image";
import Link from "next/link";

import SlugRoute from "./MovieItem";
import { getData } from "@/lib/users";
import MovieItem from "./MovieItem";

export default async function ItemSections({ caption }) {
    const data = await getData();

    return (
        <div className="mx-auto flex flex-col justify-center mt-6">
            <h1 className="text-white">{caption}</h1>
            <div>
                <div className="flex flex-row-4 gap-2 overflow-y-auto">
                    {data.map((item, idx) => {
                        return (
                            <div key={idx} className="shrink-0">
                                <MovieItem item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}