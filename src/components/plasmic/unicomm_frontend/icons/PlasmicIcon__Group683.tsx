// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group683IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group683Icon(props: Group683IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 27"}
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
          "M42.505 6.232h2.965a2 2 0 012 2v17.765h-6.94V8.207a2 2 0 011.975-1.975v0zm-39.525 0h2.965a2 2 0 012 2v17.765H1V8.207a2 2 0 011.98-1.975v0zm3.245-.565V3.286c.001-.606.318-1.187.88-1.615C7.667 1.242 8.43 1 9.225 1h12c.796 0 1.559.24 2.121.67.563.428.879 1.01.879 1.616v11.047m18-8.333V3.286c-.001-.606-.318-1.187-.88-1.615-.563-.429-1.325-.67-2.12-.671h-12c-.796 0-1.559.24-2.121.67-.563.428-.879 1.01-.879 1.616v11.047m16 .667h-32v11h32V15z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group683Icon;
/* prettier-ignore-end */
