import React, { useRef, useState } from "react";
import Input from "components/core/Input";
import { CTAButton, StyledInputCTA } from "./index.style";
import Spinner from "components/core/Spinner";
import Tooltip from "components/core/Tooltip";
import { CTAColor } from "app-types/color";

export interface InputCTAProps {
  placeholder: string;
  buttonText: string;
  className?: string;
  inputType?: string;
  color?: CTAColor;
  onSubmit: (value: string) => Promise<void>;
  id?: string;
}

const InputCTA = (props: InputCTAProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [tooltipMessage, setTooltipMessage] = useState<string>("");
  const [tooltipShow, setTooltipShow] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!inputRef.current?.checkValidity()) {
      setTooltipMessage(
        inputRef.current?.validationMessage
          ? inputRef.current?.validationMessage
          : "Error"
      );
      setTooltipShow(true);
    } else {
      setIsLoading(true);

      props
        .onSubmit(value)
        .catch((error: any) => {
          setTooltipMessage(error.message);
          setTooltipShow(true);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <StyledInputCTA className={props.className} color={props.color}>
      <form>
        <Tooltip
          content={tooltipMessage}
          type={"custom"}
          position={"top-center"}
          show={tooltipShow}
        >
          <Input
            type={props.inputType}
            placeholder={props.placeholder}
            onChange={(e: any) => {
              setValue(e.target.value);
              setTooltipShow(false);
            }}
            ref={inputRef}
            id={props.id}
            required
          />
        </Tooltip>
        <CTAButton onClick={onSubmit} color={props.color}>
          <Spinner isLoading={isLoading}>{props.buttonText}</Spinner>
        </CTAButton>
      </form>
    </StyledInputCTA>
  );
};

InputCTA.defaultProps = {
  inputType: "text",
  color: CTAColor.Yellow,
};

export default InputCTA;
