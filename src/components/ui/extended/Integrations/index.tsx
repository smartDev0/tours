import React from "react";
import {
  Description,
  DescriptionCol,
  FirstOrbit,
  Integration1,
  Integration2,
  Integration3,
  Integration4,
  Integration5,
  Integration6,
  Integration7,
  Integration8,
  IntegrationCol,
  IntegrationContainer,
  SecondOrbit,
  StyledIntegrations,
  ThirdOrbit,
} from "./index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Title } from "components/core/Typography/Title";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import { useTranslation } from "react-i18next";

interface IntegrationsProps {
  title: string;
  description: string;
}

const Integrations = (props: IntegrationsProps) => {
  const { t } = useTranslation();

  return (
    <StyledIntegrations>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row alignItems={"center"}>
              <DescriptionCol lg={6}>
                <Description>
                  <Fade direction={"up"}>
                    <Title>{props.title}</Title>
                  </Fade>
                  <Fade direction={"up"}>
                    <p>{props.description}</p>
                  </Fade>
                </Description>
              </DescriptionCol>
              <IntegrationCol lg={6}>
                <IntegrationContainer>
                  <FirstOrbit>
                    <Integration1>
                      <StaticImg
                        alt={"Messenger"}
                        src={"components/integrations/messenger.png"}
                      />
                    </Integration1>
                    <Integration2>
                      <StaticImg
                        alt={"Prestashop"}
                        src={"components/integrations/prestashop.png"}
                      />
                    </Integration2>
                    <Integration3>
                      <StaticImg
                        alt={"Shopify"}
                        src={"components/integrations/shopify.png"}
                      />
                    </Integration3>
                  </FirstOrbit>
                  <SecondOrbit />
                  <ThirdOrbit>
                    <Integration4>
                      <StaticImg
                        alt={"Slack"}
                        src={"components/integrations/slack.png"}
                      />
                    </Integration4>
                    <Integration5>
                      <StaticImg
                        alt={"Zapier"}
                        src={"components/integrations/zapier.png"}
                      />
                    </Integration5>
                    <Integration6>
                      <StaticImg
                        alt={"Google Analytics"}
                        src={"components/integrations/google-analytics.png"}
                      />
                    </Integration6>
                    <Integration7>
                      <StaticImg
                        alt={"Calendly"}
                        src={"components/integrations/calendly.png"}
                      />
                    </Integration7>
                    <Integration8>
                      <StaticImg
                        alt={"Google Tag Manager"}
                        src={"components/integrations/google-tag-manager.png"}
                      />
                    </Integration8>
                  </ThirdOrbit>
                </IntegrationContainer>
              </IntegrationCol>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledIntegrations>
  );
};

export { Integrations };
