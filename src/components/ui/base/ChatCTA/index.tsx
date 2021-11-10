import React from "react";
import Fade from "components/core/Animation/extended/Fade";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Col, Row } from "styled-bootstrap-grid";
import {
  ChatCTAContainer,
  OuterContainer,
  StyledChatCTA,
  WrapperContainer,
} from "./index.style";
import Button from "components/core/Button";
import Heading from "components/core/Typography/Heading";
import { useTranslation } from "react-i18next";
import { CTAColor } from "app-types/color";

declare var window: {
  customerly: any;
};

export interface ChatCTAProps {
  title: string;
  buttonText?: string;
  titleMaxWidth?: number;
  chatMessage: string;
}

const ChatCTA = (props: ChatCTAProps) => {
  const { t } = useTranslation();

  const openMessenger = () => {
    window.customerly.showNewMessage(props.chatMessage);
  };

  return (
    <StyledChatCTA>
      <MediumComponentContainer>
        <Fade direction={"up"}>
          <OuterContainer>
            <WrapperContainer>
              <PageContainer>
                <ChatCTAContainer>
                  <Row>
                    <Col md={6} lg={7}>
                      <Heading
                        level={2}
                        weight={600}
                        maxWidth={props.titleMaxWidth}
                      >
                        {props.title}
                      </Heading>
                    </Col>
                    <Col md={6} lg={5}>
                      <Button
                        onClick={openMessenger}
                        icon={{
                          type: "arrow-right",
                          position: "right",
                          size: 24,
                        }}
                        ctaColor={CTAColor.Yellow}
                      >
                        {props.buttonText
                          ? props.buttonText
                          : t("components.ui.base.ChatCTA.chatWithUs")}
                      </Button>
                    </Col>
                  </Row>
                </ChatCTAContainer>
              </PageContainer>
            </WrapperContainer>
          </OuterContainer>
        </Fade>
      </MediumComponentContainer>
    </StyledChatCTA>
  );
};

export default ChatCTA;
