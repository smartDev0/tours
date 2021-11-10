import {
  bounce,
  flash,
  headShake,
  heartBeat,
  jello,
  pulse,
  rubberBand,
  shake,
  shakeX,
  shakeY,
  swing,
  tada,
  wobble,
} from "styles/animations/attention-seekers";
import { CSSProperties, Keyframes } from "styled-components";
import { Animation, AnimationProps } from "components/core/Animation/base";
import React from "react";

type AttentionSeekerEffect =
  | "bounce"
  | "flash"
  | "headShake"
  | "heartBeat"
  | "jello"
  | "pulse"
  | "rubberBand"
  | "shake"
  | "shakeX"
  | "shakeY"
  | "swing"
  | "tada"
  | "wobble";

interface AttentionSeekerProps
  extends Omit<AnimationProps, "keyframes" | "css"> {
  effect?: AttentionSeekerEffect;
}

const getAttentionSeekerKeyframesAndCss = (
  effect?: AttentionSeekerEffect
): [Keyframes, CSSProperties?] => {
  switch (effect) {
    case "flash":
      return [flash];
    case "headShake":
      return [headShake, { animationTimingFunction: "ease-in-out" }];
    case "heartBeat":
      return [heartBeat, { animationTimingFunction: "ease-in-out" }];
    case "jello":
      return [jello, { transformOrigin: "center" }];
    case "pulse":
      return [pulse, { animationTimingFunction: "ease-in-out" }];
    case "rubberBand":
      return [rubberBand];
    case "shake":
      return [shake];
    case "shakeX":
      return [shakeX];
    case "shakeY":
      return [shakeY];
    case "swing":
      return [swing, { transformOrigin: "top center" }];
    case "tada":
      return [tada];
    case "wobble":
      return [wobble];
    case "bounce":
    default:
      return [bounce, { transformOrigin: "center bottom" }];
  }
};

const AttentionSeeker = ({ effect, ...rest }: AttentionSeekerProps) => {
  const [keyframes, animationCss] = getAttentionSeekerKeyframesAndCss(effect);

  return <Animation keyframes={keyframes} css={animationCss} {...rest} />;
};

AttentionSeeker.defaultProps = {
  effect: "bounce",
};

export default AttentionSeeker;
