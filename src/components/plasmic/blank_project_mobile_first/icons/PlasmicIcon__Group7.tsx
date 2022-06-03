// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group7Icon(props: Group7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 49 45"}
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
          "M21.007 21a10.5 10.5 0 0110.5 10.665 1.5 1.5 0 001.872 1.476 4.51 4.51 0 015.628 4.359 4.5 4.5 0 01-4.5 4.5h-25.5a6 6 0 11.3-11.994 1.5 1.5 0 001.53-1.125A10.506 10.506 0 0121.007 21zm13.419 9a13.5 13.5 0 00-26.16-2.97A9 9 0 009.006 45h25.5a7.5 7.5 0 000-15h-.08z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M31.507 1.5a1.5 1.5 0 10-3 0v3a1.5 1.5 0 103 0v-3zm11.229 5.892a1.501 1.501 0 10-2.121-2.121L38.49 7.392a1.502 1.502 0 102.124 2.124l2.12-2.124zM19.399 5.271a1.5 1.5 0 00-2.121 2.121l2.12 2.124a1.502 1.502 0 002.125-2.124l-2.124-2.121zM24.6 15.393a6 6 0 119.888 6.594 16.507 16.507 0 011.548 2.694 9 9 0 10-14.52-9.675 16.55 16.55 0 013.084.387zm13.452 12.222c1.8.645 3.375 1.77 4.566 3.216a1.502 1.502 0 00.117-2.226l-2.121-2.121a1.5 1.5 0 00-2.562 1.131zM43.507 16.5a1.5 1.5 0 100 3h3a1.5 1.5 0 100-3h-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
