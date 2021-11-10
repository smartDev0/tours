import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";

const WebinarContainer = styled.div`
  display: block;
  margin-bottom: 64px;

  ${StyledTitle} {
    margin-top: 16px;
  }
`;

const WebinarCategoryContainer = styled.div``;

export { WebinarContainer, WebinarCategoryContainer };
