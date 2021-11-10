import { keyframes } from "styled-components";

const zoom = keyframes`
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

const bounce = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
`;

const movexy = keyframes`
  0% {
    -webkit-transform: translateX(-10px) scale(0.9);
    transform: translateX(-10px) scale(0.9);
  }
  100% {
    -webkit-transform: translateX(30px) scale(1.3) translateY(10px);
    transform: translateX(30px) scale(1.3) translateY(10px);
  }
`;

const wave = keyframes`
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0, 1%, 0) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0, 1%, 0) rotateZ(-360deg);
  }
`;

const waveWide = keyframes`
  0% {
    -webkit-transform: rotateZ(0deg) translate3d(0, 3%, 0) rotateZ(0deg);
    transform: rotateZ(0deg) translate3d(0, 3%, 0) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(360deg) translate3d(0, 3%, 0) rotateZ(-360deg);
    transform: rotateZ(360deg) translate3d(0, 3%, 0) rotateZ(-360deg);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const antirotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export { zoom, bounce, movexy, wave, waveWide, rotate, antirotate };
