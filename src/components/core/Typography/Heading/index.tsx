import React, { ReactChild } from "react";
import { StyledHeading } from "./index.style";

/** The props of the `Heading` component */
export interface InternalHeadingProps {
  level: number;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | "normal";
  children: ReactChild | ReactChild[];
  className?: string;
  maxWidth?: number;
}

export type HeadingProps = InternalHeadingProps & any;

const Heading = ({ children, level, ...rest }: HeadingProps) => (
  <StyledHeading as={`h${level}`} {...rest}>
    {children}
  </StyledHeading>
);

Heading.defaultProps = {
  level: 1,
  weight: "normal",
};

export default Heading;
