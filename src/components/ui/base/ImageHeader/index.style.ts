import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { waveWide } from "styles/global.keyframes.style";
import { StyledBreadcrumbs } from "components/core/Breadcrumbs/index.style";

export interface CircleBackgroundProps {
  background?: string;
}

const StyledImageHeader = styled.section`
  ${StyledHeading} {
    color: ${(props) => props.theme.titleColor};

    * {
      color: ${(props) => props.theme.titleColor};
    }
  }
`;

const DescriptionCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 32px;

  ${media.lg`
    margin: 0;
  `}

  ${StyledBreadcrumbs} {
    margin-bottom: 0.75em;
  }

  ${StyledHeading} {
    color: #2b2350;
    font-weight: bold;
    margin-top: 0;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleBackground = styled.div<CircleBackgroundProps>`
  height: 500px;
  width: 500px;
  background-color: ${(props) =>
    props.background ? props.background : "#f2faff"};
  border-radius: 50%;
  z-index: -5;

  top: 0;
  bottom: 0;
  left: 0;
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
  `}
`;

export { StyledImageHeader, DescriptionCol, ImageCol, CircleBackground };
