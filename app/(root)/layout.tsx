import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";
import { Toaster } from "@/components/ui/sonner"

export const dynamic = "force-dynamic";

const Layout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    if (!currentUser) return redirect("/sign-in");

    return (
        <main className="flex h-screen">
            <Sidebar {...currentUser} />
            <section className="flex flex-col flex-1 h-full">
                <MobileNavigation ownerId={currentUser.$id} {...currentUser} /> 
                <Header ownerId={currentUser.$id} {...currentUser} />
                <div className="main-content">{children}</div>
            </section>

            <Toaster />
        </main>
    );
};

export default Layout;
