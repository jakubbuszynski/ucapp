// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector43StrokeStrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector43StrokeStrokeIcon(props: Vector43StrokeStrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 36"}
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
          "M6.818 1.554C10.118.538 14.308-.025 18.496 0c4.228.026 8.477.647 11.834 1.678 1.677.515 3.154 1.14 4.3 1.858 1.131.71 2.023 1.564 2.389 2.576.34.94.382 2.11.233 3.384-.151 1.285-.505 2.732-1.01 4.262-1.01 3.06-2.648 6.51-4.587 9.748-1.938 3.236-4.192 6.29-6.448 8.545-1.127 1.127-2.27 2.069-3.386 2.732-1.112.66-2.24 1.07-3.329 1.07-1.085 0-2.206-.399-3.307-1.047-1.105-.65-2.23-1.574-3.338-2.68C9.63 29.911 7.429 26.905 5.54 23.7c-1.89-3.207-3.483-6.641-4.468-9.726-.492-1.542-.837-3.01-.987-4.329-.15-1.31-.112-2.515.2-3.506.337-1.072 1.198-1.97 2.31-2.706C3.718 2.69 5.17 2.06 6.818 1.554zM18.494.37c-4.158-.025-8.31.534-11.567 1.537-1.628.501-3.044 1.117-4.127 1.835C1.72 4.456.938 5.293.637 6.25c-.29.923-.332 2.071-.185 3.355.146 1.287.485 2.73.972 4.258.975 3.053 2.556 6.462 4.435 9.65 1.878 3.187 4.062 6.165 6.249 8.352 1.093 1.093 2.194 1.994 3.264 2.624 1.069.628 2.124.996 3.12.996.998 0 2.06-.377 3.14-1.019 1.082-.642 2.2-1.562 3.314-2.676 2.228-2.226 4.465-5.254 6.392-8.473 1.928-3.22 3.553-6.646 4.553-9.674.5-1.514.846-2.937.993-4.189.147-1.247.099-2.352-.213-3.216-.324-.898-1.134-1.696-2.237-2.388-1.11-.696-2.554-1.308-4.213-1.817C26.904 1.013 22.691.396 18.494.37zm-.006.986c-4.079-.025-8.131.525-11.278 1.494-1.575.485-2.897 1.067-3.878 1.717C2.34 5.223 1.768 5.9 1.564 6.55c-.232.737-.284 1.73-.146 2.942.137 1.204.458 2.582.932 4.067.948 2.97 2.495 6.312 4.344 9.449 1.85 3.138 3.985 6.044 6.097 8.155 1.056 1.055 2.092 1.898 3.07 2.473.982.578 1.866.863 2.631.863.762 0 1.652-.291 2.648-.883.991-.589 2.046-1.45 3.123-2.527 2.154-2.154 4.344-5.11 6.243-8.284 1.899-3.171 3.49-6.53 4.463-9.475.486-1.473.813-2.827.95-3.992.137-1.176.076-2.105-.161-2.761-.214-.593-.806-1.242-1.836-1.888-1.014-.637-2.374-1.219-3.983-1.713-3.216-.988-7.335-1.595-11.451-1.62zM7.101 2.496c3.19-.981 7.28-1.535 11.39-1.51 4.146.026 8.302.637 11.557 1.637 1.628.5 3.02 1.093 4.07 1.752 1.059.664 1.732 1.37 1.987 2.076.265.733.322 1.727.18 2.93-.14 1.197-.474 2.577-.965 4.065-.983 2.976-2.587 6.36-4.497 9.55-1.91 3.19-4.117 6.173-6.299 8.354-1.09 1.09-2.17 1.974-3.195 2.584-1.028.61-1.984.935-2.837.935-.854 0-1.804-.317-2.819-.914-1.012-.596-2.073-1.461-3.143-2.53-2.14-2.14-4.294-5.073-6.155-8.23-1.86-3.156-3.419-6.523-4.377-9.523-.48-1.5-.806-2.904-.947-4.139C.91 8.295.958 7.245 1.21 6.44c.24-.764.892-1.502 1.917-2.18 1.02-.676 2.378-1.27 3.973-1.762z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector43StrokeStrokeIcon;
/* prettier-ignore-end */