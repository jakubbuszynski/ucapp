// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group687IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group687Icon(props: Group687IconProps) {
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
          "M5.27 38.75h29.46c2.22 0 4.02-1.8 4.02-4.02V5.27c0-2.22-1.8-4.02-4.02-4.02H5.27a4.02 4.02 0 00-4.02 4.02v29.46c0 2.22 1.8 4.02 4.02 4.02z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.266 33.743l.004.001c1.146.14 2.305.14 3.452 0h.001a13.84 13.84 0 00.003-27.47 13.227 13.227 0 00-3.461 0A13.84 13.84 0 006.15 19.991l.75.001h-.75a13.857 13.857 0 0012.115 13.751z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M26.54 22.381a2.39 2.39 0 100-4.778 2.39 2.39 0 000 4.778zm-13.09 0a2.39 2.39 0 100-4.778 2.39 2.39 0 000 4.778zm4.12 5.799c0 .087.014.17.04.247V33a.75.75 0 00.66.744c1.146.14 2.305.14 3.452 0A.75.75 0 0022.38 33v-4.82a2.406 2.406 0 00-4.812 0zm.692-21.914l.099.743h-.75v4.749a2.405 2.405 0 104.77 0V7.009a.75.75 0 00-.652-.743 13.227 13.227 0 00-3.467 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group687Icon;
/* prettier-ignore-end */
