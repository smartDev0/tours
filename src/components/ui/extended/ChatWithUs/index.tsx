import React from "react";
import {
  ChatWithUsButton,
  CustomerService1,
  CustomerService2,
  CustomerService3,
  CustomerServiceContainer,
  Description,
  DescriptionContainer,
  StyledChatWithUs,
} from "./index.style";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "styled-bootstrap-grid";
import StaticImg from "components/core/StaticImg";
import { Title } from "components/core/Typography/Title";
import Fade from "components/core/Animation/extended/Fade";

declare var window: {
  customerly: any;
};

const ChatWithUs = () => {
  const { t } = useTranslation();

  const openMessenger = () => {
    window.customerly.showNewMessage(
      t("components.ui.extended.ChatWithUs.chatMessage")
    );
  };

  return (
    <StyledChatWithUs>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row alignItems={"center"}>
              <Col lg={6}>
                <CustomerServiceContainer>
                  <Fade direction={"up"} duration={1000}>
                    <CustomerService1>
                      <StaticImg
                        alt={"Gianni"}
                        src={"components/chat-with-us/gianni.png"}
                      />
                    </CustomerService1>
                  </Fade>
                  <Fade direction={"down"} duration={1500}>
                    <CustomerService2>
                      <StaticImg
                        alt={"Matteo"}
                        src={"components/chat-with-us/matteo.png"}
                      />
                    </CustomerService2>
                  </Fade>
                  <Fade direction={"right"} duration={2000}>
                    <CustomerService3>
                      <StaticImg
                        alt={"Luca"}
                        src={"components/chat-with-us/luca.png"}
                      />
                    </CustomerService3>
                  </Fade>
                </CustomerServiceContainer>
              </Col>
              <Col lg={6}>
                <DescriptionContainer>
                  <Fade direction={"up"} duration={1000}>
                    <Title>
                      {t("components.ui.extended.ChatWithUs.title")}
                    </Title>
                  </Fade>
                  <Fade direction={"up"} duration={1500}>
                    <Description>
                      {t("components.ui.extended.ChatWithUs.description")}
                    </Description>
                  </Fade>
                  <Fade direction={"up"} duration={2000}>
                    <ChatWithUsButton
                      onClick={openMessenger}
                      icon={{ type: "arrow-right" }}
                    >
                      {t("components.ui.extended.ChatWithUs.cta")}
                    </ChatWithUsButton>
                  </Fade>
                </DescriptionContainer>
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledChatWithUs>
  );
};

export { ChatWithUs };
