import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  HeadingContainer,
  NumberContainer,
  OuterContainer,
  StyledStartupGoodFit,
  WrapperContainer,
} from "components/ui/extended/StartupGoodFit/index.style";
import { useTranslation } from "react-i18next";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";

const StartupGoodFit = () => {
  const { t } = useTranslation();

  return (
    <StyledStartupGoodFit>
      <MediumComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Row>
                  <Col lg={12}>
                    <HeadingContainer>
                      <Fade direction={"up"}>
                        <Heading level={2}>
                          {t("components.ui.extended.StartupGoodFit.title")}
                        </Heading>
                      </Fade>
                      <Fade direction={"up"}>
                        <p>
                          {t(
                            "components.ui.extended.StartupGoodFit.description"
                          )}
                        </p>
                      </Fade>
                    </HeadingContainer>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={6}>
                    <Fade direction={"right"} delayMd={300}>
                      <NumberContainer withBorder={true}>
                        <Heading level={2}>
                          {t("components.ui.extended.StartupGoodFit.1.number")}
                        </Heading>
                        <p>
                          {t(
                            "components.ui.extended.StartupGoodFit.1.description"
                          )}
                        </p>
                      </NumberContainer>
                    </Fade>
                  </Col>
                  <Col lg={3} md={6}>
                    <Fade direction={"right"} delayMd={600}>
                      <NumberContainer withBorder={true}>
                        <Heading level={2}>
                          {t("components.ui.extended.StartupGoodFit.2.number")}
                        </Heading>
                        <p>
                          {t(
                            "components.ui.extended.StartupGoodFit.2.description"
                          )}
                        </p>
                      </NumberContainer>
                    </Fade>
                  </Col>
                  <Col lg={3} md={6}>
                    <Fade direction={"right"} delayMd={900}>
                      <NumberContainer withBorder={true}>
                        <Heading level={2}>
                          {t("components.ui.extended.StartupGoodFit.3.number")}
                        </Heading>
                        <p>
                          {t(
                            "components.ui.extended.StartupGoodFit.3.description"
                          )}
                        </p>
                      </NumberContainer>
                    </Fade>
                  </Col>
                  <Col lg={3} md={6}>
                    <Fade direction={"right"} delayMd={1200}>
                      <NumberContainer withBorder={false}>
                        <Heading level={2}>
                          {t("components.ui.extended.StartupGoodFit.4.number")}
                        </Heading>
                        <p>
                          {t(
                            "components.ui.extended.StartupGoodFit.4.description"
                          )}
                        </p>
                      </NumberContainer>
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </MediumComponentContainer>
    </StyledStartupGoodFit>
  );
};

export default StartupGoodFit;
