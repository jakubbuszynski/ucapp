// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconVideoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconVideoIcon(props: IconVideoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M5.125 4.5A3.125 3.125 0 002 7.625v8.75A3.125 3.125 0 005.125 19.5h8.75A3.125 3.125 0 0017 16.375v-1.219l2.98 2.328c.822.641 2.02.056 2.02-.985V7.501c0-1.041-1.198-1.626-2.02-.985L17 8.844V7.625A3.125 3.125 0 0013.875 4.5h-8.75zM17 10.43l3.75-2.929v8.997L17 13.57v-3.14zm-1.25-2.805v8.75a1.875 1.875 0 01-1.875 1.875h-8.75a1.875 1.875 0 01-1.875-1.875v-8.75A1.875 1.875 0 015.125 5.75h8.75a1.875 1.875 0 011.875 1.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconVideoIcon;
/* prettier-ignore-end */
