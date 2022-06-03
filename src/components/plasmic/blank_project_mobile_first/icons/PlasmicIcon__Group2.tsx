// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 43"}
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
          "M15.752.728a2.017 2.017 0 01.21 2.253 18.923 18.923 0 00-2.306 9.083c0 10.556 8.606 19.104 19.212 19.104 1.384 0 2.73-.145 4.025-.42a2.067 2.067 0 012.126.83 1.924 1.924 0 01-.081 2.344 21.917 21.917 0 01-17.033 8.08C9.803 42.002 0 32.252 0 20.24 0 11.197 5.55 3.443 13.452.156a1.974 1.974 0 012.3.572zm-3 2.712A19.083 19.083 0 002.691 20.239c0 10.553 8.608 19.101 19.214 19.101a19.208 19.208 0 0013.664-5.676c-.884.11-1.785.166-2.7.166-12.103 0-21.903-9.75-21.903-21.764 0-3.063.635-5.98 1.787-8.626z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M28.337 8.263a.57.57 0 011.081 0l1.016 3.05a4.557 4.557 0 002.88 2.88l3.05 1.017a.57.57 0 010 1.081l-3.05 1.016a4.553 4.553 0 00-2.88 2.88l-1.016 3.05a.569.569 0 01-1.081 0l-1.016-3.05a4.553 4.553 0 00-2.88-2.88l-3.05-1.016a.57.57 0 010-1.082l3.05-1.015a4.551 4.551 0 002.88-2.88l1.016-3.05zM36.394.26a.38.38 0 01.719 0l.677 2.032a3.031 3.031 0 001.922 1.921l2.032.678a.38.38 0 010 .719l-2.032.677a3.035 3.035 0 00-1.922 1.922l-.677 2.032a.38.38 0 01-.72 0l-.677-2.032a3.034 3.034 0 00-1.921-1.922l-2.032-.677a.38.38 0 010-.72l2.032-.677a3.031 3.031 0 001.921-1.921l.678-2.03V.26z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
