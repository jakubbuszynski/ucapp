// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 45"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.5 0A1.5 1.5 0 0124 1.5v3.15a1.5 1.5 0 01-3 0V1.5A1.5 1.5 0 0122.5 0zm14.85 7.65l-2.228 2.228 2.227-2.227.001-.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M38.41 6.59a1.5 1.5 0 010 2.12l-2.227 2.229a1.5 1.5 0 01-2.122-2.122L36.29 6.59a1.5 1.5 0 012.122 0zm.44 15.91a1.5 1.5 0 011.5-1.5h3.15a1.5 1.5 0 010 3h-3.15a1.5 1.5 0 01-1.5-1.5zm-1.5 14.85l-2.228-2.228 2.227 2.227.001.001zm-3.289-3.289a1.5 1.5 0 012.122 0l2.228 2.228a1.5 1.5 0 01-2.122 2.122l-2.228-2.228a1.5 1.5 0 010-2.122zM22.5 38.85a1.5 1.5 0 011.5 1.5v3.15a1.5 1.5 0 01-3 0v-3.15a1.5 1.5 0 011.5-1.5zm-14.85-1.5l2.228-2.228-2.227 2.227-.001.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.939 34.061a1.5 1.5 0 010 2.122L8.71 38.41a1.5 1.5 0 01-2.122-2.122l2.228-2.228a1.5 1.5 0 012.122 0zM0 22.5A1.5 1.5 0 011.5 21h3.15a1.5 1.5 0 010 3H1.5A1.5 1.5 0 010 22.5zM7.65 7.65l2.228 2.228-2.227-2.227-.001-.001zM6.59 6.59a1.5 1.5 0 012.12 0l2.229 2.227a1.5 1.5 0 01-2.122 2.122L6.59 8.71a1.5 1.5 0 010-2.122zM9 22.5C9 15.045 15.045 9 22.5 9S36 15.045 36 22.5 29.955 36 22.5 36 9 29.955 9 22.5zM22.5 12C16.701 12 12 16.701 12 22.5S16.701 33 22.5 33 33 28.299 33 22.5 28.299 12 22.5 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
