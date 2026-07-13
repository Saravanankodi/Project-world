import * as React from "react";
import type { SVGProps } from "react";
const SvgNew = (props: SVGProps<SVGSVGElement>) => (
  <aside className="p-2 rounded-lg bg-[#FEF2F2] ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 "
    fill="none"
    {...props}
  >
    <path
      fill="#DC2626"
      d="M2.333 18.667a2.25 2.25 0 0 1-1.648-.686A2.25 2.25 0 0 1 0 16.333v-14Q0 1.372.685.685A2.25 2.25 0 0 1 2.333 0h21q.963 0 1.648.685.686.686.686 1.648v14q0 .963-.686 1.648a2.25 2.25 0 0 1-1.648.686zm0-2.334h21v-14h-21zm.584-3.5h1.458V8.75l2.975 4.083h1.4v-7H7.292v4.084L4.375 5.833H2.917zm7 0h4.666v-1.458h-2.916v-1.283h2.916V8.633h-2.916V7.292h2.916V5.833H9.917zm7 0h4.666q.495 0 .832-.335.335-.335.335-.831V5.833h-1.458v5.25h-1.284V7H18.55v4.083h-1.342v-5.25H15.75v5.834q0 .495.335.83.336.337.832.336m-14.584 3.5v-14z"
    />
  </svg>
  </aside>
);
export default SvgNew;
