import RowSection from "./RowSection";
import ShowCaseHeader from './ShowCaseHeader';

export default async function LayoutPage({ type, title }) {
    return (
        <div className="text-white w-screen ">
            <div>
                <ShowCaseHeader title={title} />
                <main className="p-2 relative top-[90px] md:top-[450px]">
                    <RowSection type={type} />
                </main>
            </div >
        </div >
    )
}