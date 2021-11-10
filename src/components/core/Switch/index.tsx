import React, { FunctionComponent } from "react";
import { Label, StyledSwitch, StyledSwitchBlock } from "./index.style";

export interface InternalSwitchProps {
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}

export type SwitchProps = InternalSwitchProps &
  React.HTMLProps<HTMLInputElement>;

const Switch: FunctionComponent<SwitchProps> = ({
  disabled,
  leftLabel,
  rightLabel,
  ...rest
}) => {
  return (
    <StyledSwitchBlock>
      {leftLabel && (
        <Label htmlFor={rest.name}>
          <span>{leftLabel}</span>
        </Label>
      )}
      <StyledSwitch kind={rest.kind}>
        <input type="checkbox" disabled={disabled} {...rest} />
        <i />
      </StyledSwitch>
      {rightLabel && (
        <Label htmlFor={rest.name}>
          <span>{rightLabel}</span>
        </Label>
      )}
    </StyledSwitchBlock>
  );
};

Switch.defaultProps = {
  disabled: false,
  label: undefined,
};

export default Switch;
