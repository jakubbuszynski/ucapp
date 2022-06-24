// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCheckMail2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCheckMail2Icon(props: IconCheckMail2IconProps) {
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
          "M45 16.5a13.5 13.5 0 11-27.002 0A13.5 13.5 0 0145 16.5zm-6.438-5.562a1.5 1.5 0 00-2.124 0L28.5 18.879l-1.938-1.941a1.502 1.502 0 10-2.124 2.124l3 3a1.5 1.5 0 002.124 0l9-9a1.5 1.5 0 000-2.124zM36 39v-6.621a16.238 16.238 0 003-1.179V39a6 6 0 01-6 6H9a6 6 0 01-6-6V21a6 6 0 016-6h6.066a16.7 16.7 0 000 3H9a3 3 0 00-3 3v2.22l15 8.076 1.632-.879a16.478 16.478 0 003.312 1.626l-4.23 2.28a1.5 1.5 0 01-1.425 0L6 26.625V39a3 3 0 003 3h24a3 3 0 003-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCheckMail2Icon;
/* prettier-ignore-end */
