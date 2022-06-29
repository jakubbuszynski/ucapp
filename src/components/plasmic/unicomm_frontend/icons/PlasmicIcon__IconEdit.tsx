// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconEditIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconEditIcon(props: IconEditIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 33"}
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
          "M26.057 27.429h-19.2a1.371 1.371 0 000 2.742h19.2a1.371 1.371 0 100-2.742zm-19.2-2.743h.124l5.718-.521a2.744 2.744 0 001.66-.782L26.702 11.04a2.633 2.633 0 00-.096-3.717l-3.758-3.757A2.743 2.743 0 0019.2 3.47L6.857 15.813a2.743 2.743 0 00-.782 1.659l-.59 5.719a1.371 1.371 0 001.372 1.495zm14.085-19.2l3.744 3.744-2.743 2.674-3.676-3.675 2.675-2.743zM8.736 17.706l7.721-7.667 3.703 3.703-7.68 7.68-4.114.384.37-4.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconEditIcon;
/* prettier-ignore-end */
