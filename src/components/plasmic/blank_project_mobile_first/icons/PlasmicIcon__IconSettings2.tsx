// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSettings2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSettings2Icon(props: IconSettings2IconProps) {
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
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M42.75 27.235v.495l.365.335 3.072 2.811.009.008.009.008a2.125 2.125 0 01.435 2.667h0l-.005.009-3.702 6.495-.001.002a2.125 2.125 0 01-1.837 1.06h-.007a2.122 2.122 0 01-.676-.105l-.004-.001-3.923-1.33-.521-.176-.46.303c-.645.426-1.319.808-2.015 1.145l-.502.243-.11.547-.83 4.095v.004a2.125 2.125 0 01-2.125 1.71h-7.714a2.125 2.125 0 01-2.124-1.71l-.001-.004-.83-4.095-.11-.545-.499-.244a17.321 17.321 0 01-1.999-1.144l-.46-.305-.522.176-3.94 1.33-.004.001a2.125 2.125 0 01-.677.105h-.007a2.126 2.126 0 01-1.838-1.063h0l-.006-.009-3.835-6.5h0l-.005-.009a2.125 2.125 0 01.436-2.71l.007-.006.007-.006 3.071-2.73.378-.336V24.27l-.365-.335-3.072-2.811-.009-.008-.009-.008a2.125 2.125 0 01-.437-2.665l3.833-6.496h0l.006-.01a2.125 2.125 0 011.838-1.062h.038l.037-.003a2.15 2.15 0 01.635.053l3.814 1.378.53.192.472-.31a17.54 17.54 0 012.015-1.146l.502-.243.11-.547.83-4.095V6.15a2.125 2.125 0 012.125-1.71h7.649a2.125 2.125 0 012.125 1.71v.004l.83 4.095.11.545.499.244c.69.336 1.359.719 1.999 1.144l.46.305.522-.176 3.94-1.33.004-.001c.219-.071.447-.107.677-.105h.007a2.127 2.127 0 011.838 1.063h0l.006.009 3.835 6.5.005.01.006.008a2.125 2.125 0 01-.404 2.71l-3.117 2.727-.384.336v2.997zm-2.144 12.83l.865.293.464-.786 3.835-6.5.466-.79-.678-.615-3.971-3.606c.192-1.402.193-2.823.001-4.226l3.958-3.491.696-.615-.472-.8-3.835-6.5-.459-.778-.858.28-5.013 1.631a16.336 16.336 0 00-3.633-2.113l-1.034-5.17-.18-.904H21.24l-.18.907-1.033 5.226a15.523 15.523 0 00-3.648 2.113l-4.986-1.687-.865-.292-.464.786-3.835 6.5-.466.79.678.615 3.971 3.606a15.589 15.589 0 00-.001 4.226l-3.958 3.491-.696.615.472.8 3.835 6.5.459.778.858-.28 5.013-1.631a16.336 16.336 0 003.633 2.113l1.034 5.17.18.904h9.517l.18-.907 1.033-5.226a15.523 15.523 0 003.648-2.113l4.986 1.687z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.25"}
      ></path>

      <path
        d={
          "M34.625 26h0v.011a8.528 8.528 0 01-8.614 8.614L26 35.75v-1.125A8.624 8.624 0 1134.625 26zM26 18.375A7.48 7.48 0 0018.375 26 7.48 7.48 0 0026 33.625 7.48 7.48 0 0033.625 26 7.48 7.48 0 0026 18.375z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"2.25"}
      ></path>
    </svg>
  );
}

export default IconSettings2Icon;
/* prettier-ignore-end */
