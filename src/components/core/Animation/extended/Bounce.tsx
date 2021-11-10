import {
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
} from "styles/animations/bouncing-entrances";
import {
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
} from "styles/animations/bouncing-exits";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type BounceDirection = "down" | "left" | "right" | "up";

interface BounceProps extends Omit<AnimationProps, "keyframes" | "css"> {
  direction?: BounceDirection;
  reverse?: boolean;
}

const getBounceKeyframes = (reverse: boolean, direction?: BounceDirection) => {
  switch (direction) {
    case "down":
      return reverse ? bounceOutDown : bounceInDown;
    case "left":
      return reverse ? bounceOutLeft : bounceInLeft;
    case "right":
      return reverse ? bounceOutRight : bounceInRight;
    case "up":
      return reverse ? bounceOutUp : bounceInUp;
    default:
      return reverse ? bounceOut : bounceIn;
  }
};

const Bounce = ({ direction, reverse = false, ...rest }: BounceProps) => {
  return (
    <Animation keyframes={getBounceKeyframes(reverse, direction)} {...rest} />
  );
};

export default Bounce;
