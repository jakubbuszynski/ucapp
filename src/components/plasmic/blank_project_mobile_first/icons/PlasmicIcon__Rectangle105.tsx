// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle105Icon(props: Rectangle105IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 480 134"}
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
        d={"M0 13.901c186.591-18.618 291.696-18.451 480 0v120H0v-120z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle105Icon;
/* prettier-ignore-end */
