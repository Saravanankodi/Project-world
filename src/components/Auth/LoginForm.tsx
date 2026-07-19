"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthInput from "./AuthInput";
import { inter, geist } from "@/lib/fonts"
import { useRouter } from "next/navigation";
import { login, loginWithGoogle } from "@/services/auth";

export default function LoginForm() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleLogin = async ()=>{
        setLoading(true);
        setError('');
        try {
            await login(email,password);
            router.replace('/');
        } catch (err: any){
            setError(err.message);
        } finally{
            setLoading(false);
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            await loginWithGoogle();

            router.replace("/");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
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
                                onChange={(e)=>(setEmail(e.target.value))}
                                value={email}
                                leftIcon="/Auth/mail.png"
                            />

                            <AuthInput
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                onChange={(e)=>(setPassword(e.target.value))}
                                value={password}
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
                            {error && (
                                <p className="text-red-500 text-sm">
                                    {error}
                                </p>
                            )}
                            <button onClick={handleLogin} className="w-full h-11 rounded-md text-sm bg-[#22C55E] text-[#161D16] font-semibold hover:bg-[#16a34a]">
                                Login
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-px bg-gray-200"></div>
                                <span className="text-xs text-gray-400">or</span>
                                <div className="flex-1 h-px bg-gray-200"></div>
                            </div>

                            <button onClick={handleGoogleLogin} className="w-full h-11 rounded-md bg-[#1D1D1D] text-white flex justify-center items-center gap-3">
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