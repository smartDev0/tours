import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_entrances/fadeInTopRight.css}
 */
const fadeInTopRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(40px, -40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default fadeInTopRight;
