import {
  fadeIn,
  fadeInBottomLeft,
  fadeInBottomRight,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInTopLeft,
  fadeInTopRight,
  fadeInUp,
  fadeInUpBig,
} from "styles/animations/fading-entrances";
import {
  fadeOut,
  fadeOutBottomLeft,
  fadeOutBottomRight,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutTopLeft,
  fadeOutTopRight,
  fadeOutUp,
  fadeOutUpBig,
} from "styles/animations/fading-exits";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type FadeDirection =
  | "bottom-left"
  | "bottom-right"
  | "down"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "up";

interface FadeProps extends Omit<AnimationProps, "keyframes" | "css"> {
  big?: boolean;
  direction?: FadeDirection;
  reverse?: boolean;
}

const getFadeKeyframes = (
  big: boolean,
  reverse: boolean,
  direction?: FadeDirection
) => {
  switch (direction) {
    case "bottom-left":
      return reverse ? fadeOutBottomLeft : fadeInBottomLeft;
    case "bottom-right":
      return reverse ? fadeOutBottomRight : fadeInBottomRight;
    case "down":
      return big
        ? reverse
          ? fadeOutDownBig
          : fadeInDownBig
        : reverse
        ? fadeOutDown
        : fadeInDown;
    case "left":
      return big
        ? reverse
          ? fadeOutLeftBig
          : fadeInLeftBig
        : reverse
        ? fadeOutLeft
        : fadeInLeft;
    case "right":
      return big
        ? reverse
          ? fadeOutRightBig
          : fadeInRightBig
        : reverse
        ? fadeOutRight
        : fadeInRight;
    case "top-left":
      return reverse ? fadeOutTopLeft : fadeInTopLeft;
    case "top-right":
      return reverse ? fadeOutTopRight : fadeInTopRight;
    case "up":
      return big
        ? reverse
          ? fadeOutUpBig
          : fadeInUpBig
        : reverse
        ? fadeOutUp
        : fadeInUp;
    default:
      return reverse ? fadeOut : fadeIn;
  }
};

const Fade = ({
  big = false,
  direction,
  reverse = false,
  ...rest
}: FadeProps) => {
  return (
    <Animation
      keyframes={getFadeKeyframes(big, reverse, direction)}
      {...rest}
    />
  );
};

export default Fade;
