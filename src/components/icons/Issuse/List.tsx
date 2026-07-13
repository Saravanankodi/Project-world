import * as React from "react";
import type { SVGProps } from "react";
const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <aside className="p-2 rounded-lg bg-[#EDF6EA] ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    className="w-6 h-6 "
    fill="none"
    {...props}
  >
    <path
      fill="#006E2F"
      d="M7 17.5v-2.333h14V17.5zm0-7V8.167h14V10.5zm0-7V1.167h14V3.5zM2.333 18.667a2.25 2.25 0 0 1-1.648-.686A2.25 2.25 0 0 1 0 16.333q0-.961.685-1.648A2.25 2.25 0 0 1 2.333 14q.963 0 1.648.685.686.686.686 1.648 0 .963-.686 1.648a2.25 2.25 0 0 1-1.648.686m0-7a2.25 2.25 0 0 1-1.648-.686A2.25 2.25 0 0 1 0 9.333q0-.961.685-1.648A2.25 2.25 0 0 1 2.333 7q.963 0 1.648.685.686.686.686 1.648 0 .963-.686 1.648a2.25 2.25 0 0 1-1.648.686m0-7A2.25 2.25 0 0 1 .685 3.98 2.25 2.25 0 0 1 0 2.333Q0 1.372.685.685A2.25 2.25 0 0 1 2.333 0q.963 0 1.648.685.686.686.686 1.648 0 .963-.686 1.648a2.25 2.25 0 0 1-1.648.686"
    />
  </svg>
  </aside>
);
export default SvgList;
