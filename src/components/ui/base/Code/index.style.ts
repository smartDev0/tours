import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { Col } from "styled-bootstrap-grid";

export interface StyledCodeProps {
  centered?: boolean;
}

const StyledCode = styled.section<StyledCodeProps>`
  ${StyledHeading} {
    font-size: 1.2em;
    font-weight: 600;
    line-height: 1.2;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 0.3em;
    margin-top: 0.75em;
  }

  ${(props) =>
    props.centered &&
    `
    ${StyledHeading}, ${StyledTitle}, p {
      text-align: center;
    }
    `}
`;

const CodeContainer = styled(Col)`
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  padding: 0;
  margin-top: 48px;

  * {
    color: #fff;
  }
`;

const CodeCol = styled(Col)<StyledCodeProps>`
  ${(props) =>
    props.centered &&
    `
    justify-content: center;
    `}
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 2px;
    stroke: ${(props) => props.theme.accentColor};
  }
`;

export { StyledCode, CodeContainer, CTAContainer, CodeCol };
