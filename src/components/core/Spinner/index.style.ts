import styled from "styled-components";
import { rotate } from "styles/global.keyframes.style";

const StyledSpinner = styled.div`
  margin: 0 auto;
  font-size: 3px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.25);
  border-right: 1.1em solid rgba(255, 255, 255, 0.25);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.25);
  border-left: 1.1em solid #fff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${rotate} 1.1s infinite linear;
  animation: ${rotate} 1.1s infinite linear;
  border-radius: 50%;
  width: 9em;
  height: 9em;
  display: block;

  &:after {
    display: block;
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

export { StyledSpinner };
