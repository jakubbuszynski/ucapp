// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconMissedCallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconMissedCallIcon(props: IconMissedCallIconProps) {
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
          "M10.456 3.386c-1.664-.423-3.408-.244-4.774.521-1.392.778-2.368 2.157-2.416 4.002-.074 2.883.593 6.752 3.243 11.293 2.616 4.484 5.504 7.172 7.9 8.77 1.514 1.009 3.186 1.036 4.615.378 1.408-.648 2.55-1.942 3.144-3.547a2.94 2.94 0 00-.192-2.457l-1.526-2.724a4 4 0 00-4.919-1.782l-1.065.408c-.517.197-.992.106-1.261-.16-.904-.888-1.55-2.093-1.843-3.392-.093-.41.096-.893.547-1.234l.961-.726a4 4 0 001.061-5.182l-1.555-2.712a3.086 3.086 0 00-1.92-1.456zm-5.59 4.566c.032-1.238.659-2.123 1.596-2.648.964-.54 2.279-.704 3.6-.368a1.487 1.487 0 01.927.702l1.553 2.712a2.4 2.4 0 01-.635 3.11l-.961.726c-.832.627-1.408 1.702-1.146 2.862.355 1.571 1.14 3.06 2.283 4.182.835.82 2.026.868 2.954.512l1.065-.408a2.4 2.4 0 012.952 1.07l1.525 2.724c.192.342.224.752.088 1.12-.464 1.256-1.336 2.198-2.312 2.648-.955.44-2.035.427-3.057-.256-2.194-1.462-4.912-3.97-7.408-8.245-2.498-4.288-3.09-7.862-3.023-10.443h-.001zm23.7-4.518a.8.8 0 010 1.13L24.331 8.8l4.235 4.234a.8.8 0 11-1.132 1.13L23.2 9.932l-4.234 4.234a.8.8 0 11-1.132-1.131L22.069 8.8l-4.235-4.235a.8.8 0 111.132-1.131L23.2 7.667l4.234-4.233a.8.8 0 011.132 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconMissedCallIcon;
/* prettier-ignore-end */
