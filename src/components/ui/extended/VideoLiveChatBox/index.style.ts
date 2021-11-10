import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";
import { media } from "styled-bootstrap-grid";
import { StyledButton } from "components/core/Button/index.style";

const StyledVideoLiveChatBox = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientDarkColor};
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
    font-size: 40px;
    line-height: 1.2;
    font-weight: 700;
    margin: 0;
  }

  ${StyledHeading}, p {
    color: #fff;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: row;

  a {
    font-size: 22px;
  }
  ${StyledButton} {
    color: #05305f;
    border-color: #fff;

    svg {
      stroke: #05305f;
    }
  }
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
    bottom: 105px;
    width: 560px;
  `}

  ${media.xl`
    bottom: 80px;
    width: 612px;
  `}
`;

const FloatingRightImage = styled.div`
  position: absolute;

  ${media.lg`
    bottom: 89px;
    width: 168px;
    top: auto;
    right: -63px;
  `}

  ${media.xl`
        bottom: 50px;
    width: 201px;
    top: auto;
    right: -63px;
  `}
`;

export {
  StyledVideoLiveChatBox,
  OuterContainer,
  WrapperContainer,
  HeadingContainer,
  ImageContainer,
  FloatingLeftImage,
  FloatingRightImage,
  CTAContainer,
};
