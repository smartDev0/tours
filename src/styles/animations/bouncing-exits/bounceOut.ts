import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/bouncing_exits/bounceOut.css}
 */
const bounceOut = keyframes`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;

export default bounceOut;
