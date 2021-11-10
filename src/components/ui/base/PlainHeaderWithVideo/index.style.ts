import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { Col, Container, media } from "styled-bootstrap-grid";
import { StyledRegisterCTA } from "components/ui/extended/RegisterCTA/index.style";
import Button from "components/core/Button";

export interface PlainHeaderWithVideoContainerProps {
  maxWidth?: number;
}

export interface DescriptionProps {
  maxWidth?: number;
}

const StyledPlainHeaderWithVideo = styled.section`
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
  margin: 0;

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

const PlainHeaderWithVideoContainer = styled(
  Container
)<PlainHeaderWithVideoContainerProps>`
  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}

  ${StyledRegisterCTA} {
    margin-top: 32px;
  }
`;

const PlainHeaderWithVideoCenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlainHeaderWithVideoCol = styled(PlainHeaderWithVideoCenteredCol)`
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

const VideoContainer = styled.div`
  margin-top: 2em;
  padding: 56.25% 0 0 0;
  position: relative;
  overflow: hidden;
`;

const VideoInnerContainer = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const VideoEmbed = styled.span`
  display: inline-block;
  height: 100%;
  position: relative;
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export {
  StyledPlainHeaderWithVideo,
  Description,
  PlainHeaderWithVideoContainer,
  PlainHeaderWithVideoCol,
  PlainHeaderWithVideoCenteredCol,
  CTAButton,
  VideoContainer,
  VideoInnerContainer,
  VideoEmbed,
  Video,
};
