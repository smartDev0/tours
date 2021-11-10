import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  CustomRegisterCTA,
  FloatingArrowImage,
  FloatingLeftImage,
  FloatingRightImage,
  HeadingContainer,
  ImageContainer,
  OuterContainer,
  StyledRegisterForIntercom,
  WrapperContainer,
} from "components/ui/extended/RegisterForIntercom/index.style";
import { useTranslation } from "react-i18next";
import { PageContainer, SmallComponentContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import StaticSvg from "components/core/StaticSvg";

export default () => {
  const { t } = useTranslation();

  return (
    <StyledRegisterForIntercom>
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
                            alt={"Live Chat Messenger Chat Details"}
                            src={
                              "components/register-for-customer-service/messenger-live-chat-details.png"
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
                              "components/register-for-customer-service/attention-seeker-arrow.svg"
                            }
                          />
                        </FloatingArrowImage>
                      </Fade>
                      <Fade direction={"left"}>
                        <FloatingRightImage>
                          <StaticImg
                            alt={"Live Chat Messenger Conversation History"}
                            src={
                              "components/register-for-customer-service/messenger-live-chat-conversations.png"
                            }
                          />
                        </FloatingRightImage>
                      </Fade>
                    </ImageContainer>
                  </Col>
                  <Col lg={5}>
                    <HeadingContainer>
                      <Fade direction={"up"}>
                        <Heading level={2}>
                          {t(
                            "components.ui.extended.RegisterForIntercom.title"
                          )}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t(
                            "components.ui.extended.RegisterForIntercom.description"
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
    </StyledRegisterForIntercom>
  );
};
