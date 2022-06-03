// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 75"}
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
          "M35.011 35a17.5 17.5 0 0117.5 17.775 2.5 2.5 0 003.12 2.46 7.515 7.515 0 019.38 7.265 7.5 7.5 0 01-7.5 7.5h-42.5a10 10 0 11.5-19.99 2.5 2.5 0 002.55-1.875A17.51 17.51 0 0135.011 35zm22.365 15a22.5 22.5 0 00-43.6-4.95A15 15 0 0015.011 75h42.5a12.5 12.5 0 000-25h-.135z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M52.511 2.5a2.5 2.5 0 00-5 0v5a2.5 2.5 0 105 0v-5zm18.715 9.82a2.5 2.5 0 10-3.535-3.535l-3.54 3.535a2.503 2.503 0 003.54 3.54l3.535-3.54zM32.331 8.785a2.5 2.5 0 00-3.535 3.535l3.535 3.54a2.504 2.504 0 004.083-2.728 2.502 2.502 0 00-.543-.812l-3.54-3.535zm8.67 16.87a10.001 10.001 0 0118.925 3.07 10 10 0 01-2.445 7.92 27.512 27.512 0 012.58 4.49 15 15 0 10-24.2-16.125c1.76.055 3.48.275 5.14.645zm22.42 20.37c3 1.075 5.625 2.95 7.61 5.36a2.499 2.499 0 00.195-3.71l-3.535-3.535a2.5 2.5 0 00-4.27 1.885zm9.09-18.525a2.5 2.5 0 000 5h5a2.5 2.5 0 100-5h-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
