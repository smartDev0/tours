import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";
import { media } from "styled-bootstrap-grid";

const StyledMobileBox = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div<{ alternativeBgColor?: "green" }>`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) =>
    props.alternativeBgColor === "green"
      ? props.theme.gradientGreenColor
      : props.theme.gradientAccentColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const HeadingContainer = styled.div`
  padding: 32px 0;

  ${media.sm`
    padding: 96px 0;
  `}

  ${StyledHeading} {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    margin: 0;

    ${media.sm`
      font-size: 40px;
      line-height: 1.2;
    `}
  }

  ${StyledHeading}, p {
    color: #fff;
  }
`;

const BadgeContainerOuter = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
`;

const BadgeContainer = styled.div`
  width: 168px;
  margin-right: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${StyledAnimation} {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

const FloatingLeftImage = styled.div`
  position: absolute;
  left: 0;

  ${media.lg`
    bottom: -16px;
    right: 300px;
    width: 348px;
  `}

  ${media.xl`
    bottom: -16px;
    width: 318px;
    right: 300px;
  `}
`;

const FloatingRightImage = styled.div`
  position: absolute;

  ${media.lg`
    top: -16px;
    width: 318px;
    right: 0;
  `}

  ${media.xl`
    top: -16px;
    width: 318px;
    right: 0;
  `}
`;

export {
  StyledMobileBox,
  OuterContainer,
  WrapperContainer,
  HeadingContainer,
  ImageContainer,
  FloatingLeftImage,
  FloatingRightImage,
  BadgeContainerOuter,
  BadgeContainer,
};
