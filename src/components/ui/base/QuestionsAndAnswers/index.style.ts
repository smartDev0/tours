import styled, { css } from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { StyledSubtitle } from "components/core/Typography/Subtitle/index.style";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { media } from "styled-bootstrap-grid";
import { PageContainer } from "styles/global.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";

export interface TabProps {
  active: boolean;
}

const StyledQuestionsAndAnswers = styled.section`
  ${StyledTitle} {
    text-align: center;
  }

  ${StyledSubtitle} {
    text-align: center;
  }

  ${PageContainer} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-top: 0;
`;

const TabsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tabs = styled.ul`
  text-align: center;
  list-style: none;
  margin-bottom: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${media.sm`
    max-width: 576px;
  `}

  ${media.lg`
    max-width: 768px;
  `}
    
    ${StyledAnimation} {
    width: 100%;
  }
`;

const Answer = styled.p`
  transition: all 0.3s ease-in-out;
`;

const Tab = styled.li<TabProps>`
  padding: 12px;
  border: 2px solid #f2f0f5;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: left;
  margin-right: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;

  p {
    margin: 0.5em 0 0 25px;
    font-size: 16px;
  }

  ${(props) =>
    props.active &&
    css`
      border-color: ${props.theme.accentColor};
      svg {
        stroke: ${props.theme.accentColor} !important;
      }

      ${StyledHeading} {
        color: ${props.theme.accentColor} !important;
      }

      svg {
        transform: rotate(90deg);
      }
    `}
`;

const TabHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    stroke: ${(props) => props.theme.titleColor};
  }

  ${StyledHeading} {
    margin: 0 5px;
    color: ${(props) => props.theme.titleColor};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    font-size: 0.75em;
  }
`;

export {
  StyledQuestionsAndAnswers,
  Description,
  TabsDiv,
  Tab,
  Tabs,
  TabHeading,
  Answer,
};
