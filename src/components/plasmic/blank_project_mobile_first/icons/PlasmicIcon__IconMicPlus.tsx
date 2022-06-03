// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMicPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMicPlusIcon(props: IconMicPlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
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
          "M22.615 16.962v3.634a8.48 8.48 0 01-16.961 0v-3.634H3.23v3.634a10.904 10.904 0 009.692 10.831v2.496H8.077v2.423h12.115v-2.423h-4.846v-2.496a10.903 10.903 0 009.692-10.83V16.96h-2.423z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M14.135 26.654a6.058 6.058 0 006.057-6.058V8.481a6.058 6.058 0 10-12.115 0v12.115a6.058 6.058 0 006.058 6.058zM10.5 8.48a3.634 3.634 0 117.27 0v12.115a3.635 3.635 0 11-7.27 0V8.481z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M28.416 11.589v5.103h2.153V11.59h5.104V9.435H30.57V4.846h-2.153v4.589h-4.59v2.154h4.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMicPlusIcon;
/* prettier-ignore-end */
