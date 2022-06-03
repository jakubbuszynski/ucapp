// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLightsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLightsIcon(props: IconLightsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 11.5c-11.046 0-20 8.954-20 20h40c0-11.046-8.954-20-20-20zm0 0V2m16.034 40.477l-2.068-2.954m-27.691.202l-2.55 2.55M34 45.5l-1.147-1.638m-17.72.112l-1.414 1.414M24 41.5c-5.523 0-10-4.477-10-10h20c0 5.523-4.477 10-10 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconLightsIcon;
/* prettier-ignore-end */
