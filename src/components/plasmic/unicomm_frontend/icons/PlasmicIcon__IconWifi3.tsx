// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconWifi3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconWifi3Icon(props: IconWifi3IconProps) {
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
          "M40.397 17.722c.984.981 1.91 2.104 2.719 3.276a1.2 1.2 0 01-1.975 1.363 20.67 20.67 0 00-31.67-2.943c-.836.836-1.664 1.848-2.417 2.933a1.2 1.2 0 01-1.97-1.368 23.998 23.998 0 012.69-3.264 23.069 23.069 0 0132.623 0v.003zm-5.367 4.735a15.927 15.927 0 012.866 3.974 1.2 1.2 0 01-2.136 1.092 13.546 13.546 0 00-2.424-3.37 13.08 13.08 0 00-20.918 3.337 1.2 1.2 0 11-2.141-1.085 15.48 15.48 0 0124.756-3.948h-.003zm-4.1 5.993a9.874 9.874 0 012.04 3.01 1.2 1.2 0 01-2.199.962 7.523 7.523 0 00-1.536-2.276 7.278 7.278 0 00-10.296 0 7.323 7.323 0 00-1.514 2.252 1.2 1.2 0 11-2.198-.963 9.72 9.72 0 012.016-2.985 9.68 9.68 0 0113.687 0zm-4.618 4.639a3.116 3.116 0 11-4.407 4.407 3.116 3.116 0 014.407-4.407z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconWifi3Icon;
/* prettier-ignore-end */
