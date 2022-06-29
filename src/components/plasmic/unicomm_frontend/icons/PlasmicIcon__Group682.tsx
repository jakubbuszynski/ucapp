// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group682IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group682Icon(props: Group682IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 30"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M21.035 3.1H1v25.877h20.035V3.1z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18.426 10.279H3.576v14.85h14.85V10.28z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.428 7.806a1.24 1.24 0 100-2.48 1.24 1.24 0 000 2.48zm11.138 0a1.24 1.24 0 100-2.48 1.24 1.24 0 000 2.48zm-5.572 0a1.24 1.24 0 100-2.48 1.24 1.24 0 000 2.48z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.707 12.752a1.252 1.252 0 01-1.252 1.252H8.52a1.252 1.252 0 01-1.252-1.252m11.158 9.898H3.576v2.473h14.85V22.65zM4.189 2.853V1h1.24m3.712 1.853V1h-1.24m4.953 1.853V1h1.24M17.8 2.853V1h-1.234"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group682Icon;
/* prettier-ignore-end */
