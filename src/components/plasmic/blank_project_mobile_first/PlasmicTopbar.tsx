// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: nsqmq6QdR8
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
import sty from "./PlasmicTopbar.module.css"; // plasmic-import: nsqmq6QdR8/css

import IconWifiIcon from "./icons/PlasmicIcon__IconWifi"; // plasmic-import: yUaWBRXGAT/icon
import IconSettings2Icon from "./icons/PlasmicIcon__IconSettings2"; // plasmic-import: yyLUYFhoyS4/icon
import Group39518Icon from "./icons/PlasmicIcon__Group39518"; // plasmic-import: QPyex1i8q_l/icon

export type PlasmicTopbar__VariantMembers = {};

export type PlasmicTopbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopbar__VariantsArgs;
export const PlasmicTopbar__VariantProps = new Array<VariantPropType>();

export type PlasmicTopbar__ArgsType = {};
type ArgPropType = keyof PlasmicTopbar__ArgsType;
export const PlasmicTopbar__ArgProps = new Array<ArgPropType>();

export type PlasmicTopbar__OverridesType = {
  root?: p.Flex<"div">;
  frame3868?: p.Flex<"div">;
  text?: p.Flex<"div">;
  group39512?: p.Flex<"div">;
};

export interface DefaultTopbarProps {
  className?: string;
}

export const defaultTopbar__Args: Partial<PlasmicTopbar__ArgsType> = {};

function PlasmicTopbar__RenderFunc(props: {
  variants: PlasmicTopbar__VariantsArgs;
  args: PlasmicTopbar__ArgsType;
  overrides: PlasmicTopbar__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultTopbar__Args, props.args);
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
      <IconWifiIcon
        className={classNames(projectcss.all, sty.svg__gp6MC)}
        role={"img"}
      />

      <IconSettings2Icon
        className={classNames(projectcss.all, sty.svg__vzsyi)}
        role={"img"}
      />

      <div
        data-plasmic-name={"frame3868"}
        data-plasmic-override={overrides.frame3868}
        className={classNames(projectcss.all, sty.frame3868)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Logo dewelopera"}
        </div>

        <div
          data-plasmic-name={"group39512"}
          data-plasmic-override={overrides.group39512}
          className={classNames(projectcss.all, sty.group39512)}
        >
          <Group39518Icon
            className={classNames(projectcss.all, sty.svg__eJFhb)}
            role={"img"}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "frame3868", "text", "group39512"],
  frame3868: ["frame3868", "text", "group39512"],
  text: ["text"],
  group39512: ["group39512"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame3868: "div";
  text: "div";
  group39512: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopbar__VariantsArgs;
    args?: PlasmicTopbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTopbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTopbar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicTopbar__ArgProps,
      internalVariantPropNames: PlasmicTopbar__VariantProps
    });

    return PlasmicTopbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTopbar";
  } else {
    func.displayName = `PlasmicTopbar.${nodeName}`;
  }
  return func;
}

export const PlasmicTopbar = Object.assign(
  // Top-level PlasmicTopbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame3868: makeNodeComponent("frame3868"),
    text: makeNodeComponent("text"),
    group39512: makeNodeComponent("group39512"),

    // Metadata about props expected for PlasmicTopbar
    internalVariantProps: PlasmicTopbar__VariantProps,
    internalArgProps: PlasmicTopbar__ArgProps
  }
);

export default PlasmicTopbar;
/* prettier-ignore-end */
