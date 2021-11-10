import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";
import { media } from "styled-bootstrap-grid";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import { ValidationElement } from "components/ui/extended/RegisterCTA/index.style";

const StyledRegisterForTemplateBuilder = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientAccentColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const HeadingContainer = styled.div`
  padding: 96px 0;

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

const CustomRegisterCTA = styled(RegisterCTA)`
  ${ValidationElement} {
    color: #fff;

    svg {
      stroke: #fff;
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
    bottom: 180px;
    width: 516px;
    left: -40px;
  `}

  ${media.xl`
    bottom: 60px;
    width: 616px;
    left: -94px;
  `}
`;

const FloatingRightImage = styled.div`
  position: absolute;

  ${media.lg`
    bottom: -171px;
    left: 174px;
    width: 318px;
  `}

  ${media.xl`
    bottom: -261px;
    width: 374px;
    left: 195px;
  `}
`;

const FloatingArrowImage = styled.div`
  position: absolute;
  left: 520px;
  top: 275px;
  transform: rotate(7deg);
`;

export {
  StyledRegisterForTemplateBuilder,
  OuterContainer,
  WrapperContainer,
  HeadingContainer,
  CustomRegisterCTA,
  ImageContainer,
  FloatingLeftImage,
  FloatingArrowImage,
  FloatingRightImage,
};
