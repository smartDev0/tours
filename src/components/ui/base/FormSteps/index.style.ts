import styled, { css } from "styled-components";
import { Col } from "styled-bootstrap-grid";
import Button from "components/core/Button";
import Heading from "components/core/Typography/Heading";
import { StyledHeading } from "components/core/Typography/Heading/index.style";

export interface ProgressBarProps {
  progress: number;
}

export interface ActiveProps {
  active: boolean;
}

const StyledFormSteps = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientAccentColor};
  padding: 64px 0;
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const Form = styled.form<ActiveProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.active ? "100%" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.3s ease-in-out;
`;

const RadioDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    font-weight: 600;
    color: #fff;
  }
`;

const RadioContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: left;
  align-items: center;
  border: 2px solid #e4e4e4;
  border-radius: ${(props) => props.theme.borderRadius};
  background: #ffffff;
  padding: 8px 24px;
  width: 100%;
  margin-bottom: 8px;

  > label {
    cursor: pointer;
    padding-left: 8px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  > input {
    width: unset;
    cursor: pointer;
  }
`;

const ButtonCol = styled(Col)`
  margin-top: 16px;
`;

const NextButton = styled(Button)<ActiveProps>`
  border-color: ${(props) => props.theme.yellowColor};
  background: ${(props) => props.theme.yellowColor};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.yellowDarkenColor};
    border-color: ${(props) => props.theme.yellowDarkenColor};
  }
`;

const ProgressBarOuter = styled.div<ActiveProps>`
  margin-top: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  flex: 1;
  background-color: ${(props) => props.theme.accentDarken60Color};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 1.6s ease-in-out;
`;

const ProgressBarWrapper = styled.div`
  height: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  margin: 0 2px;
`;

const ProgressBar = styled.div<ProgressBarProps>`
  height: 100%;
  width: 100%;
  background-color: #fff;
  transform-origin: left top;
  transition: all 0.3s ease-in-out;
  transform: scaleX(${(props) => props.progress});
`;

const FormStep = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.active ? "100%" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.3s ease-in-out;

  > * {
    margin: 4px 0;
  }
`;

const SelectDiv = styled.div`
  background: #fff;
  border: 2px solid #2fb6fa;
  border-radius: 7px;
  padding: 8px 16px;
  font-size: 16px;
  height: 48px;
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  width: 100%;

  &::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: ${(props) => props.theme.accentColor};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }

  > select {
    appearance: none;
    background-color: transparent;
    border: none;
    margin: 0;
    width: 100%;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
    grid-area: select;

    &::-ms-expand {
      display: none;
    }
  }
`;

const FormCol = styled(Col)`
  display: flex;
  flex-direction: row;
`;

const CompleteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 18px;

  ${StyledHeading} {
    text-align: center;
    margin-top: 16px;
    color: #fff;
    font-size: 3.5em;
    line-height: 1.5em;
    margin-bottom: 0;
  }
`;

const Emoji = styled.span`
  text-align: center;
  font-size: 112px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingCol = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 80px;
`;

const FormHeading = styled(Heading)`
  text-align: center;
  color: #fff;
  font-size: 2em;
`;

const MainCol = styled(Col)<ActiveProps>`
  width: ${(props) => (props.active ? "100%" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  ${(props) =>
    !props.active &&
    css`
      padding: 0;
    `}
`;

export {
  StyledFormSteps,
  OuterContainer,
  WrapperContainer,
  Form,
  RadioDiv,
  RadioContainer,
  RadioContainerWrapper,
  ButtonCol,
  ProgressBarOuter,
  ProgressBarWrapper,
  ProgressBar,
  FormStep,
  CompleteDiv,
  Emoji,
  FormCol,
  NextButton,
  FormHeading,
  HeadingCol,
  SelectDiv,
  MainCol,
};
