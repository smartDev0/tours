import {
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,
} from "styles/animations/sliding-entrances";
import {
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
} from "styles/animations/sliding-exits";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type SlideDirection = "down" | "left" | "right" | "up";

interface SlideProps extends Omit<AnimationProps, "keyframes" | "css"> {
  direction?: SlideDirection;
  reverse?: boolean;
}

const getSlideKeyframes = (reverse: boolean, direction?: SlideDirection) => {
  switch (direction) {
    case "down":
      return reverse ? slideOutDown : slideInDown;
    case "right":
      return reverse ? slideOutRight : slideInRight;
    case "up":
      return reverse ? slideOutUp : slideInUp;
    case "left":
    default:
      return reverse ? slideOutLeft : slideInLeft;
  }
};

const Slide = ({ direction, reverse = false, ...rest }: SlideProps) => {
  return (
    <Animation keyframes={getSlideKeyframes(reverse, direction)} {...rest} />
  );
};

export default Slide;
