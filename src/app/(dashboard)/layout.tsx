import type { ReactNode } from "react";

import Topbar from "@/components/Navbar/Topbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

type DashboardLayoutProps = {
    children: ReactNode;
};

export default function Layout({
    children,
}: DashboardLayoutProps) {
    return (
        <section className="h-screen flex flex-col overflow-hidden bg-white">
            <header className="sticky top-0 z-10">
                <Topbar />
            </header>

            <div className="flex flex-1 overflow-hidden">
                <aside>
                <Sidebar />
                </aside>

                <main className="flex-1 overflow-y-auto px-4 py-5 pb-20 md:px-10">
                {children}
                </main>
            </div>

            <footer className="fixed bottom-0 left-0 w-full">
                <Footer />
            </footer>
        </section>
    );
}