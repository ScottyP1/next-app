import ItemSections from "@/components/browsePage/ItemSections"

export default function Movies() {
    return (
        <div className="text-white w-screen ">
            <div className="bg-[#181818] p-3">
                <header>
                    <h1 className="text-[40px]">Movies</h1>
                    <p>
                        Movies move us like nothing else can, Whether theyre scary,
                        funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience
                    </p>
                </header>
                <main className=" mt-6">
                    <ItemSections caption={'Popular on Netflix'} />
                    <ItemSections caption={'Suspenseful Movies'} />
                    <ItemSections caption={'Comedy Movies'} />
                    <ItemSections caption={'Released in the Past Year'} />
                    <ItemSections caption={'Horror Movies'} />
                </main>
            </div>
        </div>
    )
}
