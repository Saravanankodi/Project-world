import * as React from "react";
import type { SVGProps } from "react";
const SvgChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.667 13.333q-.688 0-1.177-.49A1.6 1.6 0 0 1 0 11.668v-10Q0 .979.49.49.979 0 1.667 0h5l1.666 1.667H15q.687 0 1.177.49.49.489.49 1.176v8.334q0 .687-.49 1.177t-1.177.49zm0-1.666H15V3.333H7.646L5.979 1.667H1.667zm0 0v-10 10"
    />
  </svg>
);
export default SvgChatIcon;
