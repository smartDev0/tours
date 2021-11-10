import React, { FunctionComponent } from "react";
import { StyledButton } from "./index.style";
import Icon, { IconType } from "components/core/Icon";
import { Position } from "app-types/position";
import { CTAColor } from "app-types/color";

export interface InternalButtonProps {
  icon?: {
    type: IconType;
    position?: Position;
    size?: number;
  };
  ctaColor?: CTAColor;
  disabled?: boolean;
  inverted?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
}

export type ButtonProps = InternalButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  any;

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {!(props.icon?.position && props.icon.position === "left") &&
        props.children}
      {props.icon && (
        <Icon
          type={props.icon.type}
          size={props.icon.size ? props.icon.size : 16}
        />
      )}
      {props.icon?.position && props.icon.position === "left" && props.children}
    </StyledButton>
  );
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
};

export default Button;
