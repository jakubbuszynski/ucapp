// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: eZM_gBMn2w
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
import sty from "./PlasmicFavouritesBtn.module.css"; // plasmic-import: eZM_gBMn2w/css

import IconLightsIcon from "./icons/PlasmicIcon__IconLights"; // plasmic-import: iMhy_reGSmx/icon

export type PlasmicFavouritesBtn__VariantMembers = {
  active: "active";
};

export type PlasmicFavouritesBtn__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">;
};

type VariantPropType = keyof PlasmicFavouritesBtn__VariantsArgs;
export const PlasmicFavouritesBtn__VariantProps = new Array<VariantPropType>(
  "active"
);

export type PlasmicFavouritesBtn__ArgsType = {
  text?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFavouritesBtn__ArgsType;
export const PlasmicFavouritesBtn__ArgProps = new Array<ArgPropType>(
  "text",
  "icon"
);

export type PlasmicFavouritesBtn__OverridesType = {
  root?: p.Flex<"div">;
  rectangle25?: p.Flex<"div">;
  rectangle27?: p.Flex<"div">;
};

export interface DefaultFavouritesBtnProps {
  text?: React.ReactNode;
  icon?: React.ReactNode;
  active?: SingleBooleanChoiceArg<"active">;
  className?: string;
}

function PlasmicFavouritesBtn__RenderFunc(props: {
  variants: PlasmicFavouritesBtn__VariantsArgs;
  args: PlasmicFavouritesBtn__ArgsType;
  overrides: PlasmicFavouritesBtn__OverridesType;

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
      {(hasVariant(variants, "active", "active") ? true : false) ? (
        <div
          data-plasmic-name={"rectangle25"}
          data-plasmic-override={overrides.rectangle25}
          className={classNames(projectcss.all, sty.rectangle25, {
            [sty.rectangle25active]: hasVariant(variants, "active", "active")
          })}
        />
      ) : null}
      {(hasVariant(variants, "active", "active") ? true : true) ? (
        <div
          data-plasmic-name={"rectangle27"}
          data-plasmic-override={overrides.rectangle27}
          className={classNames(projectcss.all, sty.rectangle27, {
            [sty.rectangle27active]: hasVariant(variants, "active", "active")
          })}
        />
      ) : null}

      <div
        className={classNames(projectcss.all, sty.freeBox__suxgQ, {
          [sty.freeBoxactive__suxgQGiuno]: hasVariant(
            variants,
            "active",
            "active"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7VIIx
              )}
            >
              {"Światła"}
            </div>
          ),

          value: args.text,
          className: classNames(sty.slotTargetText, {
            [sty.slotTargetTextactive]: hasVariant(variants, "active", "active")
          })
        })}
      </div>

      <div
        className={classNames(projectcss.all, sty.freeBox__nKv7J, {
          [sty.freeBoxactive__nKv7JGiuno]: hasVariant(
            variants,
            "active",
            "active"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <IconLightsIcon
              className={classNames(projectcss.all, sty.svg__tvdiQ)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotTargetIcon, {
            [sty.slotTargetIconactive]: hasVariant(variants, "active", "active")
          })
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "rectangle25", "rectangle27"],
  rectangle25: ["rectangle25"],
  rectangle27: ["rectangle27"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  rectangle25: "div";
  rectangle27: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFavouritesBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFavouritesBtn__VariantsArgs;
    args?: PlasmicFavouritesBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFavouritesBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFavouritesBtn__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFavouritesBtn__ArgProps,
          internalVariantPropNames: PlasmicFavouritesBtn__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFavouritesBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFavouritesBtn";
  } else {
    func.displayName = `PlasmicFavouritesBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicFavouritesBtn = Object.assign(
  // Top-level PlasmicFavouritesBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    rectangle25: makeNodeComponent("rectangle25"),
    rectangle27: makeNodeComponent("rectangle27"),

    // Metadata about props expected for PlasmicFavouritesBtn
    internalVariantProps: PlasmicFavouritesBtn__VariantProps,
    internalArgProps: PlasmicFavouritesBtn__ArgProps
  }
);

export default PlasmicFavouritesBtn;
/* prettier-ignore-end */
