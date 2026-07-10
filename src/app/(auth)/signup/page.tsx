import AuthLayout from "@/components/Auth/AuthLayout";
import SignupForm from "@/components/Auth/SignupForm";
import Link from "next/link";

export default function SignupPage() {
    return (
        <AuthLayout
            title="Start Your
Project Journey"
            subtitle="Discover innovative projects, collaborate with
creators, and showcase your own work."
image="/Auth/signup.png"
        >
            <SignupForm />

          
        </AuthLayout>
    );
}


// <p className="text-sm text-center mt-4 text-gray-600">
//     Already have an account?{" "}
//     <Link href="/login" className="text-green-600 font-medium">
//         Login
//     </Link>
// </p>