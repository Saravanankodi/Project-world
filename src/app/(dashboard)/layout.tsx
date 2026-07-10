"use client";
import { useEffect, type ReactNode } from "react";

import Topbar from "@/components/Navbar/Topbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import MobileBottomNav from "@/components/Navbar/MobileBottomNav";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
type DashboardLayoutProps = {
    children: ReactNode;
};

export default function Layout({
    children,
}: DashboardLayoutProps) {
    const { user, loading } = useAuth();
    const router = useRouter();


    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);


    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }


    if (!user) {
        return null;
    }
    return (
        <section className="h-screen flex flex-col overflow-hidden text-black  bg-white">
            <header className="sticky top-0 z-10">
                <Topbar />
            </header>

            <div className="h-full w-full flex flex-1 overflow-hidden">
                <aside className="hidden lg:block border-r border-[#BCCBB94D] ">
                    <Sidebar />
                </aside>

                <main className="flex-1 overflow-y-auto  md:pb-10">
                    {children}
                </main>
            </div>
            <MobileBottomNav/>
            <footer className=" md:fixed bottom-0 left-0 w-full">
                <Footer />
            </footer>
        </section>
    );
}