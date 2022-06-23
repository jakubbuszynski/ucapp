// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSettings3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSettings3Icon(props: IconSettings3IconProps) {
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
          "M39.375 25.14v.495l.365.335 2.835 2.595.01.008.008.008a1.875 1.875 0 01.385 2.353h0l-.005.009-3.417 5.994-.002.003a1.876 1.876 0 01-1.62.935h-.008a1.875 1.875 0 01-.595-.092l-.005-.002-3.62-1.227-.521-.176-.46.303c-.592.39-1.21.742-1.85 1.051l-.502.243-.11.547-.766 3.78v.004a1.875 1.875 0 01-1.875 1.51l-.011-.001h-7.113a1.875 1.875 0 01-1.875-1.51v-.003l-.765-3.78-.11-.545-.5-.243c-.635-.31-1.248-.66-1.835-1.051l-.46-.305-.523.176-3.636 1.227-.004.002a1.873 1.873 0 01-.596.092h-.008a1.874 1.874 0 01-1.622-.938h0l-.005-.009-3.54-6h0l-.006-.009a1.875 1.875 0 01.385-2.39l.007-.007.007-.006 2.835-2.52.378-.336v-3.295l-.365-.335-2.835-2.595-.01-.008-.008-.008a1.875 1.875 0 01-.386-2.35l3.538-5.997h0l.005-.01a1.874 1.874 0 011.622-.937h.038l.037-.003c.187-.012.374.003.556.046l3.516 1.27.53.192.471-.31a16.012 16.012 0 011.85-1.052l.503-.243.11-.547.766-3.78v-.004a1.875 1.875 0 011.875-1.51l.011.001h7.053a1.875 1.875 0 011.875 1.51v.003l.765 3.78.11.545.5.243c.635.31 1.248.66 1.835 1.051l.46.305.523-.176 3.636-1.227.004-.002c.193-.062.394-.094.596-.092h.008a1.874 1.874 0 011.622.938h0l.005.009 3.54 6 .006.01.005.008a1.875 1.875 0 01-.355 2.39v.001l-2.878 2.517-.384.336v2.806zm-1.92 11.926l.865.292.464-.786 3.54-6 .465-.79-.678-.615-3.631-3.298c.17-1.272.17-2.56.001-3.833l3.618-3.192.697-.615-.472-.8-3.54-6-.459-.778-.858.28-4.584 1.492a15.17 15.17 0 00-3.294-1.916l-.946-4.728-.18-.904h-8.927l-.18.907-.945 4.778a14.412 14.412 0 00-3.307 1.916l-4.559-1.542-.865-.292-.464.786-3.54 6-.465.79.678.615L9.52 22.13a14.476 14.476 0 00-.001 3.833L5.9 29.156l-.697.615.472.8 3.54 6 .459.778.858-.28 4.584-1.492a15.167 15.167 0 003.294 1.916l.946 4.728.18.904h8.927l.18-.907.945-4.778a14.412 14.412 0 003.307-1.916l4.559 1.542z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.25"}
      ></path>

      <path
        d={
          "M31.875 24h0v.011a7.785 7.785 0 01-7.864 7.864L24 33v-1.125A7.875 7.875 0 1131.875 24zM24 16.875A6.991 6.991 0 0016.875 24 6.99 6.99 0 0024 31.125 6.99 6.99 0 0031.125 24 6.991 6.991 0 0024 16.875z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.25"}
      ></path>
    </svg>
  );
}

export default IconSettings3Icon;
/* prettier-ignore-end */
