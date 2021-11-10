import styled, { css } from "styled-components";
import { Col, media, Row } from "styled-bootstrap-grid";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";

const StyledNumberSteps = styled.section``;

const HeaderCol = styled(Col)<{ titleMaxWidth?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${StyledAnimation} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${StyledTitle} {
    text-align: center;
    margin-bottom: 0;

    ${(props) =>
      props.titleMaxWidth &&
      css`
        max-width: ${props.titleMaxWidth}px;
      `}
  }

  p {
    margin-top: 8px;
    text-align: center;
  }
`;

const StepCol = styled(Col)`
  margin: 16px 0;

  ${media.lg`
      margin: 0;
    `}
`;

const BackgroundDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.05);
  font-size: 5em;
  font-weight: 600;
`;

const TextDiv = styled.div`
  text-align: center;
  padding-top: 24px;

  ${StyledHeading} {
    margin-bottom: 0;
    color: ${(props) => props.theme.titleColor};
    font-weight: 600;
    margin-top: 8px;
    font-size: 22px;
  }

  p {
    margin-top: 8px;
    font-size: 18px;
  }
`;

const StepsRow = styled(Row)`
  margin-top: 80px;
`;

export {
  StyledNumberSteps,
  HeaderCol,
  BackgroundDiv,
  TextDiv,
  StepsRow,
  StepCol,
};
