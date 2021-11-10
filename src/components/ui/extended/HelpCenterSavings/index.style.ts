import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";

const StyledHelpCenterSavings = styled.section`
  display: block;
  text-align: center;
  white-space: pre-line;

  ${StyledTitle} {
    span {
      color: ${(props) => props.theme.titleColor};
    }
  }
`;

export { StyledHelpCenterSavings };
