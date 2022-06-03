// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: fM-PBE3gad
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
import sty from "./PlasmicPopup.module.css"; // plasmic-import: fM-PBE3gad/css

export type PlasmicPopup__VariantMembers = {};

export type PlasmicPopup__VariantsArgs = {};
type VariantPropType = keyof PlasmicPopup__VariantsArgs;
export const PlasmicPopup__VariantProps = new Array<VariantPropType>();

export type PlasmicPopup__ArgsType = {};
type ArgPropType = keyof PlasmicPopup__ArgsType;
export const PlasmicPopup__ArgProps = new Array<ArgPropType>();

export type PlasmicPopup__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPopupProps {
  className?: string;
}

export const defaultPopup__Args: Partial<PlasmicPopup__ArgsType> = {};

function PlasmicPopup__RenderFunc(props: {
  variants: PlasmicPopup__VariantsArgs;
  args: PlasmicPopup__ArgsType;
  overrides: PlasmicPopup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultPopup__Args, props.args);
  const $props = args;

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
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopup__VariantsArgs;
    args?: PlasmicPopup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPopup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPopup__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPopup__ArgProps,
      internalVariantPropNames: PlasmicPopup__VariantProps
    });

    return PlasmicPopup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPopup";
  } else {
    func.displayName = `PlasmicPopup.${nodeName}`;
  }
  return func;
}

export const PlasmicPopup = Object.assign(
  // Top-level PlasmicPopup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPopup
    internalVariantProps: PlasmicPopup__VariantProps,
    internalArgProps: PlasmicPopup__ArgProps
  }
);

export default PlasmicPopup;
/* prettier-ignore-end */