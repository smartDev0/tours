import styled, { css, CSSProperties, Keyframes } from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledAnimation = styled.div<
  {
    inView: boolean;
    keyframes: Keyframes;
    duration: number;
    delay: number;
    delaySm?: number;
    delayMd?: number;
    delayLg?: number;
    delayXl?: number;
    delayXxl?: number;
    css: CSSProperties;
  } & any
>`
  opacity: ${(props) => (props.inView && props.show ? 1 : 0)};
  display: ${(props) => (props.show ? "block" : "none")};

  html.no-js & {
    opacity: 1 !important;
  }

  ${(props) =>
    props.inView &&
    props.show &&
    css`
      animation-duration: ${props.duration}ms;
      animation-timing-function: ease;
      animation-delay: ${props.delay}ms;
      animation-name: ${props.keyframes};
      animation-direction: normal;
      animation-fill-mode: both;
      animation-iteration-count: 1;

      ${props.delaySm &&
      media.sm`
        animation-delay: ${props.delaySm}ms;
      `}

      ${props.delayMd &&
      media.md`
        animation-delay: ${props.delayMd}ms;
      `}

      ${props.delayLg &&
      media.lg`
        animation-delay: ${props.delayLg}ms;
      `}

      ${props.delayXl &&
      media.xl`
        animation-delay: ${props.delayXl}ms;
      `}
      
      ${props.delayXxl &&
      media.xxl`
        animation-delay: ${props.delayXxl}ms;
      `}
    `}

  ${(props) => (props.inView && props.show ? props.css : "")}
`;

export { StyledAnimation };
