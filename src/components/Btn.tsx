import * as React from "react";
import {
  PlasmicBtn,
  DefaultBtnProps
} from "./plasmic/unicomm_frontend/PlasmicBtn";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface BtnProps extends DefaultBtnProps {}

function Btn_(props: BtnProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicBtn.useBehavior<BtnProps>(props, ref);
  return <PlasmicBtn {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<BtnProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<BtnProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const Btn = React.forwardRef(Btn_) as any as ButtonComponentType;

export default Object.assign(Btn, {
  __plumeType: "button"
});
