// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: K7N9AoXVMq
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

import projectcss from "../blank_project_mobile_first/plasmic_blank_project_mobile_first.module.css"; // plasmic-import: wGQNdEnY25VfiXqc2ZGJrZ/projectcss
import sty from "./PlasmicModsBtn.module.css"; // plasmic-import: K7N9AoXVMq/css

import Group4Icon from "../blank_project_mobile_first/icons/PlasmicIcon__Group4"; // plasmic-import: e7xl9pDzGf/icon

export type PlasmicModsBtn__VariantMembers = {};

export type PlasmicModsBtn__VariantsArgs = {};
type VariantPropType = keyof PlasmicModsBtn__VariantsArgs;
export const PlasmicModsBtn__VariantProps = new Array<VariantPropType>();

export type PlasmicModsBtn__ArgsType = {};
type ArgPropType = keyof PlasmicModsBtn__ArgsType;
export const PlasmicModsBtn__ArgProps = new Array<ArgPropType>();

export type PlasmicModsBtn__OverridesType = {
  root?: p.Flex<"div">;
  iconModes?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultModsBtnProps {
  className?: string;
}

function PlasmicModsBtn__RenderFunc(props: {
  variants: PlasmicModsBtn__VariantsArgs;
  args: PlasmicModsBtn__ArgsType;
  overrides: PlasmicModsBtn__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"iconModes"}
        data-plasmic-override={overrides.iconModes}
        className={classNames(projectcss.all, sty.iconModes)}
      >
        <Group4Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Tryby"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconModes", "svg", "text"],
  iconModes: ["iconModes", "svg"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconModes: "div";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicModsBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicModsBtn__VariantsArgs;
    args?: PlasmicModsBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicModsBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicModsBtn__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicModsBtn__ArgProps,
          internalVariantPropNames: PlasmicModsBtn__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicModsBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicModsBtn";
  } else {
    func.displayName = `PlasmicModsBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicModsBtn = Object.assign(
  // Top-level PlasmicModsBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconModes: makeNodeComponent("iconModes"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicModsBtn
    internalVariantProps: PlasmicModsBtn__VariantProps,
    internalArgProps: PlasmicModsBtn__ArgProps
  }
);

export default PlasmicModsBtn;
/* prettier-ignore-end */