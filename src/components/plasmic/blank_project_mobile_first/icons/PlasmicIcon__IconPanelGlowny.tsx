// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPanelGlownyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPanelGlownyIcon(props: IconPanelGlownyIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M32.243 16.431c-5.942-1.908-10.634-1.908-16.53 0-2.996.968-4.444 4.34-3.16 7.216 2.325 5.212 4.635 7.96 8.283 10.987 2.11 1.75 5.211 1.708 7.188-.192 3.269-3.143 5.409-6.283 7.401-10.76 1.287-2.893-.168-6.283-3.182-7.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.75"}
      ></path>

      <path
        d={
          "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.75"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IconPanelGlownyIcon;
/* prettier-ignore-end */
