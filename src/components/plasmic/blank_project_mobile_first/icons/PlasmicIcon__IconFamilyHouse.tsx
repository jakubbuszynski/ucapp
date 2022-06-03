// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFamilyHouseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFamilyHouseIcon(props: IconFamilyHouseIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.414 3a2 2 0 00-2.828 0L1.292 16.292a1 1 0 101.416 1.414L4 16.414V27a3 3 0 003 3h18a3 3 0 003-3V16.414l1.292 1.292a1 1 0 101.416-1.414L26 11.586V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2.586L17.414 3zM26 14.414l-10-10-10 10V27a1 1 0 001 1h18a1 1 0 001-1V14.414zm-10-.45c3.328-3.346 11.65 2.508 0 10.036-11.65-7.528-3.328-13.382 0-10.036z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFamilyHouseIcon;
/* prettier-ignore-end */
