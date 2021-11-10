import React from "react";
import { StyledTitle } from "./index.style";

export interface StyledTitleProps {
  children: any;
  className?: string;
}

const Title = ({ children, className }: StyledTitleProps) => (
  <StyledTitle className={className}>{children}</StyledTitle>
);

export { Title };
