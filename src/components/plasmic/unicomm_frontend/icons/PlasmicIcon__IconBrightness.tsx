// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconBrightnessIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconBrightnessIcon(props: IconBrightnessIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M25.2 6a1.2 1.2 0 10-2.4 0v2.4a1.2 1.2 0 102.4 0V6zM24 14.4a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm7.2 9.6a7.2 7.2 0 00-7.2-7.2v14.4a7.2 7.2 0 007.2-7.2zm12 0a1.2 1.2 0 01-1.2 1.2h-2.4a1.2 1.2 0 110-2.4H42a1.2 1.2 0 011.2 1.2zm-18 15.6a1.2 1.2 0 10-2.4 0V42a1.2 1.2 0 102.4 0v-2.4zM9.6 24a1.2 1.2 0 01-1.2 1.2H5.911a1.2 1.2 0 110-2.4H8.4A1.2 1.2 0 019.6 24zm2.05-14.05a1.202 1.202 0 00-1.7 1.7l2.4 2.4a1.202 1.202 0 001.7-1.7l-2.4-2.4zm-1.7 28.1a1.2 1.2 0 001.7 0l2.4-2.4a1.202 1.202 0 00-1.7-1.7l-2.4 2.4a1.2 1.2 0 000 1.7zm26.4-28.1a1.201 1.201 0 111.7 1.7l-2.4 2.4a1.202 1.202 0 11-1.7-1.7l2.4-2.4zm1.7 28.1a1.2 1.2 0 01-1.7 0l-2.4-2.4a1.202 1.202 0 011.7-1.7l2.4 2.4a1.201 1.201 0 010 1.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconBrightnessIcon;
/* prettier-ignore-end */
