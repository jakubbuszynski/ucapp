// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse48Icon(props: Ellipse48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
        d={
          "M4.377 2.218c0 1.225-.98 2.218-2.188 2.218C.979 4.436 0 3.443 0 2.218S.98 0 2.189 0c1.208 0 2.188.993 2.188 2.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse48Icon;
/* prettier-ignore-end */
