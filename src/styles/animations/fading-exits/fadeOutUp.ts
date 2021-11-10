import { keyframes } from "styled-components";

/**
 * @see {@link https://github.com/animate-css/animate.css/blob/master/source/fading_exits/fadeOutUp.css}
 */
const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -40px, 0);
  }
`;

export default fadeOutUp;
