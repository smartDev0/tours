import {
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
} from "styles/animations/zooming-entrances";
import {
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
} from "styles/animations/zooming-exits";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type ZoomDirection = "down" | "left" | "right" | "up";

interface ZoomProps extends Omit<AnimationProps, "keyframes" | "css"> {
  direction?: ZoomDirection;
  reverse?: boolean;
}

const getZoomKeyframes = (reverse: boolean, direction?: ZoomDirection) => {
  switch (direction) {
    case "down":
      return reverse ? zoomOutDown : zoomInDown;
    case "left":
      return reverse ? zoomOutLeft : zoomInLeft;
    case "right":
      return reverse ? zoomOutRight : zoomInRight;
    case "up":
      return reverse ? zoomOutUp : zoomInUp;
    default:
      return reverse ? zoomOut : zoomIn;
  }
};

const Zoom = ({ direction, reverse = false, ...rest }: ZoomProps) => {
  return (
    <Animation keyframes={getZoomKeyframes(reverse, direction)} {...rest} />
  );
};

export default Zoom;
