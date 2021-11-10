import styled from "styled-components";
import { StyledInput } from "components/core/Input/index.style";
import { StyledButton } from "components/core/Button/index.style";
import { media } from "styled-bootstrap-grid";
import { CTAColor } from "app-types/color";
import { getCTAColor, getCTADarkenColor } from "utils/color";

const StyledInputCTA = styled.div<{ color?: CTAColor }>`
  display: flex;

  ${StyledInput} {
    border: 2px solid ${(props) => props.color && getCTAColor(props.color)};
    border-radius: ${(props) =>
      `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`};
  }

  form {
    display: flex;
    flex: 1;
  }
`;

const CTAButton = styled(StyledButton)<{ color?: CTAColor }>`
  background: ${(props) => props.color && getCTAColor(props.color)};
  border: 2px solid ${(props) => props.color && getCTAColor(props.color)};
  box-shadow: none;
  border-radius: ${(props) =>
    `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`};
  font-size: 16px;
  padding: 16px 12px;
  width: 220px;
  min-height: 68px;

  &:hover {
    background: ${(props) => props.color && getCTADarkenColor(props.color)};
    border: 2px solid
      ${(props) => props.color && getCTADarkenColor(props.color)};
    color: #fff;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  ${media.sm`
    font-size: 18px;
  `}
`;

export { StyledInputCTA, CTAButton };
