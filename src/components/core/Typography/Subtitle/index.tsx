import React from "react";
import { StyledSubtitle } from "./index.style";

export interface StyledSubtitleProps {
  children: any;
}

const Subtitle = ({ children }: StyledSubtitleProps) => (
  <StyledSubtitle>{children}</StyledSubtitle>
);

export { Subtitle };
