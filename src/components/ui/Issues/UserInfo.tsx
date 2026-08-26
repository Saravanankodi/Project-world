import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { UserProfile } from "@/types/types";

interface UserInfoProps {
    user: UserProfile | null;
}

const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <>
            <section className="w-full h-auto border border-[#BCCBB94D] rounded-xl shadow-lg p-3 sm:p-6">

                <header className="w-full flex items-baseline gap-2 p-2 border-b border-[#BCCBB9]">

                    <User className="w-6 h-6 text-[#006E2F]" />

                    <h2 className="text-2xl font-bold text-[#161D16]">
                        User Information
                    </h2>

                </header>

                <main className="w-full h-auto flex items-center justify-center gap-1 sm:gap-5">

                    <aside className="relative sm:w-20 h-10 w-10 sm:h-20">

                        <Image
                            src={
                                user?.profileImg ||
                                "/Topbar/ProfileImage.jpg"
                            }
                            alt="Profile"
                            fill
                            className="object-cover rounded-xl"
                        />

                    </aside>


                    <div className="flex-1 grid grid-cols-[1.5fr_2fr] gap-y-1 sm:gap-3 p-3">

                        <div className="w-fit">

                            <p className="text-[10px] sm:text-base text-[#565E74]">
                                Full Name
                            </p>

                            <h2 className="text-[10px] sm:text-base font-semibold text-[#161D16]">
                                {user?.name || "-"}
                            </h2>

                        </div>


                        <div className="w-fit">

                            <p className="text-[10px] sm:text-base text-[#565E74]">
                                Email Address
                            </p>

                            <h2 className="text-[10px] sm:text-base font-semibold text-[#161D16]">
                                {user?.email || "-"}
                            </h2>

                        </div>


                        <div className="w-fit">

                            <p className="text-[10px] sm:text-base text-[#565E74]">
                                Phone Number
                            </p>

                            <h2 className="text-[10px] sm:text-base font-semibold text-[#161D16]">
                                {user?.phone || "-"}
                            </h2>

                        </div>


                        <div className="w-fit">

                            <p className="text-[10px] sm:text-base text-[#565E74]">
                                Account Type
                            </p>

                            <h2 className="text-[10px] sm:text-base font-semibold text-[#161D16] uppercase">
                                {user?.userType || "-"}
                            </h2>

                        </div>

                    </div>

                </main>

            </section>
        </>
    );
};

export default UserInfo;