// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group684IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group684Icon(props: Group684IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M5.27 39h29.46A4.27 4.27 0 0039 34.73V5.27A4.27 4.27 0 0034.73 1H5.27A4.27 4.27 0 001 5.27v29.46A4.27 4.27 0 005.27 39z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.235 33.992h.004c1.167.142 2.346.142 3.513 0h.002a14.09 14.09 0 00.004-27.966 13.477 13.477 0 00-3.525 0A14.09 14.09 0 005.9 19.991l1 .001h-1a14.107 14.107 0 0012.334 14z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.54 22.631a2.64 2.64 0 100-5.278 2.64 2.64 0 000 5.278zm-13.09 0a2.64 2.64 0 100-5.278 2.64 2.64 0 000 5.278zm3.87 5.549c0 .1.014.196.04.287V33a1 1 0 00.88.992 14.43 14.43 0 003.512 0 1 1 0 00.879-.992v-4.82a2.656 2.656 0 00-5.312 0zm.91-22.162l.13.991h-1v4.733a2.655 2.655 0 105.271 0V7.009a1 1 0 00-.869-.991 13.478 13.478 0 00-3.532 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group684Icon;
/* prettier-ignore-end */
