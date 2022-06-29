// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSettings4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSettings4Icon(props: IconSettings4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40.5 25.14v-2.295l2.88-2.52a3 3 0 00.57-3.825l-3.54-6A3 3 0 0037.815 9a3 3 0 00-.96.15l-3.645 1.23a17.027 17.027 0 00-1.965-1.125l-.765-3.78a3 3 0 00-3-2.415h-7.02a3 3 0 00-3 2.415l-.765 3.78c-.684.33-1.345.707-1.98 1.125l-3.57-1.29a3 3 0 00-.96-.09 3 3 0 00-2.595 1.5l-3.54 6a3 3 0 00.615 3.765L7.5 22.86v2.295l-2.835 2.52A3 3 0 004.05 31.5l3.54 6a3 3 0 002.595 1.5 3 3 0 00.96-.15l3.645-1.23c.63.418 1.286.794 1.965 1.125l.765 3.78a3 3 0 003 2.415h7.08a3 3 0 003-2.415l.765-3.78a17.22 17.22 0 001.98-1.125l3.63 1.23a3 3 0 00.96.15 3 3 0 002.595-1.5l3.42-6a3 3 0 00-.615-3.765L40.5 25.14zM37.815 36l-5.145-1.74a13.29 13.29 0 01-4.065 2.355L27.54 42h-7.08l-1.065-5.325a14.039 14.039 0 01-4.05-2.355L10.185 36l-3.54-6 4.08-3.6a13.348 13.348 0 010-4.695L6.645 18l3.54-6 5.145 1.74a13.29 13.29 0 014.065-2.355L20.46 6h7.08l1.065 5.325a14.039 14.039 0 014.05 2.355l5.16-1.68 3.54 6-4.08 3.6a13.348 13.348 0 010 4.695L41.355 30l-3.54 6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24 33a9 9 0 119-9 8.91 8.91 0 01-9 9zm0-15a5.864 5.864 0 00-6 6 5.864 5.864 0 006 6 5.864 5.864 0 006-6 5.864 5.864 0 00-6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSettings4Icon;
/* prettier-ignore-end */
