// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group39518IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group39518Icon(props: Group39518IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M1 22.95V10.752C1 5.703 4.837 1.55 9.753 1.05v12.196c0 5.049-3.836 9.202-8.753 9.702zM17.948 1h.418a4.635 4.635 0 010 9.269h-.418a4.634 4.634 0 110-9.269zm0 12.731h.418a4.634 4.634 0 110 9.269h-.418a4.635 4.635 0 010-9.269z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Group39518Icon;
/* prettier-ignore-end */
