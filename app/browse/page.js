import ItemSections from '../../components/browsePage/ItemSections';
import supabase from "@/utils/supabase";
import { cookies } from 'next/headers';
export default function Browse() {
    const cookieStore = cookies()

    return (
        <div className="text-white">
            <header>
                <video autoPlay muted playsInline>
                    <source src={supabase.storage.from('NetflixImages').getPublicUrl('grandT.').data.publicUrl} />
                </video>
            </header>
            <div className="bg-[#181818] p-2">
                <main className=" mt-6">
                    <ItemSections caption={'Popular on Netflix'} />
                    <ItemSections caption={'Suspenseful Movies'} />
                    <ItemSections caption={'Comedy Movies'} />
                    <ItemSections caption={'Released in the Past Year'} />
                    <ItemSections caption={'Horror Movies'} />
                </main>
            </div>
        </div >
    )
}
