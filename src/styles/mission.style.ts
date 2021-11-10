import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { media } from "styled-bootstrap-grid";

const MissionContainer = styled.div`
  background: #000;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${StyledHeading} {
    max-width: 100%;
    color: #fff;
    font-size: 1.7em;
    line-height: 1.2em;
    padding: 32px 0;
    text-align: center;
  }

  ${media.sm`
    padding-top: 120px;
    
    ${StyledHeading} {
      font-size: 3em;
      line-height: 1.5em;
      max-width: 70%;
    }
  `}
`;

const MissionInnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EarthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  ${media.sm`
    margin-bottom: 64px;
  `}
`;

const EarthInnerContainer = styled.div`
  max-width: 50%;
`;

const StatementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  ${media.sm`
    margin-bottom: 64px;
  `}
`;

const Section = styled.div`
  margin: 32px 0;
  width: 100%;

  ${StyledHeading} {
    font-size: 1.7em;
    line-height: 1.2em;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 32px;
    text-align: center;
  }

  p {
    margin-left: 32px;
    font-size: 1.2em;
    line-height: 1em;
  }

  ${(props) => media.sm`
    width: 60%;
       
    ${StyledHeading} {
      font-size: 3em;
      line-height: 1.5em;
      color: ${props.theme.titleColor};
      margin-bottom: 64px;
      text-align: left;
    }

    p {
      margin-left: 64px;
      font-size: 1.8em;
      line-height: 1.3em;
    }
  `}
`;

export {
  Section,
  StatementContainer,
  MissionContainer,
  MissionInnerContainer,
  EarthContainer,
  EarthInnerContainer,
};
