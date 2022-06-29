// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group679IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group679Icon(props: Group679IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40 28H2.434a1.4 1.4 0 01-1.014-.442A1.548 1.548 0 011 26.492a1.52 1.52 0 01.109-.573 1.46 1.46 0 01.314-.482A1.367 1.367 0 012.42 25H40"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M39 25h6.923c.285 0 .56.158.761.44.203.28.316.662.316 1.06s-.114.78-.316 1.06c-.202.282-.476.44-.761.44H39m6.74.263v3.955a11.86 11.86 0 01-11.86 11.855H14.12A11.86 11.86 0 012.26 32.218v-3.955"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.31 43.938l-2.81 2.35a1.09 1.09 0 01-.71.26 1.11 1.11 0 01-.71-1.96l1.64-1.37m28.575 0l1.64 1.37a1.11 1.11 0 01-.71 1.96 1.09 1.09 0 01-.725-.26l-2.825-2.35M12.397 8.667h3.202c.637 0 1.248.326 1.698.907.45.582.703 1.37.703 2.192v1.567h-8v-1.567c0-.821.252-1.609.702-2.19.45-.58 1.059-.908 1.695-.91v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.667 25a1 1 0 01-1-1V7.194l1 17.806zm0 0h1.616a1 1 0 001-1m-2.616 1l2.616-1m0 0V7.193a2.6 2.6 0 01.715-1.802 2.33 2.33 0 011.679-.727 2.33 2.33 0 011.679.727c.453.471.715 1.12.715 1.802v.622a1 1 0 001 1h1.596a1 1 0 001-1v-.62L7.283 24zM9.655 1a5.83 5.83 0 00-2.305.477c-.73.315-1.39.775-1.944 1.352a6.208 6.208 0 00-1.29 2.008 6.37 6.37 0 00-.45 2.356L9.656 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group679Icon;
/* prettier-ignore-end */
