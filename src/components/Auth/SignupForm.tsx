// "use client";

// import React, { useState } from "react";
// import AuthInput from "./AuthInput";

// const SignupForm = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log({ name, email, password });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <AuthInput
//                 id="name"
//                 label="Full Name"
//                 type="text"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />

//             <AuthInput
//                 id="email"
//                 label="Email"
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />

//             <AuthInput
//                 id="password"
//                 label="Password"
//                 type="password"
//                 placeholder="Create password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//             >
//                 Sign Up
//             </button>
//         </form>
//     );
// };

// export default SignupForm;




"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthInput from "./AuthInput";
import { geist, inter } from "@/lib/fonts";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col justify-center gap-3 w-full  items-center p-4">
        <div className="w-full ">
            <div className=" md:hidden flex items-start justify-start gap-2 mb-4">
                <img src="/Auth/logo.png" alt="logo" />
                <div className={`${geist.className} text-2xl font-bold text-[#161D16]`}>
                    ProjectVerse
                </div>
            </div>
            <div className="w-full flex flex-col justify-end items-center px-3 md:px-8 ">
            <div className="max-w-105 min-w-80 border rounded-xl shadow-sm p-3 md:p-5">
                    <h2 className={`${geist.className} text-2xl lg:text-3xl font-semibold text-[#161D16]`}>
                    Create Your Account
                </h2>

                    <p className={`${inter.className} text-[#565E74] text-sm  mt-2`}>
                    Join ProjectVerse and explore thousands of projects.
                </p>

                <div className=" md:mt-8 space-y-1.5 lg:space-y-5">

                    <AuthInput
                        label="Email address"
                        type="email"
                        placeholder="name@company.com"
                        
                    />

                    <AuthInput
                        label="Phone number"
                        placeholder="+1 (555) 000-0000"
                        
                    />

                    <div className="grid grid-cols-2 gap-4">

                        <AuthInput
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                           
                        />

                        <AuthInput
                            label="Confirm password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                           
                        />

                    </div>

                        <button className="w-full h-11 rounded-md bg-[#22C55E] text-white font-semibold">
                        Create Account
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className={` ${geist.className} text-sm text-gray-400`}>OR</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                        <button className={`w-full h-11 border rounded-md flex justify-center items-center  font-semibold text-sm text-[#161D16] gap-3 ${inter.className}`}>
                        <Image
                            src="/Auth/G_color.png"
                            alt=""
                            width={18}
                            height={18}
                        />
                        Continue with Google
                    </button>

                        <p className={`text-center text-sm text-[#565E74] ${inter.className} `}>
                            <span>Already have an account?</span>{" "}
                        <Link
                            href="/login"
                            className="text-[#22C55E] font-semibold"
                        >
                            Login
                        </Link>
                    </p>

                    <div className="rounded-md bg-[#F3FAF2] p-1 md:p-3 flex gap-2 text-xs text-gray-600">
                        <span className="text-[12px] text-gray-600">
                    ⓘ 
                    </span>
                            <span className={`${geist.className}`}>Complete your profile when you purchase or upload a project.
                        </span>
                    </div>

                   

                </div>
            </div>
            
        </div>
       
        </div>
         <div className="flex items-center justify-end px-5">
            <p className="text-center text-xs text-gray-400">
                Powered by <span className="font-semibold">Deslyfer</span>
            </p>
        </div>
        </div>
    );
}