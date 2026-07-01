import { cva, type VariantProps } from "class-variance-authority";

const progressVariants = cva(
  "h-full transition-[width] duration-500 ease-out",
  {
    variants: {
      variant: {
        default: "bg-blue-500",
        success: "bg-green-500",
        danger: "bg-red-500",
      },
      type: {
      line: "",
      circle: "",
    },
    },
    defaultVariants: {
      variant: "default",
      type: "line",
    },
  }
);

interface ProgressProps extends VariantProps<typeof progressVariants> {
  value: number;
  label?: string;
  type?: "line" | "circle";
  size?:number;
}

export function Progress({
  value,
  label,
  type = "line",
  variant = "default",
  size = 100,
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, value));

  if (type === "circle") {
    const strokeWidth = size * 0.08;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset =
      circumference - (percentage / 100) * circumference;
    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={strokeWidth}
            className="text-zinc-200"
            stroke="currentColor"
            fill="none"
          />

          <circle
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={strokeWidth}
            className={progressVariants({ variant })}
            stroke="currentColor"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute text-center">
          <div className="text-lg font-semibold">
            {percentage}%
          </div>

          {label && (
            <div className="text-xs text-muted-foreground">
              {label}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {label && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            {label}
          </span>
          <span className="text-sm text-muted-foreground">
            {percentage}%
          </span>
        </div>
      )}

      <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-200">
        <div
          className={progressVariants({
            variant,
            type,
          })}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}