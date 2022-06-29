// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAutoModeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAutoModeIcon(props: IconAutoModeIconProps) {
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
        d={
          "M18.06 2.83c-1.15-.77-2.46-1.32-3.86-1.61-.62-.12-1.2.35-1.2.99 0 .46.31.88.76.97 1.17.23 2.26.7 3.21 1.34.39.26.9.19 1.23-.14.46-.45.39-1.2-.14-1.55zM11 2.21c0-.64-.58-1.11-1.2-.99-1.4.29-2.71.84-3.86 1.61-.52.35-.59 1.1-.15 1.54.33.33.84.4 1.23.14.96-.64 2.04-1.1 3.21-1.34.46-.08.77-.5.77-.96zM4.38 5.79a1 1 0 00-1.54.15A10.66 10.66 0 001.23 9.8a1 1 0 00.98 1.2c.46 0 .88-.31.97-.76.23-1.17.7-2.26 1.34-3.22.25-.38.18-.9-.14-1.23zM21.79 11a1 1 0 00.98-1.2c-.29-1.4-.84-2.7-1.61-3.86-.35-.52-1.1-.6-1.54-.15-.33.33-.4.84-.14 1.23.64.96 1.1 2.05 1.34 3.22.09.45.51.76.97.76zM8 12.46l2.44 1.11 1.1 2.43a.5.5 0 00.91 0l1.11-2.44 2.44-1.1a.5.5 0 000-.91l-2.44-1.11L12.46 8a.5.5 0 00-.91 0l-1.11 2.44L8 11.54c-.39.18-.39.74 0 .92z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 21a8.96 8.96 0 01-7.46-4H6c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.7c1.99 2.84 5.27 4.7 9 4.7 4.45 0 8.27-2.64 10-6.43a1.01 1.01 0 00-.69-1.39c-.45-.1-.93.11-1.12.54C18.77 18.83 15.64 21 12 21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAutoModeIcon;
/* prettier-ignore-end */
