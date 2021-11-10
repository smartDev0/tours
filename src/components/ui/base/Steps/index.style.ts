import styled, { keyframes } from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { StyledHeading } from "components/core/Typography/Heading/index.style";

export interface StepsColProps {
  hasTitle: boolean;
}

const StyledSteps = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientAccentColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const TitleCol = styled(Col)`
  margin: 32px 0;

  ${StyledTitle} {
    color: #fff;
  }
`;

const StepDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  margin: 8px 8px;

  ${media.lg`
    margin: 0;
  `}

  ${StyledHeading} {
    margin-top: 1em;
    margin-bottom: 4px;
    color: #fff;
  }

  p {
    margin-top: 0.5em;
    font-size: 20px;
    color: #fff;
  }
`;

const StepsCol = styled(Col)<StepsColProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;

  ${(props) => !props.hasTitle && "margin-top: 32px;"}

  ${media.sm`
    flex-direction: row;
  `}
`;

const StepImage = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
`;

const DashAnimation = keyframes`
  0% {
    stroke-dashoffset: 1000;
  } 
    
    100%{}
`;

const StepSpace = styled.div`
  display: none;
  flex-grow: 0.1;
  padding: 0 8px;
  height: 100%;
  align-items: center;

  ${media.lg`
    display: flex
  `}

  svg {
    width: 100%;
    > path {
      stroke-linecap: round;
      stroke: #fff;
      stroke-width: 2;
    }

    > path:first-child {
      animation: ${DashAnimation} 30s linear infinite;
      stroke-dasharray: 10 10;
    }
  }
`;

export {
  StyledSteps,
  OuterContainer,
  WrapperContainer,
  TitleCol,
  StepsCol,
  StepDiv,
  StepImage,
  StepSpace,
};
