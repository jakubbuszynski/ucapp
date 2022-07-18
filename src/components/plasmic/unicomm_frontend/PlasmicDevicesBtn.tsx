// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: t5q-SVBQge
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
import sty from "./PlasmicDevicesBtn.module.css"; // plasmic-import: t5q-SVBQge/css

import IconDomIcon from "../blank_project_mobile_first/icons/PlasmicIcon__IconDom"; // plasmic-import: sOWy2b1yuZ/icon

export type PlasmicDevicesBtn__VariantMembers = {};

export type PlasmicDevicesBtn__VariantsArgs = {};
type VariantPropType = keyof PlasmicDevicesBtn__VariantsArgs;
export const PlasmicDevicesBtn__VariantProps = new Array<VariantPropType>();

export type PlasmicDevicesBtn__ArgsType = {};
type ArgPropType = keyof PlasmicDevicesBtn__ArgsType;
export const PlasmicDevicesBtn__ArgProps = new Array<ArgPropType>();

export type PlasmicDevicesBtn__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultDevicesBtnProps {
  className?: string;
}

function PlasmicDevicesBtn__RenderFunc(props: {
  variants: PlasmicDevicesBtn__VariantsArgs;
  args: PlasmicDevicesBtn__ArgsType;
  overrides: PlasmicDevicesBtn__OverridesType;

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
      <IconDomIcon
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
        {"Dom"}
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
  root: "div";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDevicesBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDevicesBtn__VariantsArgs;
    args?: PlasmicDevicesBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDevicesBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDevicesBtn__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDevicesBtn__ArgProps,
          internalVariantPropNames: PlasmicDevicesBtn__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDevicesBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDevicesBtn";
  } else {
    func.displayName = `PlasmicDevicesBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicDevicesBtn = Object.assign(
  // Top-level PlasmicDevicesBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicDevicesBtn
    internalVariantProps: PlasmicDevicesBtn__VariantProps,
    internalArgProps: PlasmicDevicesBtn__ArgProps
  }
);

export default PlasmicDevicesBtn;
/* prettier-ignore-end */