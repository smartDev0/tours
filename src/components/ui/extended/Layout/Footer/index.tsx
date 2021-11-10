import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  AwardContainer,
  AwardItem,
  Copyright,
  InnerContainer,
  Language,
  LanguageContainer,
  LogoContainer,
  OuterContainer,
  SocialContainer,
  SocialItem,
  StyledFooter,
  Widget,
  WidgetList,
  WidgetListElement,
  WidgetTitle,
  WrapperContainer,
} from "components/ui/extended/Layout/Footer/index.style";
import StaticSvg from "components/core/StaticSvg";
import SafeLink from "components/core/SafeLink";
import { useTranslation } from "react-i18next";
import { FakeLink } from "styles/global.style";
import { Link } from "gatsby";
import {
  FACEBOOK_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "constants/social";
import Loop from "components/core/Loop";

declare var window: {
  customerly: any;
};

export default () => {
  const { t } = useTranslation();
  const features = [
    {
      path: "/features/live-chat/",
      name: "Live Chat",
    },
    {
      path: "/features/video-live-chat/",
      name: "Video Live Chat",
    },
    {
      path: "/features/help-center/",
      name: "Help Center",
    },
    {
      path: "/features/marketing-funnel/",
      name: "Marketing Funnel",
    },
    {
      path: "/features/email-marketing/",
      name: "Email Marketing",
    },
    {
      path: "/features/email-template-builder/",
      name: "Email Template Builder",
    },
    {
      path: "/features/surveys/",
      name: "In-App Surveys",
    },
    {
      path: "/features/net-promoter-score/",
      name: "NPS",
    },
    {
      path: "/features/crm/",
      name: "CRM",
    },
  ];

  const openMessenger = () => {
    window.customerly.showNewMessage("Hello team, I'd like to ask you ");
  };

  return (
    <StyledFooter>
      <OuterContainer>
        <WrapperContainer>
          <InnerContainer>
            <Container>
              <Row>
                <Col sm={6} md={6} lg={3}>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <Row>
                          <Col sm={12} md={12} lg={12}>
                            <LogoContainer>
                              <StaticSvg
                                alt={"Customerly Logo"}
                                src={"logo/square-white.svg"}
                                width={80}
                              />
                            </LogoContainer>
                          </Col>
                          <Col sm={12} md={12} lg={12}>
                            Our mission at Customerly is to help and inspire at
                            least 1 Billion people.
                          </Col>
                          <Col sm={12} md={12} lg={12}>
                            <Copyright>
                              © 2015-{new Date().getFullYear()} Customerly Ltd.
                            </Copyright>
                          </Col>
                        </Row>
                      </Widget>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <WidgetTitle>
                          {t("components.ui.base.Layout.Footer.social")}
                        </WidgetTitle>
                        <SocialContainer>
                          <SocialItem>
                            <a
                              href={FACEBOOK_URL}
                              target="_blank"
                              rel="noopener"
                            >
                              <StaticSvg
                                alt={"Facebook"}
                                src={"social/facebook.svg"}
                                width={24}
                              />
                            </a>
                          </SocialItem>
                          <SocialItem>
                            <a
                              href={LINKEDIN_URL}
                              target="_blank"
                              rel="noopener"
                            >
                              <StaticSvg
                                alt={"Linkedin"}
                                src={"social/linkedin.svg"}
                                width={24}
                              />
                            </a>
                          </SocialItem>
                          <SocialItem>
                            <a
                              href={TWITTER_URL}
                              target="_blank"
                              rel="noopener"
                            >
                              <StaticSvg
                                alt={"Twitter"}
                                src={"social/twitter.svg"}
                                width={24}
                              />
                            </a>
                          </SocialItem>
                          <SocialItem>
                            <a
                              href={YOUTUBE_URL}
                              target="_blank"
                              rel="noopener"
                            >
                              <StaticSvg
                                alt={"Youtube"}
                                src={"social/youtube.svg"}
                                width={24}
                              />
                            </a>
                          </SocialItem>
                        </SocialContainer>
                      </Widget>
                    </Col>
                  </Row>
                </Col>
                <Col sm={6} md={6} lg={3}>
                  <Widget>
                    <WidgetTitle>
                      {t("components.ui.base.Layout.Footer.features.title")}
                    </WidgetTitle>
                    <WidgetList>
                      <Loop items={features}>
                        {(item) => (
                          <WidgetListElement key={item.path}>
                            <SafeLink to={item.path}>{item.name}</SafeLink>
                          </WidgetListElement>
                        )}
                      </Loop>
                    </WidgetList>
                  </Widget>
                </Col>
                <Col sm={6} md={6} lg={3}>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <WidgetTitle>
                          {t(
                            "components.ui.base.Layout.Footer.solutions.title"
                          )}
                        </WidgetTitle>
                        <WidgetList>
                          <WidgetListElement>
                            <SafeLink to={"/solutions/customer-service/"}>
                              {t(
                                "components.ui.base.Layout.Footer.solutions.customerService"
                              )}
                            </SafeLink>
                          </WidgetListElement>
                          <WidgetListElement>
                            <SafeLink to={"/solutions/marketing-automation/"}>
                              {t(
                                "components.ui.base.Layout.Footer.solutions.marketingAutomation"
                              )}
                            </SafeLink>
                          </WidgetListElement>
                          <WidgetListElement>
                            <SafeLink to={"/solutions/customer-satisfaction/"}>
                              {t(
                                "components.ui.base.Layout.Footer.solutions.customerSatisfaction"
                              )}
                            </SafeLink>
                          </WidgetListElement>
                        </WidgetList>
                      </Widget>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <WidgetTitle>
                          {t(
                            "components.ui.base.Layout.Footer.resources.title"
                          )}
                        </WidgetTitle>
                        <WidgetList>
                          <WidgetListElement>
                            <Link to={"/blog/"}>
                              {t(
                                "components.ui.base.Layout.Footer.resources.blog"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <a
                              href={"https://docs.customerly.io"}
                              target="_blank"
                              rel="noopener"
                            >
                              {t(
                                "components.ui.base.Layout.Footer.resources.docs"
                              )}
                            </a>
                          </WidgetListElement>
                        </WidgetList>
                      </Widget>
                    </Col>
                  </Row>
                </Col>
                <Col sm={6} md={6} lg={3}>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <WidgetTitle>
                          {t("components.ui.base.Layout.Footer.company.title")}
                        </WidgetTitle>
                        <WidgetList>
                          <WidgetListElement>
                            <Link to={"/mission/"}>
                              {t(
                                "components.ui.base.Layout.Footer.company.mission"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <Link to={"/terms-of-use/"}>
                              {t(
                                "components.ui.base.Layout.Footer.company.termsOfService"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <Link to={"/cookies/"}>
                              {t(
                                "components.ui.base.Layout.Footer.company.cookiePolicy"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <Link to={"/privacy/"}>
                              {t(
                                "components.ui.base.Layout.Footer.company.privacyPolicy"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <Link to={"/gdpr/"}>
                              {t(
                                "components.ui.base.Layout.Footer.company.gdpr"
                              )}
                            </Link>
                          </WidgetListElement>
                          <WidgetListElement>
                            <FakeLink onClick={openMessenger}>
                              {t(
                                "components.ui.base.Layout.Footer.company.contactUs"
                              )}
                            </FakeLink>
                          </WidgetListElement>
                        </WidgetList>
                      </Widget>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <Widget>
                        <WidgetTitle>
                          {t(
                            "components.ui.base.Layout.Footer.chooseLanguage.title"
                          )}
                        </WidgetTitle>
                        <LanguageContainer>
                          <Language>
                            <Link to={"/"}>
                              {t(
                                "components.ui.base.Layout.Footer.chooseLanguage.en"
                              )}
                            </Link>
                          </Language>
                          <Language>
                            <Link to={"/it/"}>
                              {t(
                                "components.ui.base.Layout.Footer.chooseLanguage.it"
                              )}
                            </Link>
                          </Language>
                        </LanguageContainer>
                      </Widget>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <AwardContainer>
                        <AwardItem>
                          <a
                            href={
                              "https://www.getapp.ie/software/113889/customerly"
                            }
                            target="_blank"
                            rel="noopener"
                          >
                            <StaticSvg
                              alt={"GetApp Best Live Chat 2020"}
                              src={"awards/get-app-best-live-chat-2020.svg"}
                              width={48}
                            />
                          </a>
                        </AwardItem>
                        <AwardItem>
                          <a
                            href={
                              "https://www.g2.com/products/customerly/reviews"
                            }
                            target="_blank"
                            rel="noopener"
                          >
                            <StaticSvg
                              alt={"G2Crowd Best Live Chat 2019"}
                              src={"awards/g2crowd-best-live-chat-2019.svg"}
                              width={48}
                            />
                          </a>
                        </AwardItem>
                        <AwardItem>
                          <a
                            href={
                              "https://www.g2.com/products/customerly/reviews"
                            }
                            target="_blank"
                            rel="noopener"
                          >
                            <StaticSvg
                              alt={"G2Crowd Best Live Chat 2020"}
                              src={"awards/g2crowd-best-live-chat-2020.svg"}
                              width={48}
                            />
                          </a>
                        </AwardItem>
                        <AwardItem>
                          <a
                            href={
                              "https://www.g2.com/products/customerly/reviews"
                            }
                            target="_blank"
                            rel="noopener"
                          >
                            <StaticSvg
                              alt={"G2Crowd Best Live Chat 2021"}
                              src={"awards/g2crowd-best-live-chat-2021.svg"}
                              width={48}
                            />
                          </a>
                        </AwardItem>
                        <AwardItem>
                          <a
                            href={
                              "https://www.g2.com/products/customerly/reviews"
                            }
                            target="_blank"
                            rel="noopener"
                          >
                            <StaticSvg
                              alt={"G2Crowd Best Live Chat Spring 2021"}
                              src={
                                "awards/g2crowd-best-live-chat-spring-2021.svg"
                              }
                              width={48}
                            />
                          </a>
                        </AwardItem>
                      </AwardContainer>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </InnerContainer>
        </WrapperContainer>
      </OuterContainer>
    </StyledFooter>
  );
};
