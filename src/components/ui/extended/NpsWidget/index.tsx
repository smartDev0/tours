import React from "react";
import { Row } from "styled-bootstrap-grid";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  Description,
  ImageContainer,
  ImageInnerContainer,
  NpsWidgetCenteredCol,
  NpsWidgetCol,
  NpsWidgetContainer,
  StyledNpsWidget,
  UnderlinedLinkWithIcon,
} from "./index.style";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import { Title } from "components/core/Typography/Title";
import { useTranslation } from "react-i18next";
import Icon from "components/core/Icon";

interface NpsWidgetProps {}

declare var window: {
  customerly: any;
};

const NpsWidget = (props: NpsWidgetProps) => {
  const { t } = useTranslation();

  const openMessenger = () => {
    window.customerly.showNewMessage(
      "Hello team, how can I get my NPS Widget?"
    );
  };

  return (
    <StyledNpsWidget>
      <MediumComponentContainer>
        <PageContainer>
          <NpsWidgetContainer>
            <Row>
              <NpsWidgetCol>
                <Fade direction={"up"}>
                  <Title>{t("components.ui.extended.NpsWidget.title")}</Title>
                </Fade>
              </NpsWidgetCol>
            </Row>
            <Row alignItems={"center"}>
              <NpsWidgetCenteredCol>
                <Fade direction={"up"}>
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: t("components.ui.extended.NpsWidget.description"),
                    }}
                  />
                </Fade>
              </NpsWidgetCenteredCol>
            </Row>

            <Fade direction={"up"} delay={700}>
              <ImageContainer>
                <ImageInnerContainer>
                  <StaticImg
                    alt={t("components.ui.extended.NpsWidget.title")}
                    src={"components/nps-widget/widget.png"}
                  />
                </ImageInnerContainer>
              </ImageContainer>
            </Fade>

            <Fade direction={"up"} delay={1000}>
              <UnderlinedLinkWithIcon onClick={openMessenger}>
                {t("components.ui.extended.NpsWidget.cta")}
                <Icon type={"arrow-right"} size={16} />
              </UnderlinedLinkWithIcon>
            </Fade>
          </NpsWidgetContainer>
        </PageContainer>
      </MediumComponentContainer>
    </StyledNpsWidget>
  );
};

export default NpsWidget;
