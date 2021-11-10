import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  CTAContainer,
  FloatingLeftImage,
  FloatingRightImage,
  HeadingContainer,
  ImageContainer,
  OuterContainer,
  StyledVideoLiveChatBox,
  WrapperContainer,
} from "components/ui/extended/VideoLiveChatBox/index.style";
import { useTranslation } from "react-i18next";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import Button from "components/core/Button";
import SafeLink from "components/core/SafeLink";
import { StaticImage } from "gatsby-plugin-image";

const VideoLiveChatBox = () => {
  const { t } = useTranslation();

  return (
    <StyledVideoLiveChatBox>
      <MediumComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Row>
                  <Col lg={5}>
                    <HeadingContainer>
                      <Fade direction={"up"}>
                        <Heading level={2}>
                          {t("components.ui.extended.VideoLiveChatBox.title")}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t(
                            "components.ui.extended.VideoLiveChatBox.description"
                          )}
                        </p>
                      </Fade>
                      <Fade direction={"up"}>
                        <CTAContainer>
                          <Button
                            as={SafeLink}
                            to={"/features/video-live-chat/"}
                            inverted
                            outline
                            icon={{ type: "arrow-right", size: 16 }}
                          >
                            {t("components.ui.extended.VideoLiveChatBox.cta")}
                          </Button>
                        </CTAContainer>
                      </Fade>
                    </HeadingContainer>
                  </Col>
                  <Col lg={7} hiddenLgDown>
                    <ImageContainer>
                      <Fade direction={"up"}>
                        <FloatingLeftImage>
                          <StaticImage
                            src={
                              "../../../../media/images/components/video-live-chat-box/desktop-video-live-chat.png"
                            }
                            alt={"Desktop app"}
                            placeholder={"blurred"}
                          />
                        </FloatingLeftImage>
                      </Fade>
                      <Fade direction={"down"}>
                        <FloatingRightImage>
                          <StaticImage
                            src={
                              "../../../../media/images/components/video-live-chat-box/mobile-video-live-chat.png"
                            }
                            alt={"Mobile app"}
                            placeholder={"blurred"}
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
    </StyledVideoLiveChatBox>
  );
};

export default VideoLiveChatBox;
