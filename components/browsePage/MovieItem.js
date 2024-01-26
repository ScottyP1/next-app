'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MovieItem({ item }) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/browse/${item.slug}`)
    }
    return (
        <>
            <Image src={`/images/${item.imageCard}`} alt="" width={170} height={100} className="md:w-[300px]" onClick={handleClick} />
            <p className="text-center text-[12px] md:text-[20px]">{item.title}</p>
        </>

    )
}