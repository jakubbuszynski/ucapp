// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group690IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group690Icon(props: Group690IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 36"}
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
        d={"M38.333 1H1v4.767h37.333V1z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M37.353 11.095H1.985l1.57-5.36h32.227l1.57 5.36z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M37.353 17.525H1.985l1.57-6.43h32.227l1.57 6.43zm0 5.359H1.985l1.57-5.359h32.227l1.57 5.359zm0 6.43H1.985l1.57-6.43h32.227l1.57 6.43zm0 5.359H1.985l1.57-5.359h32.227l1.57 5.36z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9 6.333h.667v28H9v-28zm21.333 0h-.666v28h.666v-28z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group690Icon;
/* prettier-ignore-end */
