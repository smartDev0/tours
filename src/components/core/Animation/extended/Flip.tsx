import {
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
} from "styles/animations/flippers";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type FlipDirection = "horizontal" | "vertical";

interface FlipProps extends Omit<AnimationProps, "keyframes" | "css"> {
  direction?: FlipDirection;
  reverse?: boolean;
}

const getFlipKeyframes = (reverse: boolean, direction?: FlipDirection) => {
  switch (direction) {
    case "horizontal":
      return reverse ? flipOutX : flipInX;
    case "vertical":
      return reverse ? flipOutY : flipInY;
    default:
      return flip;
  }
};
const Flip = ({ direction, reverse = false, ...rest }: FlipProps) => {
  return (
    <Animation
      keyframes={getFlipKeyframes(reverse, direction)}
      css={{ backfaceVisibility: "visible" }}
      {...rest}
    />
  );
};

export default Flip;
