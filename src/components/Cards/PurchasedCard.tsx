"use client";

import Image from "next/image";
import BookMarkFilled from "../icons/cards/BookMarkFilled";
import { BookMark,  Star } from "@/components/icons/cards";
import { useState } from "react";
import {inter, geist} from "@/lib/fonts"
import { ProjectCardProps } from "@/types/types";
import Button from "../Button/Button";
import { Download, GraduationCap } from "lucide-react";

const PurchasedCard = ({ bookmarked = false, ...props }: ProjectCardProps) => {
    const [isBookmarked, setIsBookmarked] = useState(bookmarked);

    return (
        <section className="w-full h-full flex flex-col xl:max-w-82 2xl:max-w-83 overflow-hidden rounded-2xl xl:rounded-3xl  shadow-lg shadow-[#0000000D] transition-all hover:shadow-xl border border-[#BCCBB94D] m-auto">
            {/* Image */}
            <header className="relative aspect-2/1 w-full">
                <Image
                    src={props.image}
                    alt={props.title}
                    fill
                    className="object-cover"
                />

                {/* <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur"
                >
                    {isBookmarked ? (
                        <BookMarkFilled className="h-5 ms-1.5 w-5 text-green-500" />
                    ) : (
                        <BookMark className="h-5 w-5 text-green-500" />
                    )}
                </button> */}
            </header>

            {/* Content */}
            <main className="p-4">
                <aside className="mb-2 flex items-center justify-between">
                    <span className={`${inter.className} h-5 rounded-sm bg-[#DCE5D9] px-4 py-2 text-[11px] lg:text-xs font-semibold uppercase text-[#3D4A3D] flex items-center justify-center`}>
                        {props.category}
                    </span>

                    <div className={`${inter.className} flex items-center gap-1 text-[#9E4036] font-semibold text-xs`}>
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-semibold">{props.rating}</span>
                    </div>
                </aside>

                <h2 className={`${geist.className} text-sm font-semibold text-[#161D16] line-clamp-1`}>
                    {props.title}
                </h2>

                <p className={`${inter.className} mt-2 h-8 text-[10px] leading-relaxed text-[#565E74] line-clamp-2`}>
                    {props.description}
                </p>

                <div className="my-2 h-px bg-gray-200" />

                <div className="flex items-center justify-between">
                    <div className="w-fit">
                        <p className="text-[11px] ">
                            Creator
                        </p>
                        <span className={`${inter.className} text-xs font-medium text-[#161D16CC]`}>
                            {props.author}
                        </span>
                    </div>
                    <aside className="w-fit">
                        <p className="text-[11px] ">
                            Purchased
                        </p>
                        <p className={` ${inter.className} text-lg font-semibold text-[#006E2F]`}>
                            ${props.price}
                        </p>
                    </aside>
                </div>
                <div className="w-full flex items-center justify-center gap-3 mt-3">
                    <Button className="w-1/2 bg-[#006E2F] text-sm text-white">
                        Open
                    </Button>
                    <Button className="w-1/2 bg-[#161D16] text-white text-sm">
                        Contact
                    </Button>
                </div>
                <div className="w-full flex items-center justify-evenly">
                    <Button className="w-fit  text-black text-[10px]">
                        <Download className="w-6 h-6 m-auto"/>
                        RESOURCES
                    </Button>
                    <Button className="w-fit text-black text-[10px]">
                        <GraduationCap className="w-6 h-6 m-auto"/>
                        BOOK MENTOR
                    </Button>
                </div>
            </main>
        </section>
    );
};

export default PurchasedCard;