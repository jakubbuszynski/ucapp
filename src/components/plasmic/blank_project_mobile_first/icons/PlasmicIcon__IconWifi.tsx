// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconWifiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconWifiIcon(props: IconWifiIconProps) {
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
          "M26.931 11.814a15.772 15.772 0 011.813 2.184.8.8 0 01-1.317.91 13.78 13.78 0 00-21.113-1.962A14.492 14.492 0 004.702 14.9a.8.8 0 01-1.313-.912 15.999 15.999 0 011.793-2.176 15.38 15.38 0 0121.75 0v.001zm-3.577 3.157a10.62 10.62 0 011.91 2.65.8.8 0 01-1.424.728 9.028 9.028 0 00-1.616-2.247 8.721 8.721 0 00-13.946 2.224.8.8 0 11-1.427-.723 10.32 10.32 0 0116.504-2.632h-.001zm-2.735 3.995a6.583 6.583 0 011.36 2.007.8.8 0 01-1.465.641 5.015 5.015 0 00-1.024-1.516 4.853 4.853 0 00-6.864 0 4.87 4.87 0 00-1.01 1.5.8.8 0 11-1.466-.641 6.48 6.48 0 011.344-1.99 6.453 6.453 0 019.125 0zm-3.078 3.093a2.078 2.078 0 11-2.938 2.938 2.078 2.078 0 012.938-2.938z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconWifiIcon;
/* prettier-ignore-end */
