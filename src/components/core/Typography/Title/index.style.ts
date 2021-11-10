import styled from "styled-components";

const StyledTitle = styled.h2`
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.titleColor};
  margin-top: 0.3em;
`;

export { StyledTitle };
