import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#006E2F"
      d="m11 13-2-2 2-2 2 2zM8.875 7.125l-2.5-2.5L11 0l4.625 4.625-2.5 2.5L11 5zm-4.25 8.5L0 11l4.625-4.625 2.5 2.5L5 11l2.125 2.125zm12.75 0-2.5-2.5L17 11l-2.125-2.125 2.5-2.5L22 11zM11 22l-4.625-4.625 2.5-2.5L11 17l2.125-2.125 2.5 2.5z"
    />
  </svg>
);
export default SvgDiamond;
