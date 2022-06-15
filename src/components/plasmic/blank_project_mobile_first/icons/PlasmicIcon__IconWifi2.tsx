// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconWifi2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconWifi2Icon(props: IconWifi2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M20.198 8.86a11.86 11.86 0 011.36 1.639.6.6 0 01-.988.681A10.334 10.334 0 004.735 9.71a10.87 10.87 0 00-1.208 1.466.6.6 0 01-.985-.684A12 12 0 013.887 8.86a11.534 11.534 0 0116.311 0zm-2.683 2.368a7.966 7.966 0 011.433 1.988.6.6 0 01-1.068.546 6.771 6.771 0 00-1.212-1.685 6.54 6.54 0 00-10.46 1.668.6.6 0 11-1.07-.543 7.74 7.74 0 0112.378-1.974zm-2.05 2.997c.425.425.776.948 1.02 1.505a.6.6 0 01-1.1.48 3.762 3.762 0 00-.768-1.137 3.64 3.64 0 00-5.148 0 3.67 3.67 0 00-.757 1.126.601.601 0 11-1.1-.481 4.86 4.86 0 011.009-1.493 4.84 4.84 0 016.843 0zm-2.31 2.32a1.558 1.558 0 11-2.203 2.203 1.558 1.558 0 012.204-2.204z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconWifi2Icon;
/* prettier-ignore-end */
