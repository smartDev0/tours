import React, { FunctionComponent } from "react";
import { StyledTooltip } from "./index.style";

/** The props of the `StyledTooltip` component */
export interface TooltipProps {
  position?:
    | "right"
    | "left"
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  content?: string;
  type: "custom" | "hover";
  show?: boolean;
  className?: string;
  error?: boolean;
}

const Tooltip: FunctionComponent<TooltipProps> = (props) => {
  return (
    <StyledTooltip
      data-tooltip={props.content}
      data-position={props.position}
      show={props.show}
      type={props.type}
      className={props.className}
      error={props.error}
    >
      {props.children}
    </StyledTooltip>
  );
};

Tooltip.defaultProps = {
  position: "top-center",
  content: "",
  error: true,
};

export default Tooltip;
