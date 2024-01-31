import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default function Promo() {
    return (
        <div className="mt-3">
            <div className="text-white bg-promo p-6 md:mr-12 md:ml-12 md:mt-0 rounded h-40">
                <div className=" m-6 md:ml-52 md:mt-0">
                    <h1 className="text-[20px]">The Netflix you love for $6.99.</h1>
                    <p className="text-[16px] mb-3">Get the Standard with ads plan.</p>
                    <Link href='/signup' className="text-[16px]">Learn More <IoIosArrowForward className='inline ms-2 text-2xl' /></Link>
                </div>

            </div>
        </div>

    )

} 