// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group675IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group675Icon(props: Group675IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 34"}
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
        d={"M1 21.75v10.375h4.45l.99-3.455h35.575L43 32.125h4.445V21.75H1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.93 12.86h34.59a4.94 4.94 0 014.94 4.94v3.955H1.99V17.8a4.94 4.94 0 014.94-4.94v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.885 5.94h9.88a2 2 0 012 2v4.94H8.91V7.905a2 2 0 011.975-1.965zm16.8 0h9.88a2 2 0 012 2v4.94h-13.84V7.905a2 2 0 011.96-1.965v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M42.51 1H5.945v11.86H42.51V1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group675Icon;
/* prettier-ignore-end */
