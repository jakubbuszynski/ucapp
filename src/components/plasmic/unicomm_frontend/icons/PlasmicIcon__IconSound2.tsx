// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSound2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSound2Icon(props: IconSound2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
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
          "M25.42 6.908a1.5 1.5 0 01.83 1.342v31.5a1.5 1.5 0 01-2.4 1.2l-11.6-8.7h-7a1.5 1.5 0 01-1.5-1.5v-13.5a1.5 1.5 0 011.5-1.5h7l11.6-8.7a1.5 1.5 0 011.57-.142zm-2.17 4.342l-9.6 7.2a1.5 1.5 0 01-.9.3h-6v10.5h6c.325 0 .64.105.9.3l9.6 7.2v-25.5zm7.658 6.83a1.5 1.5 0 012.013-.672l-.671 1.342c.67-1.342.672-1.341.672-1.341h.002l.003.002.007.004.017.009a3.268 3.268 0 01.19.105c.114.068.267.164.445.29.354.251.82.63 1.285 1.153.942 1.06 1.879 2.714 1.879 5.028 0 2.314-.937 3.968-1.879 5.028a7.65 7.65 0 01-1.285 1.153 6.35 6.35 0 01-.635.395l-.017.01-.007.003-.005.002-.672-1.341.67 1.342a1.5 1.5 0 01-1.353-2.678h.002l.01-.006.038-.022c.05-.03.132-.08.235-.153a4.65 4.65 0 00.777-.698c.558-.628 1.121-1.6 1.121-3.035 0-1.436-.563-2.407-1.121-3.035a4.646 4.646 0 00-.777-.698 3.388 3.388 0 00-.283-.18l-.002-.001a1.5 1.5 0 01-.659-2.007zm.669 9.83z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M36.19 10.363a1.5 1.5 0 012.114-.174l-.97 1.144.97-1.143.002.001.003.003.007.006.019.017.061.054a13.902 13.902 0 01.882.889A19.176 19.176 0 0144.167 24a19.176 19.176 0 01-4.89 12.84 13.859 13.859 0 01-.88.89l-.062.053-.02.017-.006.006-.004.004-.972-1.143.97 1.144a1.5 1.5 0 01-1.944-2.285l.002-.001.001-.002a10.85 10.85 0 00.693-.699A16.175 16.175 0 0041.166 24a16.175 16.175 0 00-4.11-10.824 10.85 10.85 0 00-.666-.673l-.028-.025-.003-.003h.001l.001.002m-.172-2.113a1.5 1.5 0 00.17 2.111zm.17 2.111z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSound2Icon;
/* prettier-ignore-end */
