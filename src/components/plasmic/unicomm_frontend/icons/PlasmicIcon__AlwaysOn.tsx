// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlwaysOnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlwaysOnIcon(props: AlwaysOnIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 29"}
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
        d={"M13.395 24.534A9.53 9.53 0 1114.902 5.67l4.215.868"}
        stroke={"currentColor"}
        strokeWidth={"2.239"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14.318 10.136l5.158-2.978L16.497 2m11.296 19.821A9.528 9.528 0 1035.12 5.566h-1.159"
        }
        stroke={"currentColor"}
        strokeWidth={"2.239"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13.066 24.572c15.299-.374 7.463-19.031 21.27-19.031"}
        stroke={"currentColor"}
        strokeWidth={"2.239"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default AlwaysOnIcon;
/* prettier-ignore-end */
