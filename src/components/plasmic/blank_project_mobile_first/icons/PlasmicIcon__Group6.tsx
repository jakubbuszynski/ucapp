// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 34"}
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
          "M15.755 15.75a7.875 7.875 0 017.875 7.999 1.125 1.125 0 001.404 1.107 3.382 3.382 0 014.221 3.269A3.375 3.375 0 0125.88 31.5H6.755a4.5 4.5 0 11.225-8.995 1.125 1.125 0 001.148-.844 7.88 7.88 0 017.627-5.911zM25.82 22.5A10.125 10.125 0 006.2 20.273a6.75 6.75 0 00.556 13.477H25.88a5.625 5.625 0 100-11.25h-.06z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M23.63 1.125a1.125 1.125 0 10-2.25 0v2.25a1.125 1.125 0 102.25 0v-2.25zm8.422 4.419a1.125 1.125 0 10-1.59-1.59l-1.594 1.59a1.127 1.127 0 001.593 1.593l1.59-1.593zm-17.503-1.59a1.125 1.125 0 00-1.59 1.59l1.59 1.593a1.127 1.127 0 001.593-1.593l-1.593-1.59zm3.902 7.59a4.5 4.5 0 117.416 4.946c.447.633.837 1.31 1.16 2.02a6.749 6.749 0 10-10.89-7.256c.793.025 1.567.124 2.314.29zm10.089 9.167a7.896 7.896 0 013.424 2.412 1.123 1.123 0 00.088-1.67l-1.59-1.59a1.125 1.125 0 00-1.922.848zm4.09-8.336a1.125 1.125 0 100 2.25h2.25a1.125 1.125 0 100-2.25h-2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
