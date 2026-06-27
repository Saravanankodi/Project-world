// import React from "react";
// import { geist, inter } from "@/lib/fonts";
// interface AuthLayoutProps {
//     title: string;
//     subtitle: string;
//     children: React.ReactNode;
// }

// const AuthLayout: React.FC<AuthLayoutProps> = ({
//     title,
//     subtitle,
//     children,
// }) => {
//     return (
//         <div className="w-full min-h-screen flex  ">

//             <div className="w-[50%] bg-[#DCE5D9]">
//                 <div className="flex items-center justify-center gap-2 mb-4">
//                     <div><img src="/Auth/logo.png" alt="logo" /></div>
//                     <div className={`${geist.className} text-2xl font-bold text-[#161D16]`}>ProjectVerse</div>
//                 </div>
//                 <h1 className={`${geist.className} text-5xl  font-bold text-center text-[#161D16]`}>
//                     {title}
//                 </h1>

//                 <p className={`${inter.className} text-lg text-[#565E74] text-center mt-1 mb-6`}>
//                     {subtitle}
//                 </p>
//                 <div>
//                     <img className="w-5 h-auto" src="/Auth/login.png" alt="login" />
//                 </div>
//             </div>
//             <div className="w-[50%] bg-[#FFFFFF]">
//                 {children}
//             </div>
//         </div>

//     );
// };

// export default AuthLayout;



import React from "react";
import { geist, inter } from "@/lib/fonts";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    image: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    title,
    subtitle,
    children,
    image
}) => {
    return (
        <div className="w-full min-h-screen flex justify-center overflow-hidden">

            {/* LEFT SIDE */}
            <div className="w-1/2 relative bg-[#DCE5D9] md:flex flex-col items-start  justify-center hidden ">
                <section className="w-full md:max-w-80 lg:max-w-105 mx-auto">
                    <div className=" flex flex-col gap-2  items-start juestify-center ">
                        <div className="flex items-center justify-center gap-2 my-4">
                            <img src="/Auth/logo.png" alt="logo" />
                            <div className={`${geist.className} text-2xl font-bold text-[#161D16]`}>
                                ProjectVerse
                            </div>
                        </div>

                        <div className={`${geist.className} md:text-3xl lg:text-4xl xl:text-5xl font-bold text-start text-[#161D16] `}>
                            {title}
                        </div>

                        <div className={`${inter.className}  md:text-sm lg:text-lg text-[#565E74] text-start mt-2 mb-6`}>
                            {subtitle}
                        </div>
                    </div>
                    <div className="flex items-center justify-center  overflow-y-hidden">
                        <img
                            src={image}
                            alt="login"
                            className="md:w-80 lg:w-105 h-auto"
                        />
                    </div>
                </section>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 bg-white  ">
                {children}
            </div>

        </div>
    );
};

export default AuthLayout;