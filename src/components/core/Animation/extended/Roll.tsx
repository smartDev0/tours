import { rollIn, rollOut } from "styles/animations/specials";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

interface RollProps extends Omit<AnimationProps, "keyframes" | "css"> {
  reverse?: boolean;
}

const getRollKeyframes = (reverse: boolean) => {
  return reverse ? rollOut : rollIn;
};

const Roll = ({ reverse = false, ...rest }: RollProps) => {
  return <Animation keyframes={getRollKeyframes(reverse)} {...rest} />;
};

export default Roll;
