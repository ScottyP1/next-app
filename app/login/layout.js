
export default function LogInLayout({ children }) {

    return (
        <main className="bg-white h-screen bg-header overflow-y-hidden ">
            <div className=" flex h-full justify-center ">
                <div className="leading-9 ">
                    <div className="grid place-items-center rounded-md p-[50px]">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}