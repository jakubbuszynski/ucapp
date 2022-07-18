// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: g6QWLntlsN
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
import sty from "./PlasmicHomeBtn.module.css"; // plasmic-import: g6QWLntlsN/css

import IconPanelGlownyIcon from "../blank_project_mobile_first/icons/PlasmicIcon__IconPanelGlowny"; // plasmic-import: DKDrvPLykl/icon

export type PlasmicHomeBtn__VariantMembers = {};

export type PlasmicHomeBtn__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeBtn__VariantsArgs;
export const PlasmicHomeBtn__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeBtn__ArgsType = {
  click?: boolean;
};

type ArgPropType = keyof PlasmicHomeBtn__ArgsType;
export const PlasmicHomeBtn__ArgProps = new Array<ArgPropType>("click");

export type PlasmicHomeBtn__OverridesType = {
  root?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultHomeBtnProps {
  click?: boolean;
  className?: string;
}

function PlasmicHomeBtn__RenderFunc(props: {
  variants: PlasmicHomeBtn__VariantsArgs;
  args: PlasmicHomeBtn__ArgsType;
  overrides: PlasmicHomeBtn__OverridesType;

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
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <IconPanelGlownyIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Główna"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeBtn__VariantsArgs;
    args?: PlasmicHomeBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomeBtn__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHomeBtn__ArgProps,
          internalVariantPropNames: PlasmicHomeBtn__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomeBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeBtn";
  } else {
    func.displayName = `PlasmicHomeBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeBtn = Object.assign(
  // Top-level PlasmicHomeBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHomeBtn
    internalVariantProps: PlasmicHomeBtn__VariantProps,
    internalArgProps: PlasmicHomeBtn__ArgProps
  }
);

export default PlasmicHomeBtn;
/* prettier-ignore-end */