// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHumidityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHumidityIcon(props: IconHumidityIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={"M12 18v-1.5a2.472 2.472 0 002.25-2.25h1.5A3.95 3.95 0 0112 18z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 21a6.758 6.758 0 01-6.75-6.75 7.488 7.488 0 011.12-3.716l4.995-7.956a.78.78 0 011.27 0l4.973 7.917a7.547 7.547 0 011.142 3.755A6.758 6.758 0 0112 21zm0-16.614l-4.337 6.906a5.983 5.983 0 00-.913 2.958 5.25 5.25 0 0010.5 0 6.047 6.047 0 00-.936-2.996L12 4.386z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconHumidityIcon;
/* prettier-ignore-end */
