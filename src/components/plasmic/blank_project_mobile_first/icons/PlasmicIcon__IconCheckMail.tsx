// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCheckMailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCheckMailIcon(props: IconCheckMailIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 52"}
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
          "M48.75 17.875a14.624 14.624 0 11-29.248 0 14.624 14.624 0 0129.248 0zm-6.974-6.025a1.625 1.625 0 00-2.302 0l-8.599 8.602-2.1-2.103a1.628 1.628 0 00-2.3 2.302l3.25 3.25a1.625 1.625 0 002.3 0l9.75-9.75a1.625 1.625 0 000-2.301zM39 42.25v-7.173a17.598 17.598 0 003.25-1.277v8.45a6.5 6.5 0 01-6.5 6.5h-26a6.5 6.5 0 01-6.5-6.5v-19.5a6.5 6.5 0 016.5-6.5h6.572a18.11 18.11 0 000 3.25H9.75a3.25 3.25 0 00-3.25 3.25v2.405l16.25 8.749 1.768-.952a17.85 17.85 0 003.588 1.761l-4.583 2.47a1.625 1.625 0 01-1.543 0L6.5 28.843V42.25a3.25 3.25 0 003.25 3.25h26A3.25 3.25 0 0039 42.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconCheckMailIcon;
/* prettier-ignore-end */
