// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconComunityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconComunityIcon(props: IconComunityIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M30 26.25h-1.25V13A1.75 1.75 0 0027 11.25h-8.25V5A1.75 1.75 0 0017 3.25H5A1.75 1.75 0 003.25 5v21.25H2a.75.75 0 100 1.5h28a.75.75 0 100-1.5zm-3-13.5a.25.25 0 01.25.25v13.25h-8.5v-13.5H27zM4.75 5A.25.25 0 015 4.75h12a.25.25 0 01.25.25v21.25H4.75V5zm2.5 4A.75.75 0 018 8.25h4a.75.75 0 110 1.5H8A.75.75 0 017.25 9zm7.5 8a.75.75 0 01-.75.75h-4a.75.75 0 110-1.5h4a.75.75 0 01.75.75zm-2 5a.75.75 0 01-.75.75H8a.75.75 0 110-1.5h4a.75.75 0 01.75.75zm12 0a.75.75 0 01-.75.75h-2a.75.75 0 110-1.5h2a.75.75 0 01.75.75zm-3.5-5a.75.75 0 01.75-.75h2a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconComunityIcon;
/* prettier-ignore-end */
