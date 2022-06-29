// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 44"}
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
          "M20 42.018c3.146 0 8.523-4.102 8.523-20.509S23.146 1 20 1c-3.145 0-8.523 4.378-8.523 20.51 0 16.13 5.378 20.508 8.523 20.508z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M1.547 32.251c1.572 2.747 7.952 5.294 22.715-3.3 14.762-8.594 15.764-15.439 14.191-18.185-1.572-2.747-8.2-5.15-22.715 3.3C1.224 22.515-.026 29.505 1.547 32.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M1.547 10.766C-.026 13.512.976 20.357 15.738 28.95c14.763 8.594 21.143 6.047 22.715 3.3 1.573-2.746.323-9.736-14.192-18.185-14.513-8.45-21.142-6.047-22.714-3.3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
