import styled, { css } from "styled-components";

export interface StyledTooltipProps {
  show?: boolean;
  type: "custom" | "hover";
  error?: boolean;
}

const StyledTooltip = styled.div<StyledTooltipProps>`
  &[data-tooltip] {
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    position: relative;
    display: flex;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      transform: translate3d(0, 0, 0);
      visibility: hidden;
      opacity: 0;
      z-index: 1000000;
      pointer-events: none;
      transition: 0.3s ease;
      transition-delay: 0ms;
    }

    &::before {
      content: "";
      position: absolute;
      background: transparent;
      border: 6px solid transparent;
      z-index: 1000001;
    }

    &::after {
      background: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      color: white;
      padding: 12px 16px;
      font-size: 16px;
      line-height: 16px;
      white-space: nowrap;
      content: attr(data-tooltip);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::before,
              &::after {
                visibility: visible;
                opacity: 1;
                transition-delay: 100ms;
              }
            }
          `
        : props.show &&
          css`
            &::before,
            &::after {
              visibility: visible;
              opacity: 1;
              transition-delay: 100ms;
            }
          `};
  }

  &[data-position="left"] {
    &::after,
    &::before {
      right: 100%;
      bottom: 50%;
    }

    &::before {
      border-left-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-right: -11px;
      margin-bottom: -6px;
    }

    &::after {
      margin-bottom: -14px;
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::before,
              &::after {
                transform: translateX(-8px);
              }
            }
          `
        : props.show &&
          css`
            &::before,
            &::after {
              transform: translateX(-8px);
            }
          `};
  }

  &[data-position="right"] {
    &::after,
    &::before {
      left: 100%;
      bottom: 50%;
    }

    &::after {
      margin-bottom: -14px;
    }

    &::before {
      border-right-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-left: -11px;
      margin-bottom: -6px;
    }

    ${(props) =>
      props.type === "hover" &&
      css`
        &:hover {
          &::after,
          &::before {
            transform: translateX(8px);
          }
        }
      `};
  }

  &[data-position="top-center"] {
    &::after,
    &::before {
      bottom: 100%;
      left: 50%;
    }

    &::after {
      transform: translateX(-50%);
    }

    &::before {
      border-top-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-bottom: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::after {
                transform: translateX(-50%) translateY(-8px);
              }

              &::before {
                transform: translateY(-8px);
              }
            }
          `
        : props.show &&
          css`
            &::after {
              transform: translateX(-50%) translateY(-8px);
            }

            &::before {
              transform: translateY(-8px);
            }
          `};
  }

  &[data-position="top-left"] {
    &::after,
    &::before {
      bottom: 100%;
      left: 50%;
    }

    &::after {
      transform: translateX(-100%);
      margin-left: 12px;
    }

    &::before {
      border-top-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-bottom: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::after {
                transform: translateX(-100%) translateY(-8px);
              }

              &::before {
                transform: translateY(-8px);
              }
            }
          `
        : props.show &&
          css`
            &::after {
              transform: translateX(-100%) translateY(-8px);
            }

            &::before {
              transform: translateY(-8px);
            }
          `};
  }

  &[data-position="top-right"] {
    &::after,
    &::before {
      bottom: 100%;
      left: 50%;
    }

    &::after {
      transform: translateX(0);
      margin-left: -12px;
    }

    &::before {
      border-top-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-bottom: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::before,
              &::after {
                transform: translateY(-8px);
              }
            }
          `
        : props.show &&
          css`
            &:hover {
              &::before,
              &::after {
                transform: translateY(-8px);
              }
            }
          `};
  }

  &[data-position="bottom-center"] {
    &::after,
    &::before {
      top: 100%;
      left: 50%;
    }

    &::after {
      transform: translateX(-50%);
    }

    &::before {
      border-bottom-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-top: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::after {
                transform: translateX(-50%) translateY(8px);
              }

              &::before {
                transform: translateY(8px);
              }
            }
          `
        : props.show &&
          css`
            &::after {
              transform: translateX(-50%) translateY(8px);
            }

            &::before {
              transform: translateY(8px);
            }
          `};
  }

  &[data-position="bottom-left"] {
    &::after,
    &::before {
      top: 100%;
      left: 50%;
    }

    &::after {
      margin-left: 12px;
      transform: translateX(-100%);
    }

    &::before {
      border-bottom-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-top: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::after {
                transform: translateX(-100%) translateY(8px);
              }

              &::before {
                transform: translateY(8px);
              }
            }
          `
        : props.show &&
          css`
            &::after {
              transform: translateX(-100%) translateY(8px);
            }

            &::before {
              transform: translateY(8px);
            }
          `};
  }

  &[data-position="bottom-right"] {
    &::after,
    &::before {
      top: 100%;
      left: 50%;
    }

    &::after {
      margin-left: -12px;
      transform: translateX(0%);
    }

    &::before {
      border-bottom-color: ${(props) =>
        props.error ? props.theme.redErrorColor : props.theme.accentColor};
      margin-top: -11px;
      left: calc(50% - 6px);
    }

    ${(props) =>
      props.type === "hover"
        ? css`
            &:hover {
              &::before,
              &::after {
                transform: translateY(8px);
              }
            }
          `
        : props.show &&
          css`
            &:hover {
              &::before,
              &::after {
                transform: translateY(8px);
              }
            }
          `};
  }
`;

export { StyledTooltip };
