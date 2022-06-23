// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 32"}
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
          "M2 21v-8a2 2 0 012-2h5.394a2 2 0 001.11-.336l8.386-5.592A2 2 0 0122 6.74v20.52a2 2 0 01-3.11 1.664l-8.386-5.59A2 2 0 009.394 23H4a2 2 0 01-2-2v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>

      <path
        d={"M31 8s3 3 3 8-3 8-3 8m6-22s5 5 5 14-5 14-5 14"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
