import AuthLayout from "@/components/Auth/AuthLayout";
import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="overflow-hidden">
        <AuthLayout
            title="Discover. Build.
Share. Innovate."
            subtitle="Explore projects, connect with creators, and build
your future in the world's most innovative
workspace."
            image="/Auth/login1.png"
        >
            <LoginForm />


        </AuthLayout>
        </div>
    );
}

