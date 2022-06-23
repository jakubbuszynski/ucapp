// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 77 96"}
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
          "M68.124 47.983c0 3.384-.564 6.642-1.596 9.678l-4.884-4.884c.32-1.578.48-3.184.48-4.794v-6a3 3 0 016 0v6zm-30 24a23.86 23.86 0 0013.272-4.002l4.308 4.314a29.838 29.838 0 01-14.58 5.538v12.15h18a3 3 0 010 6h-42a3 3 0 110-6h18v-12.15a30 30 0 01-27-29.85v-6a3 3 0 016 0v6a24 24 0 0024 24zm18-54v29.274l-6-6V17.983a12 12 0 00-23.982-.708l-5.07-5.07a18.006 18.006 0 0135.052 5.778z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M47.04 63.625l-4.488-4.488a12 12 0 01-16.428-11.154v-5.268l-6-6v11.268A18 18 0 0047.04 63.625zM0 8.107l72 72 4.248-4.248-72-72L0 8.107z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
