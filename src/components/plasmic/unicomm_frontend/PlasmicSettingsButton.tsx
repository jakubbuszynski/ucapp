// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: 5o0BGUmfu3
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
import sty from "./PlasmicSettingsButton.module.css"; // plasmic-import: 5o0BGUmfu3/css

import Ellipse263Icon from "./icons/PlasmicIcon__Ellipse263"; // plasmic-import: l6zKJEbUS/icon
import IconSettings3Icon from "./icons/PlasmicIcon__IconSettings3"; // plasmic-import: Y72ZX9FUhc/icon

export type PlasmicSettingsButton__VariantMembers = {};

export type PlasmicSettingsButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSettingsButton__VariantsArgs;
export const PlasmicSettingsButton__VariantProps = new Array<VariantPropType>();

export type PlasmicSettingsButton__ArgsType = {
  destination?: string;
  onClick?: boolean;
};

type ArgPropType = keyof PlasmicSettingsButton__ArgsType;
export const PlasmicSettingsButton__ArgProps = new Array<ArgPropType>(
  "destination",
  "onClick"
);

export type PlasmicSettingsButton__OverridesType = {
  root?: p.Flex<"button">;
  button?: p.Flex<"svg">;
  svg?: p.Flex<"svg">;
};

export interface DefaultSettingsButtonProps {
  destination?: string;
  onClick?: boolean;
  className?: string;
}

function PlasmicSettingsButton__RenderFunc(props: {
  variants: PlasmicSettingsButton__VariantsArgs;
  args: PlasmicSettingsButton__ArgsType;
  overrides: PlasmicSettingsButton__OverridesType;

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
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      disabled={args.destination}
    >
      <Ellipse263Icon
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(projectcss.all, sty.button)}
        onClick={"click" as const}
        path={"/settings" as const}
        role={"img"}
      />

      <IconSettings3Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button", "svg"],
  button: ["button"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  button: "svg";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSettingsButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSettingsButton__VariantsArgs;
    args?: PlasmicSettingsButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSettingsButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSettingsButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSettingsButton__ArgProps,
          internalVariantPropNames: PlasmicSettingsButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSettingsButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettingsButton";
  } else {
    func.displayName = `PlasmicSettingsButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSettingsButton = Object.assign(
  // Top-level PlasmicSettingsButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSettingsButton
    internalVariantProps: PlasmicSettingsButton__VariantProps,
    internalArgProps: PlasmicSettingsButton__ArgProps
  }
);

export default PlasmicSettingsButton;
/* prettier-ignore-end */
