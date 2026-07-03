import { RatingPercentageBarProps } from "@/types/types";


export default function RatingPercentageBar({
  star,
  percentage,
  color = "bg-green-600",
}: RatingPercentageBarProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Star Label */}
      <div className="flex items-center w-12">
        <span className="mr-1 font-medium">{star}</span>
        <span className="text-yellow-500">★</span>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full w-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage */}
      <span className="w-12 text-right text-sm font-medium text-gray-600">
        {percentage}%
      </span>
    </div>
  );
}