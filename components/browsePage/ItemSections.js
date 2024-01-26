import Image from "next/image";

import { GetData } from '../../lib/users';
import Link from "next/link";

export default async function ItemSections({ caption }) {
    const data = GetData();
    return (
        <div className="mx-auto flex flex-col justify-center mt-6">
            <h1 className="text-white">{caption}</h1>
            <div>
                <div className="flex flex-row-4 gap-2 overflow-y-auto">
                    {data.map((item, idx) => {
                        return (
                            <div key={idx} className="shrink-0">
                                <Link href={`/browse/${item.slug}`}>
                                    <Image src={`/images/${item.imageCard}`} alt="" width={170} height={100} className="md:w-[300px]" />
                                    <p className="text-center text-[12px] md:text-[20px]">{item.title}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}