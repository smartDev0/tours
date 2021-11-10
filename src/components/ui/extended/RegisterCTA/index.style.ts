import styled from "styled-components";
import { media, Row } from "styled-bootstrap-grid";

const StyledRegisterCTA = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValidationContainer = styled(Row)`
  margin-top: 8px;
`;

const ValidationElement = styled.div`
  color: ${(props) => props.theme.baseColor};
  font-size: 11px;
  align-items: center;
  display: flex;

  ${media.sm`
      font-size: 12px;
  `}

  svg {
    margin-right: 4px;
    stroke: ${(props) => props.theme.baseColor};
  }
`;

export { StyledRegisterCTA, ValidationContainer, ValidationElement };
