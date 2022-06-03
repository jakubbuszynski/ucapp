// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHeartIcon(props: IconHeartIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.5 15.9C2.5 9.59 7.664 4.5 14 4.5c3.283 0 6.122 1.765 8.028 3.345A22.04 22.04 0 0124 9.701c.513-.545 1.18-1.2 1.972-1.856C27.878 6.265 30.717 4.5 34 4.5c6.336 0 11.5 5.09 11.5 11.4 0 2.424-.486 6.414-3.229 11.173-2.738 4.75-7.678 10.185-16.461 15.585l-.006.003a3.47 3.47 0 01-3.608 0l-.006-.003c-8.783-5.4-13.723-10.835-16.461-15.585C2.986 22.314 2.5 18.324 2.5 15.9zm20.298-3.003l-.005-.006-.03-.038a16.32 16.32 0 00-.665-.787 19.13 19.13 0 00-1.985-1.911C18.4 8.735 16.24 7.5 14 7.5c-4.708 0-8.5 3.775-8.5 8.4 0 1.99.39 5.445 2.828 9.675 2.443 4.238 6.99 9.335 15.43 14.525a.47.47 0 00.484 0c8.44-5.19 12.987-10.287 15.43-14.525 2.439-4.23 2.828-7.685 2.828-9.675 0-4.625-3.792-8.4-8.5-8.4-2.239 0-4.4 1.235-6.113 2.655a19.13 19.13 0 00-2.52 2.533 9.65 9.65 0 00-.13.165l-.03.038-.005.006a1.5 1.5 0 01-2.403.002v-.001h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconHeartIcon;
/* prettier-ignore-end */
