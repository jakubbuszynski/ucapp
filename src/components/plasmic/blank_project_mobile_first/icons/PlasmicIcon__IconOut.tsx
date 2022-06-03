// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconOutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconOutIcon(props: IconOutIconProps) {
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
          "M18.8 27.45a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9zM25.3 7.3a1.3 1.3 0 00-1.497-1.285l-18.2 2.782A1.3 1.3 0 004.5 10.082v28.237a1.3 1.3 0 001.102 1.284l18.201 2.785a1.3 1.3 0 001.498-1.285V24.2h13.448l-2.593 2.273a1.3 1.3 0 001.711 1.955l5.19-4.55a1.301 1.301 0 000-1.956l-5.19-4.55a1.3 1.3 0 00-1.71 1.956l2.592 2.272H25.3V7.3zm-2.6 1.513v30.78L7.1 37.2V11.197l15.6-2.384zM29.202 39.8h-1.3v-13h2.6v11.7a1.3 1.3 0 01-1.3 1.3zM27.901 19V8.6h1.3a1.3 1.3 0 011.3 1.3V19h-2.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconOutIcon;
/* prettier-ignore-end */
