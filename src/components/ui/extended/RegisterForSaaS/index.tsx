import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  CustomRegisterCTA,
  FloatingArrowImage,
  FloatingLeftImage,
  HeadingContainer,
  ImageContainer,
  OuterContainer,
  StyledRegisterForSaaS,
  WrapperContainer,
} from "components/ui/extended/RegisterForSaaS/index.style";
import { useTranslation } from "react-i18next";
import { PageContainer, SmallComponentContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import StaticSvg from "components/core/StaticSvg";

export default () => {
  const { t } = useTranslation();

  return (
    <StyledRegisterForSaaS>
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
                            alt={"Funnel"}
                            src={
                              "components/register-for-saas/marketing-automation-funnel-template-saas.png"
                            }
                          />
                        </FloatingLeftImage>
                      </Fade>
                      <Fade direction={"right"} delay={1500}>
                        <FloatingArrowImage>
                          <StaticSvg
                            width={150}
                            alt={"arrow"}
                            src={
                              "components/register-for-saas/attention-seeker-arrow.svg"
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
                          {t("components.ui.extended.RegisterForSaaS.title")}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t(
                            "components.ui.extended.RegisterForSaaS.description"
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
    </StyledRegisterForSaaS>
  );
};
