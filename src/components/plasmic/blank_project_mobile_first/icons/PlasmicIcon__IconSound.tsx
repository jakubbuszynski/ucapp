// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSoundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSoundIcon(props: IconSoundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M12.71 3.454a.75.75 0 01.415.671v15.75a.75.75 0 01-1.2.6l-5.8-4.35h-3.5a.75.75 0 01-.75-.75v-6.75a.75.75 0 01.75-.75h3.5l5.8-4.35a.75.75 0 01.785-.07zm-1.085 2.171l-4.8 3.6a.75.75 0 01-.45.15h-3v5.25h3a.75.75 0 01.45.15l4.8 3.6V5.625zm3.83 3.415a.75.75 0 011.005-.336l-.335.671.336-.67h.002l.004.002.008.005a1.633 1.633 0 01.095.053c.057.033.134.081.223.144.177.126.41.315.643.577.47.53.939 1.357.939 2.514a3.71 3.71 0 01-.94 2.514 3.826 3.826 0 01-.865.721 2.15 2.15 0 01-.095.053l-.008.005-.004.001-.002.002-.336-.671.335.67a.75.75 0 01-.676-1.338A2.211 2.211 0 0016.875 12a2.201 2.201 0 00-.56-1.517 2.323 2.323 0 00-.505-.426 1.128 1.128 0 00-.024-.014h-.001a.75.75 0 01-.33-1.003zm.333 4.915z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.095 5.182a.75.75 0 011.057-.087l-.485.572.485-.572.002.002.004.003.01.008a2.944 2.944 0 01.132.122c.084.081.201.198.339.35A9.588 9.588 0 0122.083 12a9.588 9.588 0 01-2.444 6.42 6.94 6.94 0 01-.44.445c-.014.01-.024.02-.032.027l-.01.008-.003.003-.002.002-.485-.572.485.572a.75.75 0 01-.972-1.142l.001-.001.014-.013.068-.063a5.46 5.46 0 00.265-.273A8.087 8.087 0 0020.584 12a8.088 8.088 0 00-2.056-5.412 5.466 5.466 0 00-.347-.35h-.001m-.085-1.056a.75.75 0 00.085 1.055zm.085 1.055z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSoundIcon;
/* prettier-ignore-end */
