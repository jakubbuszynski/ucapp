// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wGQNdEnY25VfiXqc2ZGJrZ
// Component: 4V9pJe2SUwNn
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
import Topbar from "../../Topbar"; // plasmic-import: nsqmq6QdR8/component
import Weather from "../../Weather"; // plasmic-import: 0-CIISOwT0/component
import Button from "../../Button"; // plasmic-import: eZM_gBMn2w/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: wGQNdEnY25VfiXqc2ZGJrZ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 4V9pJe2SUwNn/css

import Group6Icon from "./icons/PlasmicIcon__Group6"; // plasmic-import: RrnStGHaMH_/icon
import IconSadIcon from "./icons/PlasmicIcon__IconSad"; // plasmic-import: LSRU8DOeASe/icon
import Ellipse262Icon from "./icons/PlasmicIcon__Ellipse262"; // plasmic-import: LpPtZzW5OtX/icon
import IconHumidityIcon from "./icons/PlasmicIcon__IconHumidity"; // plasmic-import: qOIzQYGwswN/icon
import IconComunityIcon from "./icons/PlasmicIcon__IconComunity"; // plasmic-import: bRMD7TZ0qg/icon
import Ellipse36Icon from "./icons/PlasmicIcon__Ellipse36"; // plasmic-import: 2XixHAoBao/icon
import IconMicPlusIcon from "./icons/PlasmicIcon__IconMicPlus"; // plasmic-import: ngJJ-GwnaY/icon
import IconHeartIcon from "./icons/PlasmicIcon__IconHeart"; // plasmic-import: Jz_s8Wvzgq/icon
import GroupIcon from "./icons/PlasmicIcon__Group"; // plasmic-import: zT1yyLrytDX/icon
import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: zsir4Dm1UbC/icon
import IconOutIcon from "./icons/PlasmicIcon__IconOut"; // plasmic-import: YJSks7-cKx/icon
import Group3Icon from "./icons/PlasmicIcon__Group3"; // plasmic-import: 4WXBfYFgy/icon
import Rectangle105Icon from "./icons/PlasmicIcon__Rectangle105"; // plasmic-import: AQaATkY-uE/icon
import IconDomIcon from "./icons/PlasmicIcon__IconDom"; // plasmic-import: sOWy2b1yuZ/icon
import Group4Icon from "./icons/PlasmicIcon__Group4"; // plasmic-import: e7xl9pDzGf/icon
import Ellipse49Icon from "./icons/PlasmicIcon__Ellipse49"; // plasmic-import: P0uugp2jEe/icon
import IconPanelGlownyIcon from "./icons/PlasmicIcon__IconPanelGlowny"; // plasmic-import: DKDrvPLykl/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  topbar?: p.Flex<typeof Topbar>;
  timeAndDate?: p.Flex<"div">;
  weather?: p.Flex<typeof Weather>;
  heatControlCircleButton?: p.Flex<"div">;
  aktulanie21?: p.Flex<"div">;
  humidity?: p.Flex<"div">;
  notificationsMainPanel?: p.Flex<"div">;
  rectangle65?: p.Flex<"div">;
  buttonRecordMessage?: p.Flex<"div">;
  tryby2?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  ulubione?: p.Flex<"div">;
  rectangle28?: p.Flex<"div">;
  dzien5?: p.Flex<"div">;
  dzien?: p.Flex<"div">;
  rectangle24?: p.Flex<"div">;
  iconSun?: p.Flex<"div">;
  noc?: p.Flex<"div">;
  rectangle25?: p.Flex<"div">;
  dzien2?: p.Flex<"div">;
  iconNight?: p.Flex<"div">;
  pozaDomem?: p.Flex<"div">;
  rectangle26?: p.Flex<"div">;
  dzien3?: p.Flex<"div">;
  przywolajWinde?: p.Flex<"div">;
  rectangle29?: p.Flex<"div">;
  iconLift?: p.Flex<"div">;
  menu?: p.Flex<"div">;
  dom?: p.Flex<"div">;
  tryby?: p.Flex<"div">;
  iconModes?: p.Flex<"div">;
  glowna?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

export const defaultHomepage__Args: Partial<PlasmicHomepage__ArgsType> = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <React.Fragment>
      {}
      {}

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
        <div className={classNames(projectcss.all, sty.freeBox__p2DhG)}>
          <Topbar
            data-plasmic-name={"topbar"}
            data-plasmic-override={overrides.topbar}
            className={classNames("__wab_instance", sty.topbar)}
          />

          <div
            data-plasmic-name={"timeAndDate"}
            data-plasmic-override={overrides.timeAndDate}
            className={classNames(projectcss.all, sty.timeAndDate)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__rpyA)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hZvOv
                    )}
                  >
                    {"12:30"}
                  </div>
                ),

                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__katb3
              )}
            >
              {"Czwartek, 3 luty 2020"}
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__fv9V)}>
            <Weather
              data-plasmic-name={"weather"}
              data-plasmic-override={overrides.weather}
              airQuality={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iyzB
                  )}
                >
                  {"PM2.5"}
                </div>
              }
              className={classNames("__wab_instance", sty.weather)}
              online={true}
              temperature={"12°C"}
            />

            <div
              data-plasmic-name={"heatControlCircleButton"}
              data-plasmic-override={overrides.heatControlCircleButton}
              className={classNames(
                projectcss.all,
                sty.heatControlCircleButton
              )}
            >
              <Ellipse262Icon
                className={classNames(projectcss.all, sty.svg___6Vpcf)}
                role={"img"}
              />

              <div className={classNames(projectcss.all, sty.freeBox__hb2N0)}>
                {p.renderPlasmicSlot({
                  defaultContents: "10°",
                  value: args.slot,
                  className: classNames(sty.slotTargetSlot)
                })}
              </div>

              <div
                data-plasmic-name={"aktulanie21"}
                data-plasmic-override={overrides.aktulanie21}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.aktulanie21
                )}
              >
                {"Aktulanie: 21° "}
              </div>

              <div
                data-plasmic-name={"humidity"}
                data-plasmic-override={overrides.humidity}
                className={classNames(projectcss.all, sty.humidity)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rlFM
                  )}
                >
                  {"55%"}
                </div>

                <IconHumidityIcon
                  className={classNames(projectcss.all, sty.svg__rZgM)}
                  role={"img"}
                />
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__jmF3N)}>
            <div
              data-plasmic-name={"notificationsMainPanel"}
              data-plasmic-override={overrides.notificationsMainPanel}
              className={classNames(projectcss.all, sty.notificationsMainPanel)}
            >
              <div
                data-plasmic-name={"rectangle65"}
                data-plasmic-override={overrides.rectangle65}
                className={classNames(projectcss.all, sty.rectangle65)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wSzjd
                )}
              >
                {"Witamy w UNICOMM, Twoim inteligentnym mieszkaniu. Domo..."}
              </div>

              <IconComunityIcon
                className={classNames(projectcss.all, sty.svg__qH2X9)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2IB6D
                )}
              >
                {"Domofon XXI wieku"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8F5RN
                )}
              >
                {"7 kwietnia | 10:00"}
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__mwUm)}>
              <div
                data-plasmic-name={"buttonRecordMessage"}
                data-plasmic-override={overrides.buttonRecordMessage}
                className={classNames(projectcss.all, sty.buttonRecordMessage)}
              >
                <Ellipse36Icon
                  className={classNames(projectcss.all, sty.svg__kT8Aq)}
                  role={"img"}
                />

                <IconMicPlusIcon
                  className={classNames(projectcss.all, sty.svg__eiu5Q)}
                  role={"img"}
                />
              </div>
            </div>
          </div>

          <div
            data-plasmic-name={"tryby2"}
            data-plasmic-override={overrides.tryby2}
            className={classNames(projectcss.all, sty.tryby2)}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
            />

            <div
              data-plasmic-name={"ulubione"}
              data-plasmic-override={overrides.ulubione}
              className={classNames(projectcss.all, sty.ulubione)}
            >
              <div
                data-plasmic-name={"rectangle28"}
                data-plasmic-override={overrides.rectangle28}
                className={classNames(projectcss.all, sty.rectangle28)}
              />

              <div
                data-plasmic-name={"dzien5"}
                data-plasmic-override={overrides.dzien5}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dzien5
                )}
              >
                {"Ulubione"}
              </div>

              <IconHeartIcon
                className={classNames(projectcss.all, sty.svg__mnpYt)}
                role={"img"}
              />
            </div>

            <div
              data-plasmic-name={"dzien"}
              data-plasmic-override={overrides.dzien}
              className={classNames(projectcss.all, sty.dzien)}
            >
              <div
                data-plasmic-name={"rectangle24"}
                data-plasmic-override={overrides.rectangle24}
                className={classNames(projectcss.all, sty.rectangle24)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i15Ui
                )}
              >
                {"Dzień"}
              </div>

              <div
                data-plasmic-name={"iconSun"}
                data-plasmic-override={overrides.iconSun}
                className={classNames(projectcss.all, sty.iconSun)}
              >
                <GroupIcon
                  className={classNames(projectcss.all, sty.svg__ld8Dl)}
                  role={"img"}
                />
              </div>
            </div>

            <div
              data-plasmic-name={"noc"}
              data-plasmic-override={overrides.noc}
              className={classNames(projectcss.all, sty.noc)}
            >
              <div
                data-plasmic-name={"rectangle25"}
                data-plasmic-override={overrides.rectangle25}
                className={classNames(projectcss.all, sty.rectangle25)}
              />

              <div
                data-plasmic-name={"dzien2"}
                data-plasmic-override={overrides.dzien2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dzien2
                )}
              >
                {"Noc"}
              </div>

              <div
                data-plasmic-name={"iconNight"}
                data-plasmic-override={overrides.iconNight}
                className={classNames(projectcss.all, sty.iconNight)}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg__rOqIn)}
                  role={"img"}
                />
              </div>
            </div>

            <div
              data-plasmic-name={"pozaDomem"}
              data-plasmic-override={overrides.pozaDomem}
              className={classNames(projectcss.all, sty.pozaDomem)}
            >
              <div
                data-plasmic-name={"rectangle26"}
                data-plasmic-override={overrides.rectangle26}
                className={classNames(projectcss.all, sty.rectangle26)}
              />

              <div
                data-plasmic-name={"dzien3"}
                data-plasmic-override={overrides.dzien3}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.dzien3
                )}
              >
                {"Poza domem"}
              </div>

              <IconOutIcon
                className={classNames(projectcss.all, sty.svg___2W7Xx)}
                role={"img"}
              />
            </div>

            <div
              data-plasmic-name={"przywolajWinde"}
              data-plasmic-override={overrides.przywolajWinde}
              className={classNames(projectcss.all, sty.przywolajWinde)}
            >
              <div
                data-plasmic-name={"rectangle29"}
                data-plasmic-override={overrides.rectangle29}
                className={classNames(projectcss.all, sty.rectangle29)}
              />

              <div
                data-plasmic-name={"iconLift"}
                data-plasmic-override={overrides.iconLift}
                className={classNames(projectcss.all, sty.iconLift)}
              >
                <Group3Icon
                  className={classNames(projectcss.all, sty.svg__thxC2)}
                  role={"img"}
                />
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3ZrSz
                )}
              >
                {"Przywołaj\nwindę"}
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox___4R2Vh)}>
            <div
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames(projectcss.all, sty.menu)}
            >
              <Rectangle105Icon
                className={classNames(projectcss.all, sty.svg___3Fdf2)}
                role={"img"}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"dom"}
                data-plasmic-override={overrides.dom}
                hasGap={true}
                className={classNames(projectcss.all, sty.dom)}
              >
                <IconDomIcon
                  className={classNames(projectcss.all, sty.svg__kvOCk)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xal5N
                  )}
                >
                  {"Dom"}
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                data-plasmic-name={"tryby"}
                data-plasmic-override={overrides.tryby}
                hasGap={true}
                className={classNames(projectcss.all, sty.tryby)}
              >
                <div
                  data-plasmic-name={"iconModes"}
                  data-plasmic-override={overrides.iconModes}
                  className={classNames(projectcss.all, sty.iconModes)}
                >
                  <Group4Icon
                    className={classNames(projectcss.all, sty.svg__gkbbh)}
                    role={"img"}
                  />
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kah4H
                  )}
                >
                  {"Tryby"}
                </div>
              </p.Stack>

              <div
                data-plasmic-name={"glowna"}
                data-plasmic-override={overrides.glowna}
                className={classNames(projectcss.all, sty.glowna)}
              >
                {false ? (
                  <Ellipse49Icon
                    className={classNames(projectcss.all, sty.svg__k3GdO)}
                    role={"img"}
                  />
                ) : null}

                <IconPanelGlownyIcon
                  className={classNames(projectcss.all, sty.svg__cqdbl)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lmUks
                  )}
                >
                  {"Główna"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topbar",
    "timeAndDate",
    "weather",
    "heatControlCircleButton",
    "aktulanie21",
    "humidity",
    "notificationsMainPanel",
    "rectangle65",
    "buttonRecordMessage",
    "tryby2",
    "button",
    "ulubione",
    "rectangle28",
    "dzien5",
    "dzien",
    "rectangle24",
    "iconSun",
    "noc",
    "rectangle25",
    "dzien2",
    "iconNight",
    "pozaDomem",
    "rectangle26",
    "dzien3",
    "przywolajWinde",
    "rectangle29",
    "iconLift",
    "menu",
    "dom",
    "tryby",
    "iconModes",
    "glowna"
  ],
  topbar: ["topbar"],
  timeAndDate: ["timeAndDate"],
  weather: ["weather"],
  heatControlCircleButton: [
    "heatControlCircleButton",
    "aktulanie21",
    "humidity"
  ],
  aktulanie21: ["aktulanie21"],
  humidity: ["humidity"],
  notificationsMainPanel: ["notificationsMainPanel", "rectangle65"],
  rectangle65: ["rectangle65"],
  buttonRecordMessage: ["buttonRecordMessage"],
  tryby2: [
    "tryby2",
    "button",
    "ulubione",
    "rectangle28",
    "dzien5",
    "dzien",
    "rectangle24",
    "iconSun",
    "noc",
    "rectangle25",
    "dzien2",
    "iconNight",
    "pozaDomem",
    "rectangle26",
    "dzien3",
    "przywolajWinde",
    "rectangle29",
    "iconLift"
  ],
  button: ["button"],
  ulubione: ["ulubione", "rectangle28", "dzien5"],
  rectangle28: ["rectangle28"],
  dzien5: ["dzien5"],
  dzien: ["dzien", "rectangle24", "iconSun"],
  rectangle24: ["rectangle24"],
  iconSun: ["iconSun"],
  noc: ["noc", "rectangle25", "dzien2", "iconNight"],
  rectangle25: ["rectangle25"],
  dzien2: ["dzien2"],
  iconNight: ["iconNight"],
  pozaDomem: ["pozaDomem", "rectangle26", "dzien3"],
  rectangle26: ["rectangle26"],
  dzien3: ["dzien3"],
  przywolajWinde: ["przywolajWinde", "rectangle29", "iconLift"],
  rectangle29: ["rectangle29"],
  iconLift: ["iconLift"],
  menu: ["menu", "dom", "tryby", "iconModes", "glowna"],
  dom: ["dom"],
  tryby: ["tryby", "iconModes"],
  iconModes: ["iconModes"],
  glowna: ["glowna"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topbar: typeof Topbar;
  timeAndDate: "div";
  weather: typeof Weather;
  heatControlCircleButton: "div";
  aktulanie21: "div";
  humidity: "div";
  notificationsMainPanel: "div";
  rectangle65: "div";
  buttonRecordMessage: "div";
  tryby2: "div";
  button: typeof Button;
  ulubione: "div";
  rectangle28: "div";
  dzien5: "div";
  dzien: "div";
  rectangle24: "div";
  iconSun: "div";
  noc: "div";
  rectangle25: "div";
  dzien2: "div";
  iconNight: "div";
  pozaDomem: "div";
  rectangle26: "div";
  dzien3: "div";
  przywolajWinde: "div";
  rectangle29: "div";
  iconLift: "div";
  menu: "div";
  dom: "div";
  tryby: "div";
  iconModes: "div";
  glowna: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topbar: makeNodeComponent("topbar"),
    timeAndDate: makeNodeComponent("timeAndDate"),
    weather: makeNodeComponent("weather"),
    heatControlCircleButton: makeNodeComponent("heatControlCircleButton"),
    aktulanie21: makeNodeComponent("aktulanie21"),
    humidity: makeNodeComponent("humidity"),
    notificationsMainPanel: makeNodeComponent("notificationsMainPanel"),
    rectangle65: makeNodeComponent("rectangle65"),
    buttonRecordMessage: makeNodeComponent("buttonRecordMessage"),
    tryby2: makeNodeComponent("tryby2"),
    button: makeNodeComponent("button"),
    ulubione: makeNodeComponent("ulubione"),
    rectangle28: makeNodeComponent("rectangle28"),
    dzien5: makeNodeComponent("dzien5"),
    dzien: makeNodeComponent("dzien"),
    rectangle24: makeNodeComponent("rectangle24"),
    iconSun: makeNodeComponent("iconSun"),
    noc: makeNodeComponent("noc"),
    rectangle25: makeNodeComponent("rectangle25"),
    dzien2: makeNodeComponent("dzien2"),
    iconNight: makeNodeComponent("iconNight"),
    pozaDomem: makeNodeComponent("pozaDomem"),
    rectangle26: makeNodeComponent("rectangle26"),
    dzien3: makeNodeComponent("dzien3"),
    przywolajWinde: makeNodeComponent("przywolajWinde"),
    rectangle29: makeNodeComponent("rectangle29"),
    iconLift: makeNodeComponent("iconLift"),
    menu: makeNodeComponent("menu"),
    dom: makeNodeComponent("dom"),
    tryby: makeNodeComponent("tryby"),
    iconModes: makeNodeComponent("iconModes"),
    glowna: makeNodeComponent("glowna"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
