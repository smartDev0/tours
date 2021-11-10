import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.accentColor};
  font-weight: 500;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export { StyledSubtitle };
