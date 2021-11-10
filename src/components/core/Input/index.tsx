import React from "react";
import { StyledInput } from "./index.style";

export interface InternalInputProps {
  fullWidth?: boolean;
  disabled?: boolean;
}

export type InputProps = InternalInputProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  any;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <StyledInput ref={ref} {...props}>
      {props.children}
    </StyledInput>
  );
});

Input.defaultProps = {
  fullWidth: false,
  disabled: false,
};

export default Input;
