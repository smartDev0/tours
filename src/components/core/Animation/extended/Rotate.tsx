import {
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
} from "styles/animations/rotating-entrances";
import {
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
} from "styles/animations/rotating-exits";
import { Animation, AnimationProps } from "components/core/Animation/base";
import { CSSProperties, Keyframes } from "styled-components";
import React from "react";

type RotateDirection =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

interface RotateProps extends Omit<AnimationProps, "keyframes" | "css"> {
  direction?: RotateDirection;
  reverse?: boolean;
}

const getRotateKeyframesAndCss = (
  reverse: boolean,
  direction?: RotateDirection
): [Keyframes, CSSProperties] => {
  switch (direction) {
    case "bottom-left":
      return reverse
        ? [rotateOutDownLeft, { transformOrigin: "left bottom" }]
        : [rotateInDownLeft, { transformOrigin: "left bottom" }];
    case "bottom-right":
      return reverse
        ? [rotateOutDownRight, { transformOrigin: "right bottom" }]
        : [rotateInDownRight, { transformOrigin: "right bottom" }];
    case "top-left":
      return reverse
        ? [rotateOutUpLeft, { transformOrigin: "left bottom" }]
        : [rotateInUpLeft, { transformOrigin: "left bottom" }];
    case "top-right":
      return reverse
        ? [rotateOutUpRight, { transformOrigin: "right bottom" }]
        : [rotateInUpRight, { transformOrigin: "right bottom" }];
    default:
      return reverse
        ? [rotateOut, { transformOrigin: "center" }]
        : [rotateIn, { transformOrigin: "center" }];
  }
};

const Rotate = ({ direction, reverse = false, ...rest }: RotateProps) => {
  const [keyframes, animationCss] = getRotateKeyframesAndCss(
    reverse,
    direction
  );

  return <Animation keyframes={keyframes} css={animationCss} {...rest} />;
};

export default Rotate;
