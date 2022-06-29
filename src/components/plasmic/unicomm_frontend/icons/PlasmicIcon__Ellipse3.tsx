// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3Icon(props: Ellipse3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 56"}
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

      <g filter={"url(#UrHj3mSBTka)"}>
        <circle cx={"28"} cy={"28"} r={"28"} fill={"currentColor"}></circle>
      </g>

      <defs>
        <filter
          id={"UrHj3mSBTka"}
          x={"-4"}
          y={"-4"}
          width={"64"}
          height={"64"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"4"} dy={"4"}></feOffset>

          <feGaussianBlur stdDeviation={"5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={
              "0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 1 0"
            }
          ></feColorMatrix>

          <feBlend
            in2={"shape"}
            result={"effect1_innerShadow_2124_172951"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dx={"-4"} dy={"-4"}></feOffset>

          <feGaussianBlur stdDeviation={"5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"effect1_innerShadow_2124_172951"}
            result={"effect2_innerShadow_2124_172951"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse3Icon;
/* prettier-ignore-end */
