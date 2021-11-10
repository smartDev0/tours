import styled, { css, keyframes } from "styled-components";

export interface VideoProps {
  active: boolean;
}

const StyledStories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  position: relative;
`;

const StoriesInner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100% + 8px);
`;

const ProgressBarOuter = styled.div`
  height: 100%;
  flex: 1;
  background-color: #f2f0f5;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  margin: 0 2px;
`;

/**
 * Animations are written differently because if they were the same,
 * StyledComponents called theme with same name and video change was
 * not working
 */

const OddAnimation = keyframes`
  0% {
      transform: scaleX(0);
  }
    
  100% {
      transform: scaleX(1);
  }
`;

const EvenAnimation = keyframes`
  100% {
      transform: scaleX(1);
  }
    
  0% {
      transform: scaleX(0);
  }
`;

const ProgressBar = styled.div<{
  paused: boolean;
  duration: number;
  active: boolean;
  full: boolean;
  counter: number;
}>`
  height: 100%;
  width: ${(props) => (props.active || props.full ? "100%" : "0")};
  background-color: ${(props) => props.theme.accentColor};
  transform-origin: left top;
  animation-name: ${(props) =>
    props.active
      ? props.counter % 2 === 0
        ? OddAnimation
        : EvenAnimation
      : "none"};
  animation-play-state: ${(props) => (props.paused ? "paused" : "running")};
  animation-duration: ${(props) => props.duration}ms;
  animation-timing-function: linear;
`;

const ProgressBarContainer = styled.div`
  height: 4px;
  margin-bottom: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video<VideoProps>`
  object-fit: cover;
  position: absolute;
  overflow: hidden;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  opacity: 0;
  transition: opacity 700ms;

  ${(props) =>
    props.active &&
    css`
      opacity: 1 !important;
    `}
`;

const VideoDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export {
  StyledStories,
  ProgressBar,
  VideoDiv,
  ProgressBarContainer,
  Video,
  ProgressBarOuter,
  StoriesInner,
};
