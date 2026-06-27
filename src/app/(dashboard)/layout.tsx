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
        <div className="flex min-h-screen">
            <div className="flex flex-1 flex-col">
                <Topbar />

                <div className="flex flex-1 overflow-hidden">
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>

                    <main className="flex-1">
                        {children}
                    </main>
                </div>

                <Footer />
            </div>
        </div>
    );
}