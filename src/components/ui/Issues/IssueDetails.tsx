import { IssueDetailsProps } from "@/types/types";
import { FileText } from "lucide-react";


export default function IssueDetails({
  projectName,
  paymentAmount,
  technicalSummary,
  description,
}: IssueDetailsProps) {
  return (
    <div className="mx-auto max-w-5xl flex-1 h-full rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-[#006E2F]" />
        <h2 className="text-2xl font-bold text-gray-900">
          Issue Details
        </h2>
      </div>

      <div className="my-2 border-t border-[#BCCBB9] " />

      {/* Top Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <p className="text-base text-[#565E74]">Related Project</p>

          <button className="mt-1 border-b-2 border-[#006E2F] text-base font-semibold text-[#006E2F] transition hover:text-green-800">
            {projectName}
          </button>
        </div>

        <div>
          <p className="text-base text-[#565E74] ">Payment Amount</p>

          <p className="mt-1 text-base font-bold text-[#161D16]">
            ₹{paymentAmount.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6">
        <p className="text-base text-[#565E74] ">Technical Summary</p>

        <h3 className="mt-1 text-base font-bold text-[#161D16]">
          {technicalSummary}
        </h3>
      </div>

      {/* Description */}
      <div className="mt-5 rounded-2xl border border-green-200 bg-[#BCCBB980] p-4">
        <h4 className="text-base font-medium text-[#565E74] ">
          Detailed Description
        </h4>

        <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-[#3D4A3D] ">
          {description}
        </p>
      </div>
    </div>
  );
}