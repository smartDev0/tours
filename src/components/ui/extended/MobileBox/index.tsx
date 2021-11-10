import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  BadgeContainer,
  BadgeContainerOuter,
  FloatingLeftImage,
  FloatingRightImage,
  HeadingContainer,
  ImageContainer,
  OuterContainer,
  StyledMobileBox,
  WrapperContainer,
} from "components/ui/extended/MobileBox/index.style";
import { useTranslation } from "react-i18next";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";

export interface MobileBoxProps {
  alternativeBgColor?: "green";
}

const MobileBox = ({ alternativeBgColor }: MobileBoxProps) => {
  const { t } = useTranslation();

  return (
    <StyledMobileBox>
      <MediumComponentContainer>
        <OuterContainer alternativeBgColor={alternativeBgColor}>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Row>
                  <Col lg={5}>
                    <HeadingContainer>
                      <Fade direction={"up"}>
                        <Heading level={2}>
                          {t("components.ui.extended.MobileBox.title")}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t("components.ui.extended.MobileBox.description")}
                        </p>
                      </Fade>
                      <Fade direction={"up"}>
                        <BadgeContainerOuter>
                          <BadgeContainer>
                            <a
                              href={
                                "https://apps.apple.com/us/app/live-chat-customer-support/id1262760064"
                              }
                              target="_blank"
                            >
                              <StaticImg
                                alt={"App Store"}
                                src={"components/mobile-box/app-store.png"}
                              />
                            </a>
                          </BadgeContainer>
                          <BadgeContainer>
                            <a
                              href={
                                "https://play.google.com/store/apps/details?id=io.customerly.app&hl=en&gl=US"
                              }
                              target="_blank"
                            >
                              <StaticImg
                                alt={"Google Play"}
                                src={"components/mobile-box/google-play.png"}
                              />
                            </a>
                          </BadgeContainer>
                        </BadgeContainerOuter>
                      </Fade>
                    </HeadingContainer>
                  </Col>
                  <Col lg={7} hiddenLgDown>
                    <ImageContainer>
                      <Fade direction={"up"}>
                        <FloatingLeftImage>
                          <StaticImg
                            alt={"Mobile app"}
                            src={"components/mobile-box/phone-mockup-2.png"}
                          />
                        </FloatingLeftImage>
                      </Fade>
                      <Fade direction={"down"}>
                        <FloatingRightImage>
                          <StaticImg
                            alt={"Mobile app"}
                            src={"components/mobile-box/phone-mockup-1.png"}
                          />
                        </FloatingRightImage>
                      </Fade>
                    </ImageContainer>
                  </Col>
                </Row>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </MediumComponentContainer>
    </StyledMobileBox>
  );
};

export default MobileBox;
