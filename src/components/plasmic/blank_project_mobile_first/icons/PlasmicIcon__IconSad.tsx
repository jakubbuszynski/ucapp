// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSadIcon(props: IconSadIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
          "M18 2a16 16 0 100 32 16 16 0 000-32zm0 30a14 14 0 110-28 14 14 0 010 28z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.16 16.08a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zm-13.75 0a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM18.16 20a8.999 8.999 0 00-7.33 3.78 1 1 0 001.63 1.16 7 7 0 0111.31-.13 1 1 0 101.6-1.2A9 9 0 0018.16 20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSadIcon;
/* prettier-ignore-end */
