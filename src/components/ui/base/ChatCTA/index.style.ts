import styled from "styled-components";
import { Col, Container, media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledButton } from "components/core/Button/index.style";

export interface ChatCTAContainerProps {
  maxWidth?: number;
}

const StyledChatCTA = styled.section`
  ${StyledHeading} {
    color: #fff;
    margin: 0;
    font-size: 2.25em;
    line-height: 40px;
  }

  ${StyledButton} {
    font-size: 1.3em;
    line-height: 40px;
    padding: 12px 24px;
  }
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
  padding: 32px 0;
  position: relative;
`;

const ChatCTAContainer = styled(Container)<ChatCTAContainerProps>`
  ${Col} {
    margin: 16px 0;

    ${media.md`
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
     `}

    ${(props) =>
      props.maxWidth &&
      `
      max-width: ${props.maxWidth};
    `}
  }
`;

export { StyledChatCTA, OuterContainer, WrapperContainer, ChatCTAContainer };
