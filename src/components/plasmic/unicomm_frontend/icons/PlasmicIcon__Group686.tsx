// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group686IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group686Icon(props: Group686IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 40"}
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
          "M7.354 13.829v-.173h8.536v.1a8.315 8.315 0 002.871 6.16 10.62 10.62 0 013.518 8.307A10.647 10.647 0 011 27.821a10.603 10.603 0 013.547-7.897 8.191 8.191 0 002.807-6.095v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M17.548 9.113v.632l-.741.633v3.473H6.444v-3.473l-.742-.633v-.632h11.846zM7.354 8.812h8.514l-1.421-4.258H8.768L7.354 8.812zm2.836-4.265h2.835V1H10.19v3.547z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.846 13.656l.05 2.154a28.172 28.172 0 002.994 12.033v0l-2.154-1.436-2.154 1.436"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.37 13.656l-.044 2.154a28.287 28.287 0 01-2.972 12.018v0l2.154-1.436 2.154 1.436"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group686Icon;
/* prettier-ignore-end */
