// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector44StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector44StrokeIcon(props: Vector44StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 25"}
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
          "M2.256 3.088c-.665.446-1.053.908-1.192 1.355C.907 4.95.872 5.63.965 6.456c.093.822.309 1.763.628 2.775.639 2.024 1.68 4.3 2.925 6.437 1.245 2.138 2.683 4.117 4.104 5.555.711.719 1.408 1.292 2.066 1.684.66.393 1.252.585 1.762.585.508 0 1.104-.196 1.774-.599.666-.4 1.376-.987 2.1-1.72 1.451-1.467 2.925-3.481 4.203-5.643 1.279-2.16 2.35-4.448 3.005-6.455.328-1.004.548-1.928.64-2.723.093-.803.052-1.44-.11-1.891-.145-.408-.545-.851-1.236-1.29-.682-.433-1.596-.829-2.678-1.165-2.162-.672-4.932-1.085-7.7-1.102-2.744-.017-5.469.357-7.585 1.017-1.059.33-1.948.726-2.607 1.167zm2.332-2.03C6.811.367 9.633-.016 12.453.002c2.847.017 5.709.44 7.97 1.143 1.129.351 2.125.777 2.897 1.267.762.484 1.36 1.065 1.605 1.75.227.635.256 1.428.155 2.294-.1.872-.338 1.856-.678 2.897-.68 2.082-1.781 4.43-3.085 6.635-1.304 2.203-2.821 4.282-4.338 5.817-.76.767-1.528 1.409-2.28 1.861-.749.45-1.511.731-2.249.731-.735 0-1.492-.274-2.234-.715-.744-.443-1.502-1.073-2.247-1.826-1.491-1.508-2.972-3.555-4.243-5.736C2.455 13.937 1.383 11.6.721 9.5.389 8.45.158 7.453.057 6.557c-.1-.89-.075-1.707.134-2.378.225-.724.802-1.335 1.552-1.838.757-.506 1.735-.935 2.845-1.281z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector44StrokeIcon;
/* prettier-ignore-end */
