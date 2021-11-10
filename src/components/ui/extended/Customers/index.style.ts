import styled, { keyframes } from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { media } from "styled-bootstrap-grid";
import { StyledSubtitle } from "components/core/Typography/Subtitle/index.style";

export interface SliderProps {
  childrenCount: number;
}

const StyledCustomers = styled.section`
  display: block;
  text-align: center;
  white-space: pre-line;

  ${StyledSubtitle} {
    font-size: 16px;

    ${media.lg`
      font-size: 24px;
    `}
  }

  ${StyledTitle} {
    font-size: 22px;

    ${media.lg`
      font-size: 48px;
    `}

    span {
      color: ${(props) => props.theme.titleColor};
    }
  }
`;

const Slider = styled.div`
  background: #fff;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    z-index: 9;
    height: 100%;
    width: 100px;

    ${media.md`
      width: 320px;
    `}
  }
  &::before {
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const SliderList = styled.ul<SliderProps>`
  display: flex;
  height: 100%;
  padding: 0;
  width: calc(220px * ${(props) => props.childrenCount});

  ${media.md`
    width: calc(320px * ${(props: any) => props.childrenCount});
  `}
`;

const translateInfinite = (childrenCount: number, width: number) => keyframes`
    100% { transform:translateX(calc(-${width}px * ${childrenCount}));  }
`;

const SliderOption = styled.li<SliderProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #343434;
  width: 220px;
  animation: ${(props) => translateInfinite(props.childrenCount / 2, 220)}
    ${(props) => props.childrenCount + 1}s linear infinite;

  ${media.md`
    animation: ${(props: any) =>
      translateInfinite(props.childrenCount / 2, 320)}
    ${(props: any) => props.childrenCount + 1}s linear infinite;
    width: 220px;
  `}

  img {
    object-fit: contain;
    width: 200px !important;

    ${media.md`
      width: 300px !important;
    `}
  }
`;

const SliderContainer = styled.div`
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);

    ${SliderOption} {
      animation-play-state: paused;
    }
  }
`;

export { StyledCustomers, SliderContainer, Slider, SliderList, SliderOption };
