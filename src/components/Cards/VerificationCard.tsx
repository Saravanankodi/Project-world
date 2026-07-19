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
      <div className="flex items-center gap-3">
        <div className="text-green-700">{icon}</div>

        <span className="text-sm text-[#161D16]">
          {value}
        </span>
      </div>

      {verified && (
        <button className="ms-2 flex items-center gap-1 rounded-full border border-green-300 bg-green-100 p-1">
          <BadgeCheck
            size={14}
            className="fill-green-700 text-white"
          />

          <span className="font-bold text-[10px] uppercase text-[#006E2F] ">
            Verified
          </span>
        </button>
      )}
    </div>
  );
}