import { hinge } from "styles/animations/specials";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type HingeProps = Omit<AnimationProps, "keyframes" | "css">;

const Hinge = (props: HingeProps) => {
  return (
    <Animation
      keyframes={hinge}
      css={{ transformOrigin: "top left" }}
      {...props}
    />
  );
};

export default Hinge;
