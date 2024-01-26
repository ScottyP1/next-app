import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import getData from '@/lib/getData';

export default function ItemSections({ caption }) {
    const data = getData();

    return (
        <div className="mx-auto flex flex-col justify-center mt-6">
            <h1 className="text-white">{caption}</h1>
            <div>
                <div className="flex flex-row-4 gap-2 overflow-y-auto">
                    {data.map((item, idx) => (
                        <div key={idx} className="shrink-0">
                            <Link href={`/browse/${item.slug}`}>
                                <Image src={`/images/${item.imageCard}`} alt="" width={170} height={100} className="md:w-[300px]" />
                                <p className="text-center text-[12px] md:text-[20px]">{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
