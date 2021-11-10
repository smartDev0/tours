import styled, { css } from "styled-components";
import { lighten, rgba } from "polished";
import { InternalInputProps } from "components/core/Input/index";

const StyledInput = styled.input<InternalInputProps>`
  background: #fff;
  border: 2px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.titleColor};
  border-radius: ${(props) => props.theme.borderRadius};
  display: inline-block;
  padding: 8px 16px;
  font-size: 16px;

  &::placeholder {
    color: ${(props) => lighten(0.1, props.theme.baseLightColor)};
  }

  &[disabled],
  fieldset[disabled] & {
    background-color: ${(props) => props.theme.baseLighten95Color};
    border-color: ${(props) => props.theme.baseLighten75Color};
    box-shadow: none;
    color: ${(props) => props.theme.baseColor};

    &::placeholder,
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
      color: ${(props) => rgba(props.theme.baseColor, 0.3)};
    }
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export { StyledInput };
