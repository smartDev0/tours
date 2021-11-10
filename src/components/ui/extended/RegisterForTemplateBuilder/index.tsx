import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  CustomRegisterCTA,
  FloatingArrowImage,
  FloatingLeftImage,
  HeadingContainer,
  ImageContainer,
  OuterContainer,
  StyledRegisterForTemplateBuilder,
  WrapperContainer,
} from "components/ui/extended/RegisterForTemplateBuilder/index.style";
import { useTranslation } from "react-i18next";
import { PageContainer, SmallComponentContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import StaticSvg from "components/core/StaticSvg";

export default () => {
  const { t } = useTranslation();

  return (
    <StyledRegisterForTemplateBuilder>
      <SmallComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Row>
                  <Col lg={7} hiddenLgDown>
                    <ImageContainer>
                      <Fade direction={"right"}>
                        <FloatingLeftImage>
                          <StaticImg
                            alt={"Template Builder"}
                            src={
                              "components/register-for-template-builder/template-builder.png"
                            }
                          />
                        </FloatingLeftImage>
                      </Fade>
                      <Fade direction={"right"} delay={800}>
                        <FloatingArrowImage>
                          <StaticSvg
                            width={150}
                            alt={"arrow"}
                            src={
                              "components/register-for-template-builder/attention-seeker-arrow.svg"
                            }
                          />
                        </FloatingArrowImage>
                      </Fade>
                    </ImageContainer>
                  </Col>
                  <Col lg={5}>
                    <HeadingContainer>
                      <Fade direction={"up"}>
                        <Heading level={2}>
                          {t(
                            "components.ui.extended.RegisterForTemplateBuilder.title"
                          )}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t(
                            "components.ui.extended.RegisterForTemplateBuilder.description"
                          )}
                        </p>
                      </Fade>
                      <Fade direction={"up"}>
                        <CustomRegisterCTA />
                      </Fade>
                    </HeadingContainer>
                  </Col>
                </Row>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </SmallComponentContainer>
    </StyledRegisterForTemplateBuilder>
  );
};
