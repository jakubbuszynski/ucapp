// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCustomerServiceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCustomerServiceIcon(props: IconCustomerServiceIconProps) {
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
          "M24 6C14.058 6 6 14.058 6 24v16.875C6 41.498 6.502 42 7.125 42h8.625c1.655 0 3-1.345 3-3v-9.75c0-1.655-1.345-3-3-3H9.375V24c0-8.077 6.548-14.625 14.625-14.625S38.625 15.923 38.625 24v2.25H32.25c-1.655 0-3 1.345-3 3V39c0 1.655 1.345 3 3 3h8.625c.623 0 1.125-.502 1.125-1.125V24c0-9.942-8.058-18-18-18zm-8.625 23.625v9h-6v-9h6zm23.25 9h-6v-9h6v9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCustomerServiceIcon;
/* prettier-ignore-end */
