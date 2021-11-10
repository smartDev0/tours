import styled, { keyframes } from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { Col, Container, media } from "styled-bootstrap-grid";
import { StyledRegisterCTA } from "components/ui/extended/RegisterCTA/index.style";
import Button from "components/core/Button";
import { SliderProps } from "components/ui/extended/Customers/index.style";

const translateInfinite = (childrenCount: number) => keyframes`
    100% { transform:translateX(calc(-220px * ${childrenCount}));  }
`;

export interface PlainHeaderWithCarouselContainerProps {
  maxWidth?: number;
}

export interface DescriptionProps {
  maxWidth?: number;
}

export interface CarouselProps {
  childrenCount: number;
}

const StyledPlainHeaderWithCarousel = styled.section`
  text-align: center;

  ${StyledHeading} {
    font-size: 2em;
    line-height: 1.2em;
    color: ${(props) => props.theme.titleColor};

    * {
      color: ${(props) => props.theme.titleColor};
    }
  }

  ${media.sm`
    ${StyledHeading} {
      font-size: 3.5em;
    }
  `}
`;

const Description = styled.p<DescriptionProps>`
  font-size: 18px;
  margin: 0;

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

const PlainHeaderWithCarouselContainer = styled(
  Container
)<PlainHeaderWithCarouselContainerProps>`
  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}

  ${StyledRegisterCTA} {
    margin-top: 32px;
  }
`;

const PlainHeaderWithCarouselCenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlainHeaderWithCarouselCol = styled(PlainHeaderWithCarouselCenteredCol)`
  flex-direction: column;
  margin-top: 2em;

  ${StyledHeading} {
    margin-top: 0;
    margin-bottom: 0.3em;
  }
`;

const CTAButton = styled(Button)`
  margin-top: 32px;
`;

const Carousel = styled.div`
  background: #fff;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 80px;
    ${media.lg`
      width: 220px;
    `}
    height: 100%;
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

const CarouselList = styled.ul<CarouselProps>`
  display: flex;
  height: 100%;
  width: calc(220px * ${(props) => props.childrenCount});
  padding: 0;
`;

const CarouselOption = styled.li<CarouselProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #343434;
  width: 220px;
  animation: ${(props) => translateInfinite(props.childrenCount / 2)}
    ${(props) => props.childrenCount + 1}s linear infinite;

  img {
    object-fit: contain;
    width: 200px !important;

    ${media.sm`
      width: 200px !important;
    `}
  }
`;

const CarouselContainer = styled.div`
  margin-top: 64px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-height: 400px;
`;

export {
  StyledPlainHeaderWithCarousel,
  Description,
  PlainHeaderWithCarouselContainer,
  PlainHeaderWithCarouselCol,
  PlainHeaderWithCarouselCenteredCol,
  CTAButton,
  Carousel,
  CarouselList,
  CarouselOption,
  CarouselContainer,
};
