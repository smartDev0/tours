import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";
import { media } from "styled-bootstrap-grid";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import { ValidationElement } from "components/ui/extended/RegisterCTA/index.style";

const StyledRegisterForEmailMarketing = styled.div`
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
    bottom: 77px;
    width: 502px;
    left: -40px;
  `}

  ${media.xl`
    bottom: 28px;
    width: 613px;
    left: -94px;
  `}
`;

const FloatingRightImage = styled.div`
  position: absolute;

  ${media.lg`
    bottom: 62px;
    left: 294px;
    width: 188px;
  `}

  ${media.xl`
    bottom: 6px;
    width: 236px;
    left: 321px;
  `}
`;

const FloatingArrowImage = styled.div`
  position: absolute;
  left: 520px;
  top: 275px;
  transform: rotate(7deg);
`;

export {
  StyledRegisterForEmailMarketing,
  OuterContainer,
  WrapperContainer,
  HeadingContainer,
  CustomRegisterCTA,
  ImageContainer,
  FloatingLeftImage,
  FloatingArrowImage,
  FloatingRightImage,
};
