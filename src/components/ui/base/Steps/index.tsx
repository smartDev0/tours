import React from "react";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  OuterContainer,
  StepDiv,
  StepImage,
  StepsCol,
  StepSpace,
  StyledSteps,
  TitleCol,
  WrapperContainer,
} from "components/ui/base/Steps/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { useTranslation } from "react-i18next";
import { Title } from "components/core/Typography/Title";
import Heading from "components/core/Typography/Heading";
import StaticImg from "components/core/StaticImg";
import Fade from "components/core/Animation/extended/Fade";

export interface StepsProps {
  title?: string;
  steps: {
    title: string;
    description: string;
    image: {
      relativePath: string;
      alt: string;
    };
  }[];
}

const Steps = (props: StepsProps) => {
  const { t } = useTranslation();

  return (
    <StyledSteps>
      <MediumComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                {props.title && (
                  <Fade direction={"down"}>
                    <Row>
                      <TitleCol lg={8} lgOffset={1}>
                        <Title>{props.title}</Title>
                      </TitleCol>
                    </Row>
                  </Fade>
                )}

                <Row>
                  <StepsCol hasTitle={false}>
                    <StepDiv>
                      <Fade direction={"right"} delay={500}>
                        <StepImage>
                          <StaticImg
                            src={props.steps[0].image.relativePath}
                            alt={props.steps[0].image.alt}
                          />
                        </StepImage>
                        <Heading level={3} weight={600}>
                          {props.steps[0].title}
                        </Heading>
                        <p>{props.steps[0].description}</p>
                      </Fade>
                    </StepDiv>

                    <StepSpace>
                      <Fade direction={"right"} delay={1000}>
                        <svg
                          width="150"
                          height="150"
                          viewBox="0 0 209 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.0048 95.2407C22.0123 77.913 34.1064 57.5344 56.1917 65.686C72.6523 71.7628 80.5683 88.3724 78.751 105.561C76.8967 123.102 69.4066 142.125 86.583 151.992C113.294 167.335 161.782 137.14 189.787 122.921" />
                          <path d="M184.979 135.681C187.87 128.377 195.437 124.259 199.579 117.541C193.684 118.225 181.803 119.122 177.11 116.619" />
                        </svg>
                      </Fade>
                    </StepSpace>

                    <StepDiv>
                      <Fade direction={"right"} delay={1500}>
                        <StepImage>
                          <StaticImg
                            src={props.steps[1].image.relativePath}
                            alt={props.steps[1].image.alt}
                          />
                        </StepImage>
                        <Heading level={3} weight={600}>
                          {props.steps[1].title}
                        </Heading>
                        <p>{props.steps[1].description}</p>
                      </Fade>
                    </StepDiv>

                    <StepSpace>
                      <Fade direction={"right"} delay={2000}>
                        <svg
                          width="150"
                          height="40"
                          viewBox="0 0 151 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.51709 29.4014C7.93627 32.9918 11.2026 32.3212 14.9506 32.3951C29.782 32.7037 44.7819 29.9395 59.5624 28.3585C84.2453 25.7218 110.556 19.6528 135.183 26.3771" />
                          <path d="M129.8 42.8348C133.808 33.6803 140.653 32.6705 145.483 25.2908C140.767 22.2104 131.383 15.2744 128.369 8.16504" />
                        </svg>
                      </Fade>
                    </StepSpace>

                    <StepDiv>
                      <Fade direction={"right"} delay={2500}>
                        <StepImage>
                          <StaticImg
                            src={props.steps[2].image.relativePath}
                            alt={props.steps[2].image.alt}
                          />
                        </StepImage>
                        <Heading level={3} weight={600}>
                          {props.steps[2].title}
                        </Heading>
                        <p>{props.steps[2].description}</p>
                      </Fade>
                    </StepDiv>
                  </StepsCol>
                </Row>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </MediumComponentContainer>
    </StyledSteps>
  );
};

export default Steps;
