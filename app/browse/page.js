'use client'
import LayoutPage from "@/components/browsePage/Layoutpage"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Browse() {
    const { status } = useSession();
    if (status === "authenticated") {
        return (
            <LayoutPage title={'Grand Turismo'} type={'movie'} />
        )
    }
    else if (status === "unauthenticated") {
        redirect('/login')
    }
}
