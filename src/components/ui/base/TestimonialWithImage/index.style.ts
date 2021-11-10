import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import Heading from "components/core/Typography/Heading";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { waveWide } from "styles/global.keyframes.style";

export interface CircleBackgroundProps {
  background?: string;
}

const StyledTestimonialWithImage = styled.section``;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    max-width: 80%;
  }
`;

const DescriptionCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;

  ${media.lg`
    margin-top: 0;
    
    ${StyledHeading}{
      padding: 0 32px;
    }
  `}
`;

const Quote = styled(Heading)`
  font-weight: bold;
  color: #2b2350;
  margin: 0;

  font-size: 24px;
  line-height: 30px;

  ${media.sm`
    font-size: 34px;
    line-height: 42px;
  `}

  :before {
    content: open-quote;
    font-family: serif;
    font-size: 140px;
    top: -14px;
    position: absolute;
    left: -44px;
    color: ${(props) => props.theme.accentColor};
    opacity: 0.4;
  }
  :after {
    content: close-quote;
    font-family: serif;
    font-size: 140px;
    position: absolute;
    right: 0;
    bottom: -38px;
    color: ${(props) => props.theme.accentColor};
    opacity: 0.4;
  }
`;

const Quotee = styled(Heading)`
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 1.25em;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ImageContainer = styled.div`
  width: 200px;

  ${media.sm`
    width: 300px;
  `}
`;

const CircleBackground = styled.div<CircleBackgroundProps>`
  height: 400px;
  width: 400px;
  background-color: ${(props) =>
    props.background ? props.background : "#f2faff"};
  border-radius: 50%;
  z-index: -5;

  top: 0;
  bottom: 0;
  left: -42px;
  right: 0;

  position: absolute;
  margin: auto;

  animation: ${waveWide} 3s linear infinite;

  ${media.sm`
    width: 380px;
    height: 380px;
  `}

  ${media.xs`
    width: 250px;
    height: 250px;
    left: -30px;
  `}
`;

export {
  StyledTestimonialWithImage,
  ImageCol,
  DescriptionCol,
  Quote,
  Quotee,
  CircleBackground,
  ImageContainer,
};
