import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOutLeft.css}
 */
const bounceOutLeft = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;

export default bounceOutLeft;
