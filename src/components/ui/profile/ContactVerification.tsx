import VerificationCard from "@/components/Cards/VerificationCard";
import { Mail, Phone } from "lucide-react";

export default function ContactVerification() {
  return (
    <div className="max-w-115 rounded-xl bg-white p-6 shadow-lg border border-[#006E2F1A] ">
      <h2 className="mb-4 text-base font-bold text-[#161D16] ">
        Contact Verification
      </h2>

      <div className="space-y-6">
        <VerificationCard
          icon={<Mail size={20} />}
          value="alex.rivera@work.com"
        />

        <VerificationCard
          icon={<Phone size={20} />}
          value="+1 (555) 0123"
        />
      </div>
    </div>
  );
}