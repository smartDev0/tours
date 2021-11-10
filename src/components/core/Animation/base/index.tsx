import React from "react";
import { useInView } from "react-intersection-observer";
import fadeInUp from "styles/animations/fading-entrances/fadeInUp";
import { CSSProperties, Keyframes } from "styled-components";
import { StyledAnimation } from "./index.style";

/**
  NB: `triggerOnce` must be set to true in order to work properly. The reason is that if you don't triggerOnce and the
      div is half displayed and half hidden, it flickr between inView: true and inView: false.
 */

export interface AnimationProps {
  threshold?: number;
  keyframes?: Keyframes;
  delay?: number;
  delaySm?: number;
  delayMd?: number;
  delayLg?: number;
  delayXl?: number;
  delayXxl?: number;
  show?: boolean;
  duration?: number;
  css?: CSSProperties;
  children: any;
}

const Animation = ({
  threshold,
  keyframes,
  duration,
  delay,
  css,
  ...rest
}: AnimationProps & any) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  return (
    <StyledAnimation
      ref={ref}
      inView={inView}
      keyframes={keyframes}
      duration={duration}
      delay={delay}
      css={css}
      {...rest}
    />
  );
};

Animation.defaultProps = {
  delay: 0,
  duration: 1000,
  threshold: 0,
  keyframes: fadeInUp,
  show: true,
  css: {},
};

export { Animation };
