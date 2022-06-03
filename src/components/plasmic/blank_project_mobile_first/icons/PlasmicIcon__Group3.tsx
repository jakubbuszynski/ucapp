// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 37"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 1.333C0 .597.597 0 1.333 0h42a1.333 1.333 0 110 2.667h-1.666V34h1.666a1.333 1.333 0 110 2.667h-42a1.333 1.333 0 010-2.667H3V2.667H1.333A1.333 1.333 0 010 1.333zm5.667 1.334V34H21V2.667H5.667zm18 0V34H39V2.667H23.667zM31.333 13c.737 0 1.334.597 1.334 1.333v8a1.333 1.333 0 01-2.667 0v-8c0-.736.597-1.333 1.333-1.333z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.333 13c.737 0 1.334.597 1.334 1.333v4.781l.723-.724a1.333 1.333 0 111.886 1.886l-3 3-.004.005a1.328 1.328 0 01-.939.386 1.33 1.33 0 01-.938-.387l-.005-.004-3-3a1.333 1.333 0 011.886-1.886l.724.724v-4.78c0-.737.597-1.334 1.333-1.334zm17.058.39c.52-.52 1.364-.52 1.885 0l3 3a1.333 1.333 0 01-.943 2.277h-6a1.333 1.333 0 01-.942-2.277l3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
