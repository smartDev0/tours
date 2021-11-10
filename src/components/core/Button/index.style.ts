import styled, { css } from "styled-components";
import { InternalButtonProps } from "components/core/Button/index";
import { media } from "styled-bootstrap-grid";
import { getCTAColor, getCTADarkenColor } from "utils/color";
import { StyledSpinner } from "components/core/Spinner/index.style";

const StyledButton = styled.button<InternalButtonProps>`
  background: ${(props) => (props.inverted ? "#fff" : props.theme.accentColor)};
  border: 2px solid
    ${(props) => (props.inverted ? "#fff" : props.theme.accentColor)};
  color: ${(props) => (props.inverted ? props.theme.accentColor : "#fff")};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 16px;
  min-height: 42px;

  ${(props) =>
    props.ctaColor &&
    css`
      border: 2px solid ${getCTAColor(props.ctaColor)};
      background: ${getCTAColor(props.ctaColor)};

      &:hover {
        border: 2px solid ${getCTADarkenColor(props.ctaColor)} !important;
        background: ${getCTADarkenColor(props.ctaColor)} !important;
      }
    `}

  ${(props) =>
    props.outline &&
    css`
      border-color: ${props.inverted ? props.theme.accentColor : "#fff"};
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      display: flex;
      width: 100%;
    `}

  &:hover {
    background: ${(props) =>
      props.inverted
        ? props.theme.baseLighten85Color
        : props.theme.accentDarkenColor};
    border: 2px solid
      ${(props) =>
        props.inverted
          ? props.outline
            ? props.theme.accentDarkenColor
            : props.theme.baseLighten85Color
          : props.outline
          ? props.theme.baseLighten85Color
          : props.theme.accentDarkenColor};
    color: ${(props) => (props.inverted ? props.theme.accentColor : "#fff")};
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  &[disabled],
  fieldset[disabled] & {
    opacity: 0.5;
    cursor: default;

    &:hover {
      box-shadow: none !important;
    }
  }

  ${StyledSpinner} {
    width: 7em;
    height: 7em;
  }

  svg {
    stroke: ${(props) => (props.inverted ? props.theme.accentColor : "#fff")};
    margin-left: ${(props) =>
      props.icon?.position === "right"
        ? "4px"
        : !props.icon?.position
        ? "4px"
        : "0"};
    margin-right: ${(props) => (props.icon?.position === "left" ? "4px" : "0")};

    width: 16px;
    height: 16px;

    ${media.md`
      width: 22px;
      height: 22px;
    `}

    ${media.lg`
      width: 26px;
      height: 26px;
    `}
  }

  ${media.md`
    font-size: 22px;
    line-height: 1.4;
  `}

  ${media.lg`
    font-size: 26px;
  `}
`;

export { StyledButton };
