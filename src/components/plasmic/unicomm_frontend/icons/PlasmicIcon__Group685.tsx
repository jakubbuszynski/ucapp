// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group685IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group685Icon(props: Group685IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 38"}
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
          "M7.127 13.37v-.166h8.23v.097a8.015 8.015 0 002.77 5.94 10.238 10.238 0 013.392 8.01A10.267 10.267 0 011 26.862a10.225 10.225 0 013.42-7.615 7.899 7.899 0 002.707-5.878v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.957 8.823v.61l-.715.61v3.35H6.25v-3.35l-.715-.61v-.61h11.423zm-9.83-.29h8.21l-1.37-4.106H8.49L7.127 8.533zM9.861 4.42h2.735V1H9.86v3.42z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.422 13.204l.049 2.077a27.166 27.166 0 002.887 11.603v0l-2.077-1.385-2.077 1.385"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.034 13.204l-.041 2.077A27.276 27.276 0 017.127 26.87v0l2.077-1.385 2.077 1.385"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group685Icon;
/* prettier-ignore-end */
