// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSettingsIcon(props: IconSettingsIconProps) {
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
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.25 18.855v.495l.365.335 2.127 1.946.008.008.01.008c.034.03.067.063.098.098l-.085-.078-2.616-2.375c.107-.88.107-1.771.002-2.653l2.602-2.295.266-.236c-.06.109-.14.207-.235.29v.002l-2.158 1.887-.384.336v2.232zm.08 8.717l2.59-4.39-2.497 4.38-.001.003a1.13 1.13 0 01-.275.317l.183-.31zm-4.606-.615l.098.034-.432.285c-.435.286-.888.543-1.356.77l-.502.243-.11.547-.575 2.835v.004c-.028.138-.081.27-.156.387l.068-.344.68-3.437a11.09 11.09 0 002.285-1.324zM7.987 28.07l.495-.162-.478.162c-.035.011-.07.02-.106.029l.089-.03zm-3.964-6.223c.058-.088.128-.168.209-.237l.007-.006.007-.007 2.126-1.89.378-.336V16.65l-.365-.335-2.127-1.946-.009-.008-.009-.008a1.116 1.116 0 01-.098-.098l.085.078 2.616 2.375a11.138 11.138 0 00-.002 2.653L4.24 21.656l-.216.191zM8 7.934l-.19-.064c.075.001.15.01.224.026l2.149.776L8 7.934zm3.278 1.109l-.07-.024.448-.295c.435-.286.888-.543 1.356-.77l.502-.243.11-.547.575-2.835h0v-.004c.018-.09.047-.178.086-.26l-.043.217-.68 3.437a11.09 11.09 0 00-2.284 1.324zM28.013 7.93l-.495.162.478-.162c.035-.011.07-.02.106-.029l-.089.03zM18 23.625h.011L18 24.75v-1.125z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.25"}
      ></path>
    </svg>
  );
}

export default IconSettingsIcon;
/* prettier-ignore-end */
