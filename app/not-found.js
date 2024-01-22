import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-notFound h-screen bg-cover text-white">
            <div className="bg-FILM rounded-md w-[500px] ml-[500px]">
                <h1 className="text-[2em] lg:text-[4em]">Lost your way?</h1>
                <p className="text-lg md:text-xl ">Sorry, we cant find that page. Youll find lots to explore on the home page.</p>
                <Link href='/'>Netflix Home</Link>
            </div>
        </main>
    )
}