import { jackInTheBox } from "styles/animations/specials";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type JackInTheBoxProps = Omit<AnimationProps, "keyframes" | "css">;

const JackInTheBox = (props: JackInTheBoxProps) => {
  return <Animation keyframes={jackInTheBox} {...props} />;
};

export default JackInTheBox;
