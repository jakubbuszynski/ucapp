// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconRingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconRingIcon(props: IconRingIconProps) {
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
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M44.853 44.147l.012.013.013.012a.5.5 0 11-.706.706l-.012-.013-.013-.012-7.56-7.56-.293-.293H30v1a6 6 0 01-12 0v-1H7.036a2.036 2.036 0 01-1.694-3.165s0 0 0 0l4.4-6.596h0A7.5 7.5 0 0011 23.077s0 0 0 0V14c0-.531.045-1.053.132-1.565l.086-.509-.365-.365-7.705-7.708s0 0 0 0a.5.5 0 01.705-.705l41 41zM20 37h-1v1a5 5 0 1010 0v-1h-9zm-6.293-22.587l-.293-.293h-1.416v8.958a8.5 8.5 0 01-1.426 4.716l-4.4 6.595-.083.124-.043.144-.006.02-.063.21.031.218.002.014.032.225.126.189.008.012.11.166.167.111.012.008.19.126.224.032.014.002.07.01h28.331l-1.707-1.707-19.88-19.88z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <path
        d={
          "M24 5c-2.926 0-5.6.97-7.576 2.514l-.08.064a1.5 1.5 0 11-1.87-2.346l.1-.08C17.096 3.18 20.424 2 24 2c7.362 0 14 5.13 14 12v9.078a6.5 6.5 0 001.092 3.606l2.656 3.984a1.5 1.5 0 11-2.496 1.664l-2.656-3.984A9.5 9.5 0 0135 23.078V14c0-4.728-4.766-9-11-9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconRingIcon;
/* prettier-ignore-end */
