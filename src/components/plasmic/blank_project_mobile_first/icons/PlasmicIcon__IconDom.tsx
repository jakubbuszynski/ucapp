// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconDomIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconDomIcon(props: IconDomIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M14.067 3.394A2.955 2.955 0 0116 2.67c.707 0 1.392.257 1.933.724l9 7.786A3.113 3.113 0 0128 13.533v13.41c0 .635-.246 1.244-.683 1.692a2.304 2.304 0 01-1.65.702H21a2.304 2.304 0 01-1.65-.701 2.426 2.426 0 01-.683-1.693v-7.524a.347.347 0 00-.098-.242.33.33 0 00-.236-.1h-4.666a.33.33 0 00-.236.1.347.347 0 00-.098.242v7.524a2.42 2.42 0 01-.683 1.692 2.304 2.304 0 01-1.65.702H6.333c-.306 0-.61-.062-.893-.183a2.33 2.33 0 01-.757-.518 2.4 2.4 0 01-.505-.777A2.448 2.448 0 014 26.943v-13.41c0-.907.39-1.767 1.067-2.353l9-7.786zm2.577 1.57a.985.985 0 00-1.288 0l-9 7.784a1.024 1.024 0 00-.356.784v13.41c0 .188.15.341.333.341H11a.329.329 0 00.236-.1.346.346 0 00.097-.242v-7.523c0-1.323 1.046-2.394 2.334-2.394h4.666c1.288 0 2.334 1.071 2.334 2.394v7.523c0 .19.149.342.333.342h4.667a.329.329 0 00.235-.1.346.346 0 00.098-.242V13.533a1.047 1.047 0 00-.356-.784l-9-7.786z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconDomIcon;
/* prettier-ignore-end */
