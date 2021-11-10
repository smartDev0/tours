import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/rotating_exits/rotateOutDownLeft.css}
 */
const rotateOutDownLeft = keyframes`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;

export default rotateOutDownLeft;
