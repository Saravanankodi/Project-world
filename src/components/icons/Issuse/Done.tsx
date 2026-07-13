import * as React from "react";
import type { SVGProps } from "react";
const SvgDone = (props: SVGProps<SVGSVGElement>) => (
  <aside className="p-2 rounded-lg bg-[#006E2F1A] ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 "
        fill="none"
        {...props}
      >
        <path
          fill="#006E2F"
          d="M9.363 18.667q-3.909 0-6.636-2.713T0 9.334t2.727-6.621T9.363 0h4.695q3.909 0 6.636 2.713t2.727 6.62-2.727 6.621-6.636 2.713zm.029-2.334h4.637q2.917 0 4.988-2.041 2.07-2.042 2.07-4.959t-2.07-4.958q-2.07-2.042-4.988-2.042H9.392q-2.917 0-4.988 2.042-2.07 2.042-2.07 4.958 0 2.918 2.07 4.959t4.988 2.041m.67-5.045-2.479-2.48a1.04 1.04 0 0 0-.802-.35q-.48 0-.831.35-.35.35-.35.832 0 .48.35.802l2.888 2.887q.525.525 1.254.525t1.225-.525L17.5 7.146a1.06 1.06 0 0 0 .35-.817q0-.496-.35-.816a1.14 1.14 0 0 0-.831-.35q-.481 0-.832.35z"
        />
      </svg>
  </aside>
);
export default SvgDone;
