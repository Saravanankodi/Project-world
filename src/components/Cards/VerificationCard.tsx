"use client";

import { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";
import { VerificationCardProps } from "@/types/types";

export default function VerificationCard({
  icon,
  value,
  verified = true,
}: VerificationCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#BCCBB94D] bg-[#EDF6EA] p-3">
      <div className="flex items-center gap-5">
        <div className="text-green-700">{icon}</div>

        <span className="text-base text-[#161D16]">
          {value}
        </span>
      </div>

      {verified && (
        <button className="flex items-center gap-2 rounded-full border border-green-300 bg-green-100 px-2 py-1">
          <BadgeCheck
            size={14}
            className="fill-green-700 text-green-700"
          />

          <span className="font-bold text-[10px] uppercase text-[#006E2F] ">
            Verified
          </span>
        </button>
      )}
    </div>
  );
}