import React from "react";
import {
  BackgroundDiv,
  HeaderCol,
  StepCol,
  StepsRow,
  StyledNumberSteps,
  TextDiv,
} from "./index.style";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Container, Row } from "styled-bootstrap-grid";
import { Title } from "components/core/Typography/Title";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";

export interface NumberStepsProps {
  title: string;
  description?: string;
  titleMaxWidth?: number;
  elements: {
    title: string;
    description: string;
  }[];
}

const NumberSteps = (props: NumberStepsProps) => {
  return (
    <StyledNumberSteps>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <HeaderCol titleMaxWidth={props.titleMaxWidth}>
                <Fade direction={"up"}>
                  <Title>{props.title}</Title>
                  {props.description && <p>{props.description}</p>}
                </Fade>
              </HeaderCol>
            </Row>
            <StepsRow justifyContent={"center"}>
              {props.elements.map((element, i) => (
                <StepCol lg={3} md={6} key={i}>
                  <Fade direction={"right"} delayMd={300 + i * 300}>
                    <BackgroundDiv>{i + 1}</BackgroundDiv>
                    <TextDiv>
                      <Heading level={3}>{element.title}</Heading>
                      <p>{element.description}</p>
                    </TextDiv>
                  </Fade>
                </StepCol>
              ))}
            </StepsRow>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledNumberSteps>
  );
};

export default NumberSteps;
