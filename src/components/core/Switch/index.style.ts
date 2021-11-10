import styled, { css } from "styled-components";
import { SwitchProps } from "./index";
import { lighten } from "polished";

const dark = css`
  i {
    background: ${(props) => props.theme.darkSidebar};

    &:before {
      background: ${(props) => props.theme.darkSidebar};
    }

    &:after {
      background: ${(props) => lighten(0.22, props.theme.darkSidebar)};
    }
  }

  input {
    &:checked + i {
      &:after {
        background: ${(props) => props.theme.white};
      }
    }
  }
`;

const StyledSwitchBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSwitch = styled.label<SwitchProps>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  i {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
    background-color: #e6e6e6;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 42px;
      height: 22px;
      background-color: #fff;
      border-radius: 11px;
      transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
      transition: all 0.25s linear;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 22px;
      height: 22px;
      background-color: #fff;
      border-radius: 11px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
      transform: translate3d(2px, 2px, 0);
      transition: all 0.2s ease-in-out;
    }
  }

  &:active {
    i::after {
      width: 28px;
      transform: translate3d(2px, 2px, 0);
    }

    input {
      &:checked + i::after {
        transform: translate3d(16px, 2px, 0);
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked + i {
      background-color: ${(props) => props.theme.lightText};

      &::before {
        transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
      }

      &::after {
        transform: translate3d(22px, 2px, 0);
      }
    }
  }

  input {
    &:checked + i {
      background-color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Label = styled.label`
  margin: 0 8px;

  span {
    display: block;
    position: relative;
    top: -2px;
    color: ${(props) => props.theme.lightText};
  }
`;

export { StyledSwitch, Label, StyledSwitchBlock };
