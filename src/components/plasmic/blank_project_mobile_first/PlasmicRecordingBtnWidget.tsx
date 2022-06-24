// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: g8sFvLHOQr
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: wGQNdEnY25VfiXqc2ZGJrZ/projectcss
import sty from "./PlasmicRecordingBtnWidget.module.css"; // plasmic-import: g8sFvLHOQr/css

import Ellipse36Icon from "./icons/PlasmicIcon__Ellipse36"; // plasmic-import: 2XixHAoBao/icon
import IconMicPlusIcon from "./icons/PlasmicIcon__IconMicPlus"; // plasmic-import: ngJJ-GwnaY/icon

export type PlasmicRecordingBtnWidget__VariantMembers = {};

export type PlasmicRecordingBtnWidget__VariantsArgs = {};
type VariantPropType = keyof PlasmicRecordingBtnWidget__VariantsArgs;
export const PlasmicRecordingBtnWidget__VariantProps =
  new Array<VariantPropType>();

export type PlasmicRecordingBtnWidget__ArgsType = {};
type ArgPropType = keyof PlasmicRecordingBtnWidget__ArgsType;
export const PlasmicRecordingBtnWidget__ArgProps = new Array<ArgPropType>();

export type PlasmicRecordingBtnWidget__OverridesType = {
  root?: p.Flex<"div">;
  voiceMessage?: p.Flex<"div">;
  buttonRecordMessage2?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultRecordingBtnWidgetProps {
  className?: string;
}

export const defaultRecordingBtnWidget__Args: Partial<PlasmicRecordingBtnWidget__ArgsType> =
  {};

function PlasmicRecordingBtnWidget__RenderFunc(props: {
  variants: PlasmicRecordingBtnWidget__VariantsArgs;
  args: PlasmicRecordingBtnWidget__ArgsType;
  overrides: PlasmicRecordingBtnWidget__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultRecordingBtnWidget__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"voiceMessage"}
        data-plasmic-override={overrides.voiceMessage}
        className={classNames(projectcss.all, sty.voiceMessage)}
      >
        <div
          data-plasmic-name={"buttonRecordMessage2"}
          data-plasmic-override={overrides.buttonRecordMessage2}
          className={classNames(projectcss.all, sty.buttonRecordMessage2)}
        >
          <Ellipse36Icon
            className={classNames(projectcss.all, sty.svg__aTVtj)}
            role={"img"}
          />

          <IconMicPlusIcon
            className={classNames(projectcss.all, sty.svg__wM2Q)}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Nagraj notatkę"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "voiceMessage", "buttonRecordMessage2", "text"],
  voiceMessage: ["voiceMessage", "buttonRecordMessage2", "text"],
  buttonRecordMessage2: ["buttonRecordMessage2"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  voiceMessage: "div";
  buttonRecordMessage2: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRecordingBtnWidget__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRecordingBtnWidget__VariantsArgs;
    args?: PlasmicRecordingBtnWidget__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRecordingBtnWidget__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRecordingBtnWidget__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRecordingBtnWidget__ArgProps,
      internalVariantPropNames: PlasmicRecordingBtnWidget__VariantProps
    });

    return PlasmicRecordingBtnWidget__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRecordingBtnWidget";
  } else {
    func.displayName = `PlasmicRecordingBtnWidget.${nodeName}`;
  }
  return func;
}

export const PlasmicRecordingBtnWidget = Object.assign(
  // Top-level PlasmicRecordingBtnWidget renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    voiceMessage: makeNodeComponent("voiceMessage"),
    buttonRecordMessage2: makeNodeComponent("buttonRecordMessage2"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicRecordingBtnWidget
    internalVariantProps: PlasmicRecordingBtnWidget__VariantProps,
    internalArgProps: PlasmicRecordingBtnWidget__ArgProps
  }
);

export default PlasmicRecordingBtnWidget;
/* prettier-ignore-end */
