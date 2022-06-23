// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconConfirmCallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconConfirmCallIcon(props: IconConfirmCallIconProps) {
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
        d={
          "M13.577 4.534l2.846-.857a5.571 5.571 0 016.69 3.05l1.772 3.94a5.572 5.572 0 01-1.283 6.36l-3.094 2.884a.43.43 0 00-.093.126c-.324.661.168 2.429 1.71 5.1 1.738 3.01 3.08 4.2 3.702 4.016l4.062-1.243a5.572 5.572 0 016.145 2.07l2.517 3.485a5.572 5.572 0 01-.686 7.306L35.7 42.819a6.428 6.428 0 01-5.73 1.627c-6.028-1.255-11.43-6.11-16.25-14.458C8.896 21.634 7.393 14.52 9.33 8.669a6.428 6.428 0 014.249-4.135h-.002zm.744 2.462a3.858 3.858 0 00-2.549 2.48c-1.67 5.042-.317 11.447 4.174 19.226 4.488 7.775 9.353 12.146 14.548 13.226a3.857 3.857 0 003.439-.977l2.163-2.047a3 3 0 00.37-3.934l-2.516-3.487a3 3 0 00-3.309-1.114l-4.071 1.246c-2.253.67-4.372-1.207-6.672-5.194-1.95-3.374-2.625-5.812-1.792-7.514.161-.33.38-.626.648-.876l3.095-2.885a3 3 0 00.69-3.425l-1.77-3.938a3 3 0 00-3.604-1.642l-2.846.857.002-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconConfirmCallIcon;
/* prettier-ignore-end */
