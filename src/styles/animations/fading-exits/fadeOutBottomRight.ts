import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutBottomRight.css}
 */
const fadeOutBottomRight = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(40px, 40px, 0);
  }
`;

export default fadeOutBottomRight;
