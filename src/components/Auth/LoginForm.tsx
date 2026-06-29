// // "use client";

// // import React, { useState } from "react";
// // import AuthInput from "./AuthInput";

// // const LoginForm = () => {
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const handleSubmit = (e: React.FormEvent) => {
// //         e.preventDefault();
// //         console.log({ email, password });
// //     };

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             <AuthInput
// //                 id="email"
// //                 label="Email"
// //                 type="email"
// //                 placeholder="Enter email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <AuthInput
// //                 id="password"
// //                 label="Password"
// //                 type="password"
// //                 placeholder="Enter password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <button
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
// //             >
// //                 Login
// //             </button>
// //         </form>
// //     );
// // };

// // export default LoginForm;






// "use client";

// import { useState } from "react";
// import {
//     Mail,
//     Lock,
//     Eye,
//     EyeOff,
//     Chrome,
// } from "lucide-react";

// export default function LoginPage() {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <main className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
//             <div className="w-full max-w-sm">
//                 {/* Card */}
//                 <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-8 py-8">
//                     {/* Heading */}
//                     <div className="text-center">
//                         <h1 className="text-3xl font-bold text-gray-900">
//                             Welcome Back
//                         </h1>

//                         <p className="mt-2 text-sm text-gray-500">
//                             Login to continue your ProjectVerse journey
//                         </p>
//                     </div>

//                     {/* Form */}
//                     <form className="mt-8 space-y-5">
//                         {/* Email */}
//                         <div>
//                             <label className="text-sm font-medium text-gray-700 block mb-2">
//                                 Email Address
//                             </label>

//                             <div className="relative">
//                                 <Mail
//                                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                                     size={18}
//                                 />

//                                 <input
//                                     type="email"
//                                     placeholder="name@company.com"
//                                     className="w-full rounded-md border border-green-300 bg-[#f8fff8] py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
//                                 />
//                             </div>
//                         </div>

//                         {/* Password */}
//                         <div>
//                             <label className="text-sm font-medium text-gray-700 block mb-2">
//                                 Password
//                             </label>

//                             <div className="relative">
//                                 <Lock
//                                     className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                                     size={18}
//                                 />

//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     placeholder="••••••••"
//                                     className="w-full rounded-md border border-green-300 bg-[#f8fff8] py-2.5 pl-10 pr-11 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
//                                 />

//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//                                 >
//                                     {showPassword ? (
//                                         <EyeOff size={18} />
//                                     ) : (
//                                         <Eye size={18} />
//                                     )}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Remember */}
//                         <div className="flex items-center justify-between text-sm">
//                             <label className="flex items-center gap-2 text-gray-600">
//                                 <input
//                                     type="checkbox"
//                                     className="h-4 w-4 rounded border-gray-300 accent-green-500"
//                                 />
//                                 Remember me
//                             </label>

//                             <button
//                                 type="button"
//                                 className="text-green-600 hover:text-green-700 font-medium"
//                             >
//                                 Forgot password?
//                             </button>
//                         </div>

//                         {/* Login */}
//                         <button
//                             className="w-full rounded-md bg-[#22c55e] py-3 text-white font-semibold transition hover:bg-[#16a34a]"
//                         >
//                             Login
//                         </button>

//                         {/* Divider */}
//                         <div className="flex items-center">
//                             <div className="h-px flex-1 bg-gray-200" />

//                             <span className="mx-4 text-xs text-gray-400">or</span>

//                             <div className="h-px flex-1 bg-gray-200" />
//                         </div>

//                         {/* Google */}
//                         <button
//                             type="button"
//                             className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-900"
//                         >
//                             <Chrome size={18} />
//                             Continue with Google
//                         </button>
//                     </form>
//                 </div>

//                 {/* Footer */}
//                 <p className="mt-6 text-center text-sm text-gray-500">
//                     Don't have an account?{" "}
//                     <a
//                         href="/register"
//                         className="font-semibold text-green-600 hover:text-green-700"
//                     >
//                         Create Account
//                     </a>
//                 </p>

//                 <p className="mt-10 text-center text-xs text-gray-400">
//                     Powered by <span className="font-medium">Deslyfer</span>
//                 </p>
//             </div>
//         </main>
//     );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthInput from "./AuthInput";
import { inter, geist } from "@/lib/fonts"

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full flex flex-col justify-center px-5 md:px-8 ">
            
            <div className="absolute top-7 md:hidden flex items-center justify-start gap-2 mb-4">
                                    <img src="/Auth/logo.png" alt="logo" />
                                    <div className={`${geist.className} text-2xl font-bold text-[#161D16]`}>
                                        ProjectVerse
                                    </div>
                                </div>
            <div className="w-full flex flex-col justify-center items-center  lg:px-8">
                <div className="w-full flex flex-col items-center gap-4 md:gap-8">
                    
                    <div>
                        <h2 className="text-3xl font-bold text-center text-[#161D16]">
                            Welcome Back
                        </h2>

                        <p className="text-sm text-[#565E74] text-center mt-2">
                            Login to continue your ProjectVerse journey
                        </p>
                    </div>
                    <div className="w-full md:max-w-105 border rounded-xl shadow-sm p-5 md:p-8">
                        <div className="space-y-2 md:space-y-5">

                            <AuthInput
                                label="Email Address" 
                                type="email"
                                placeholder="name@company.com"
                                leftIcon="/Auth/mail.png"
                            />

                            <AuthInput
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                leftIcon="/Auth/lock.png"
                                rightIcon={
                                    <Image
                                        src={
                                            showPassword
                                                ? "/Auth/eye-off.png"
                                                : "/Auth/eye.png"
                                        }
                                        alt=""
                                        width={18}
                                        height={18}
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                }
                            />

                            <div className="flex justify-between items-center text-sm">
                                <label className={`flex items-center gap-2 text-[#565E74] ${inter.className}`}>
                                    <input type="checkbox" />
                                    Remember me
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className={`text-[#006E2F] ${geist.className}`}
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <button className="w-full h-11 rounded-md text-sm bg-[#22C55E] text-[#161D16] font-semibold hover:bg-[#16a34a]">
                                Login
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-gray-200"></div>
                                <span className="text-xs text-gray-400">or</span>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>

                            <button className="w-full h-11 rounded-md bg-[#1D1D1D] text-white flex justify-center items-center gap-3">
                                <Image
                                    src="/Auth/G_white.png"
                                    alt=""
                                    width={18}
                                    height={18}
                                />
                                Continue with Google
                            </button>



                        </div>

                    </div>
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-[#22C55E] font-semibold"
                        >
                            Create Account
                        </Link>
                    </p>


                </div>

            </div>
            <div className="flex items-end justify-end absolute bottom-2 right-8">
                <p className="text-center text-xs text-gray-400 ">
                    Powered by <span className="font-semibold">Deslyfer</span>
                </p>
            </div>
        </div>
    );
}