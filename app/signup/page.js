import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <main className="mt-12 text-white bg-FILM rounded-md p-6">
            <Image src='/images/monitors.png' width={270} height={200} className="pb-10 lg:w-[600px] mx-auto" alt="" />
            <h1 className="text-[32px] font-bold">Finish setting up your account</h1>
            <p className="text-[18px] leading-6">Netflix is personalized for you. Create a password to start watching Netflix</p>
            <Link href='signup/register' className="w-[64px]"><button className="rounded-sm bg-RED w-full mt-3 h-12 text-white">Next</button></Link>
        </main>
    )
}