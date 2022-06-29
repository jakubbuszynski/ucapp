// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconEyeiconMusicIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconEyeiconMusicIcon(props: IconEyeiconMusicIconProps) {
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
          "M36 15.63v15.174A6 6 0 1039 36V5.778a2.4 2.4 0 00-3.21-2.262l-19.2 6.858A2.4 2.4 0 0015 12.633v21.168A6 6 0 1018 39V22.059l18-6.426v-.003zm0-3.186L18 18.87v-5.817l18-6.429v5.82zM33 33a3 3 0 110 6 3 3 0 010-6zm-21 3a3 3 0 110 6 3 3 0 010-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconEyeiconMusicIcon;
/* prettier-ignore-end */
