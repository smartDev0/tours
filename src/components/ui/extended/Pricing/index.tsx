import React, { useContext, useState } from "react";
import {
  Badge,
  CTAButton,
  CTAButtonContainer,
  Description,
  DetailsElement,
  DetailsHeading,
  DetailsList,
  FeaturesSeparator,
  MainFeaturesElement,
  MainFeaturesList,
  PlanCol,
  PlanName,
  PlanWrapper,
  PriceInner,
  PriceMode,
  PriceSpan,
  PriceWrapper,
  StyledPricing,
  SwitchCol,
} from "./index.style";
import { PageContainer } from "styles/global.style";
import { Container, Row } from "styled-bootstrap-grid";
import Switch from "components/core/Switch";
import Icon from "components/core/Icon";
import { ThemeContext } from "styled-components";
import Fade from "components/core/Animation/extended/Fade";
import { graphql, useStaticQuery } from "gatsby";
import { PlansQueryResult } from "app-types/plan";
import { useTranslation } from "react-i18next";
import { getTrackedRegistrationUrl } from "utils/tracking";
import { CTAColor } from "../../../../app-types/color";
import SafeLink from "../../../core/SafeLink";

declare var window: {
  customerly: any;
};

interface PricingProps {
  location: Location;
  id?: string;
}

const Pricing = ({ location, id }: PricingProps) => {
  const { t, i18n } = useTranslation();
  const [yearlyMode, setYearlyMode] = useState<boolean>(true);
  const theme = useContext(ThemeContext);

  const { plans }: PlansQueryResult = useStaticQuery(graphql`
    query {
      plans: allContentfulPlan {
        nodes {
          slug
          order
          badgeText
          name
          description
          priceMonthly
          priceYearly
          ctaText
          enterpriseCta
          invertedButton
          mainFeatures
          details {
            title
            link
          }
          detailsTitle
          node_locale
        }
      }
    }
  `);

  const openMessenger = () => {
    window.customerly.showNewMessage(
      t("components.ui.extended.Pricing.enterpriseCTAMessage")
    );
  };

  return (
    <StyledPricing id={id}>
      <PageContainer>
        <Container>
          <Row>
            <SwitchCol>
              <Switch
                leftLabel={t("components.ui.extended.Pricing.monthly")}
                rightLabel={t("components.ui.extended.Pricing.yearly")}
                onChange={() => setYearlyMode(!yearlyMode)}
                checked={yearlyMode}
              />
            </SwitchCol>
          </Row>
          <Row>
            {plans.nodes
              .filter((plan) => plan.node_locale === i18n.language)
              .sort((a, b) => a.order - b.order)
              .map((plan, i) => {
                return (
                  <PlanCol lg={3} key={i}>
                    {plan.badgeText && (
                      <Fade
                        direction={"up"}
                        delay={400}
                        delayLg={(i + 1) * 400}
                      >
                        <Badge>{plan.badgeText}</Badge>
                      </Fade>
                    )}
                    <Fade direction={"left"} delayLg={i * 300}>
                      <PlanWrapper hasBadge={!!plan.badgeText}>
                        <PlanName level={2}>{plan.name}</PlanName>
                        <Description>{plan.description}</Description>
                        <PriceWrapper>
                          <PriceInner>
                            <Icon
                              type={"dollar"}
                              size={12}
                              fill={theme.titleColor}
                            />
                            <PriceSpan>
                              {yearlyMode
                                ? plan.priceYearly
                                : plan.priceMonthly}
                            </PriceSpan>
                          </PriceInner>
                          <PriceMode>
                            {t("components.ui.extended.Pricing.slash_month")}
                          </PriceMode>
                        </PriceWrapper>
                        {plan.enterpriseCta ? (
                          <CTAButton
                            outline={plan.invertedButton}
                            inverted={plan.invertedButton}
                            onClick={openMessenger}
                            ctaColor={CTAColor.Yellow}
                          >
                            {plan.ctaText}
                          </CTAButton>
                        ) : (
                          <CTAButtonContainer
                            href={getTrackedRegistrationUrl(
                              plan.ctaText,
                              location.pathname,
                              { plan: plan.name }
                            )}
                          >
                            <CTAButton
                              ctaColor={CTAColor.Yellow}
                              outline={plan.invertedButton}
                              inverted={plan.invertedButton}
                            >
                              {plan.ctaText}
                            </CTAButton>
                          </CTAButtonContainer>
                        )}

                        <MainFeaturesList>
                          {plan.mainFeatures.map((feature, i) => {
                            return (
                              <MainFeaturesElement key={i}>
                                {feature}
                              </MainFeaturesElement>
                            );
                          })}
                        </MainFeaturesList>
                        <FeaturesSeparator />
                        <DetailsHeading level={2}>
                          {plan.detailsTitle}
                        </DetailsHeading>
                        <DetailsList>
                          {plan.details.map((detail, i) => {
                            return (
                              <DetailsElement key={i}>
                                {detail.link ? (
                                  <SafeLink to={detail.link} newTab>
                                    {detail.title}
                                  </SafeLink>
                                ) : (
                                  detail.title
                                )}
                              </DetailsElement>
                            );
                          })}
                        </DetailsList>
                      </PlanWrapper>
                    </Fade>
                  </PlanCol>
                );
              })}
          </Row>
        </Container>
      </PageContainer>
    </StyledPricing>
  );
};

export default Pricing;
