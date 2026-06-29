import * as React from "react";
import type { SVGProps } from "react";
const SvgBookMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 14"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 13.5v-12Q0 .88.44.44T1.5 0H9q.619 0 1.06.44.44.44.44 1.06v12l-5.25-2.25zm1.5-2.287L5.25 9.6 9 11.213V1.5H1.5zm0-9.713H9 1.5"
    />
  </svg>
);
export default SvgBookMark;
