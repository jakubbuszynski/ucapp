// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconTemperatureIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconTemperatureIcon(props: IconTemperatureIconProps) {
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
          "M19.5 10.25a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-.5zm-1.896-4.207a.5.5 0 010-.707l1.413-1.414a.5.5 0 01.708 0l.353.353a.5.5 0 010 .708l-1.414 1.413a.5.5 0 01-.707 0l-.353-.353zm0 9.621a.5.5 0 010-.707l.353-.353a.5.5 0 01.707 0l1.414 1.413a.5.5 0 010 .708l-.353.353a.5.5 0 01-.708 0l-1.413-1.414zM12.75 2a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-.5a.5.5 0 01-.5-.5V2zm.75 4a4.61 4.61 0 00-.333.014.464.464 0 00-.417.474v.462c0 .33.317.569.647.553a3 3 0 01.6 5.955c-.272.046-.497.266-.497.542v.5c0 .276.225.503.499.472A4.5 4.5 0 0013.5 6zm-5.677 9.281a.578.578 0 01-.323-.497V5.75a.5.5 0 00-.5-.5h-.5a.5.5 0 00-.5.5v9.034c0 .212-.136.396-.323.497a2.25 2.25 0 102.146 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.75 22.5A5.245 5.245 0 013 13.582V5.25a3.75 3.75 0 017.5 0v8.332A5.245 5.245 0 016.75 22.5zm0-19.5A2.252 2.252 0 004.5 5.25v8.987l-.249.224a3.75 3.75 0 104.998 0L9 14.237V5.25A2.252 2.252 0 006.75 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconTemperatureIcon;
/* prettier-ignore-end */
