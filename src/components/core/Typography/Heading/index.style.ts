import styled from "styled-components";
import { InternalHeadingProps } from "components/core/Typography/Heading";

const StyledHeading = styled.h1<InternalHeadingProps>`
  font-weight: ${(props) => props.weight};

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

export { StyledHeading };
