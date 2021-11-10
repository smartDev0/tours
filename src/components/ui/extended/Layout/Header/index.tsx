import React, { useRef, useState } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownFooter,
  DropdownHeader,
  DropdownInnerContainer,
  DropdownInnerContent,
  DropdownList,
  DropdownListElement,
  DropdownSubtitle,
  GetStartedButton,
  LogoContainer,
  MainContent,
  MainIcon,
  MainLink,
  MainSubtitle,
  MainTitle,
  MenuButton,
  MenuContainer,
  MenuLeft,
  MenuLeftElement,
  MenuRight,
  MenuRightElement,
  MobileCtaContainer,
  Navigation,
  StyledHeader,
} from "components/ui/extended/Layout/Header/index.style";
import {
  CTAContainerMobile,
  DropdownMobile,
  DropdownMobileContent,
  DropdownMobileInnerContainer,
  DropdownMobileInnerContent,
  DropdownMobileList,
  DropdownMobileListElement,
  DropdownMobileSection,
  DropdownMobileSectionTitle,
  LoginText,
  MenuButtonMobile,
  MenuButtonMobileTitle,
  MenuContainerMobile,
  MenuInnerContainerMobile,
  MenuLineBottom,
  MenuLineCenter,
  MenuLineTop,
  MenuToggle,
} from "components/ui/extended/Layout/Header/mobile.style";
import { Link } from "gatsby";
import StaticSvg from "components/core/StaticSvg";
import Icon from "components/core/Icon";
import { PageContainer } from "styles/global.style";
import Loop from "components/core/Loop";
import useScroll from "hooks/useScroll";
import Input from "components/core/Input";
import { useTranslation } from "react-i18next";
import { APP_URL } from "constants/paths";
import SafeLink from "components/core/SafeLink";
import { getTrackedRegistrationUrl } from "utils/tracking";

type DropdownType = "solutions" | "features" | "useCases" | "resources";

interface HeaderProps {
  alternativeColors?: boolean;
  withCta?: boolean;
  withMenu?: boolean;
  clickableLogo?: boolean;
  mobileCta?: boolean;
  ctaFocusId?: string;
  location: Location;
}

declare var window: {
  customerly: any;
};

const Header = ({
  alternativeColors,
  withCta,
  withMenu,
  mobileCta,
  clickableLogo,
  ctaFocusId,
  location,
}: HeaderProps) => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [activeDropdown, setActiveDropdown] = useState<
    DropdownType | undefined
  >(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropdownRef = {
    features: useRef(null),
    solutions: useRef(null),
    useCases: useRef(null),
    resources: useRef(null),
  };
  const showBackgroundOnMenu =
    isMenuOpen || (scrollY !== undefined && scrollY > 0);

  const features = {
    marketingAutomation: [
      {
        path: "/features/marketing-funnel/",
        name: t(
          "components.ui.base.Layout.Header.features.marketingAutomation.funnel"
        ),
      },
      {
        path: "/features/email-marketing/",
        name: t(
          "components.ui.base.Layout.Header.features.marketingAutomation.emailMarketing"
        ),
      },
      {
        path: "/features/email-template-builder/",
        name: t(
          "components.ui.base.Layout.Header.features.marketingAutomation.emailTemplateBuilder"
        ),
      },
      {
        path: "/features/crm/",
        name: t(
          "components.ui.base.Layout.Header.features.marketingAutomation.crm"
        ),
      },
      {
        path: "/features/audience-segmentation/",
        name: t(
          "components.ui.base.Layout.Header.features.marketingAutomation.contactSegmentation"
        ),
      },
    ],
    CustomerService: [
      {
        path: "/features/live-chat/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.liveChat"
        ),
      },
      {
        path: "/features/video-live-chat/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.videoLiveChat"
        ),
      },
      {
        path: "/features/conversation-inbox/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.conversationInbox"
        ),
      },
      {
        path: "/features/live-chat-customization/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.customizeLiveChat"
        ),
      },
      {
        path: "/features/live-chat-engagement/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.liveChatEngagement"
        ),
      },
      {
        path: "/features/help-center/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.helpCenter"
        ),
      },
      {
        path: "/features/team-reports/",
        name: t(
          "components.ui.base.Layout.Header.features.customerService.teamReports"
        ),
      },
    ],
    customerSatisfaction: [
      {
        path: "/features/surveys/",
        name: t(
          "components.ui.base.Layout.Header.features.customerSatisfaction.inAppSurvey"
        ),
      },
      {
        path: "/features/net-promoter-score/",
        name: t(
          "components.ui.base.Layout.Header.features.customerSatisfaction.nps"
        ),
      },
    ],
  };

  const ctaFocus = (id: string) => {
    document && document.getElementById(id)?.focus();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (window.customerly) {
      if (isMenuOpen) {
        window.customerly.show();
      } else {
        window.customerly.hide();
      }
    }
  };

  const getMobileHeightDropdown = (type: DropdownType): number => {
    if (dropdownRef[type].current != null) {
      // @ts-ignore
      return dropdownRef[type].current.scrollHeight;
    }

    return 0;
  };

  return (
    <StyledHeader withBackground={showBackgroundOnMenu}>
      <PageContainer>
        <Navigation>
          <LogoContainer>
            {clickableLogo ? (
              <SafeLink to={"/"}>
                <StaticSvg
                  alt={"Customerly"}
                  src={
                    alternativeColors && !showBackgroundOnMenu
                      ? "logo/wide-white.svg"
                      : "logo/wide-blue.svg"
                  }
                />
              </SafeLink>
            ) : (
              <StaticSvg
                alt={"Customerly"}
                src={
                  alternativeColors && !showBackgroundOnMenu
                    ? "logo/wide-white.svg"
                    : "logo/wide-blue.svg"
                }
              />
            )}
          </LogoContainer>
          {mobileCta && (
            <MobileCtaContainer>
              {ctaFocusId ? (
                <GetStartedButton onClick={() => ctaFocus(ctaFocusId)}>
                  {t("components.ui.base.Layout.Header.getStarted")}
                </GetStartedButton>
              ) : (
                <GetStartedButton
                  as={SafeLink}
                  to={getTrackedRegistrationUrl("Nav Main", location.pathname)}
                >
                  {t("components.ui.base.Layout.Header.getStarted")}
                </GetStartedButton>
              )}
            </MobileCtaContainer>
          )}
          {withMenu && (
            <MenuToggle isMenuOpen={isMenuOpen} onClick={toggleMenu}>
              <MenuLineTop
                alternativeColors={alternativeColors && !showBackgroundOnMenu}
              />
              <MenuLineCenter
                alternativeColors={alternativeColors && !showBackgroundOnMenu}
              />
              <MenuLineBottom
                alternativeColors={alternativeColors && !showBackgroundOnMenu}
              />
            </MenuToggle>
          )}

          <MenuContainer>
            <MenuLeft>
              {withMenu && (
                <>
                  <MenuLeftElement
                    onMouseLeave={() => setActiveDropdown(undefined)}
                  >
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      onMouseEnter={() => setActiveDropdown("solutions")}
                    >
                      {t("components.ui.base.Layout.Header.solutions.title")}{" "}
                      <Icon type={"chevron-down"} size={16} />
                    </MenuButton>
                    <Dropdown isActive={activeDropdown === "solutions"}>
                      <DropdownInnerContainer>
                        <DropdownContent withPaddingTop={true}>
                          <DropdownInnerContent>
                            <DropdownList>
                              <DropdownListElement>
                                <SafeLink to={"/solutions/customer-service/"}>
                                  {t(
                                    "components.ui.base.Layout.Header.solutions.customerService"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/solutions/customer-satisfaction/"}
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.solutions.customerSatisfaction"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                          <DropdownInnerContent>
                            <DropdownList>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/solutions/marketing-automation/"}
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.solutions.marketingAutomation"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                        </DropdownContent>
                        <DropdownFooter>
                          <SafeLink
                            to={getTrackedRegistrationUrl(
                              "Nav Solutions Menu",
                              location.pathname
                            )}
                          >
                            <MainLink>
                              <MainIcon>
                                <Icon type={"rocket"} size={48} />
                              </MainIcon>
                              <MainContent>
                                <MainTitle>
                                  {t(
                                    "components.ui.base.Layout.Header.solutions.footer.getCustomerly.title"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={14} />
                                </MainTitle>
                                <MainSubtitle>
                                  {t(
                                    "components.ui.base.Layout.Header.solutions.footer.getCustomerly.description"
                                  )}
                                </MainSubtitle>
                              </MainContent>
                            </MainLink>
                          </SafeLink>
                        </DropdownFooter>
                      </DropdownInnerContainer>
                    </Dropdown>
                  </MenuLeftElement>
                  <MenuLeftElement
                    onMouseLeave={() => setActiveDropdown(undefined)}
                  >
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      onMouseEnter={() => setActiveDropdown("features")}
                    >
                      {t("components.ui.base.Layout.Header.features.title")}{" "}
                      <Icon type={"chevron-down"} size={16} />
                    </MenuButton>
                    <Dropdown isActive={activeDropdown === "features"}>
                      <DropdownInnerContainer>
                        <DropdownHeader>
                          <Link to={"/features/"}>
                            <MainLink>
                              <MainIcon>
                                <Icon type={"star-with-lights"} size={48} />
                              </MainIcon>
                              <MainContent>
                                <MainTitle>
                                  {t(
                                    "components.ui.base.Layout.Header.features.header.highlight.title"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={14} />
                                </MainTitle>
                                <MainSubtitle>
                                  {t(
                                    "components.ui.base.Layout.Header.features.header.highlight.description"
                                  )}
                                </MainSubtitle>
                              </MainContent>
                            </MainLink>
                          </Link>
                        </DropdownHeader>
                        <DropdownContent withPaddingTop={false}>
                          <DropdownInnerContent>
                            <DropdownSubtitle>
                              {t(
                                "components.ui.base.Layout.Header.features.customerService.title"
                              )}
                            </DropdownSubtitle>
                            <DropdownList>
                              <Loop items={features.CustomerService}>
                                {(item) => (
                                  <DropdownListElement key={item.path}>
                                    <SafeLink to={item.path}>
                                      {item.name}{" "}
                                      <Icon type={"chevron-right"} size={12} />
                                    </SafeLink>
                                  </DropdownListElement>
                                )}
                              </Loop>
                            </DropdownList>
                          </DropdownInnerContent>
                          <DropdownInnerContent>
                            <DropdownSubtitle>
                              {t(
                                "components.ui.base.Layout.Header.features.marketingAutomation.title"
                              )}
                            </DropdownSubtitle>
                            <DropdownList>
                              <Loop items={features.marketingAutomation}>
                                {(item) => (
                                  <DropdownListElement key={item.path}>
                                    <SafeLink to={item.path}>
                                      {item.name}{" "}
                                      <Icon type={"chevron-right"} size={12} />
                                    </SafeLink>
                                  </DropdownListElement>
                                )}
                              </Loop>
                            </DropdownList>
                          </DropdownInnerContent>
                          <DropdownInnerContent>
                            <DropdownSubtitle>
                              {t(
                                "components.ui.base.Layout.Header.features.customerSatisfaction.title"
                              )}
                            </DropdownSubtitle>
                            <DropdownList>
                              <Loop items={features.customerSatisfaction}>
                                {(item) => (
                                  <DropdownListElement key={item.path}>
                                    <SafeLink to={item.path}>
                                      {item.name}{" "}
                                      <Icon type={"chevron-right"} size={12} />
                                    </SafeLink>
                                  </DropdownListElement>
                                )}
                              </Loop>
                            </DropdownList>
                          </DropdownInnerContent>
                        </DropdownContent>
                      </DropdownInnerContainer>
                    </Dropdown>
                  </MenuLeftElement>
                  <MenuLeftElement>
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      as={SafeLink}
                      to={"/pricing/"}
                    >
                      {t("components.ui.base.Layout.Header.pricing.title")}
                    </MenuButton>
                  </MenuLeftElement>
                  <MenuLeftElement
                    onMouseLeave={() => setActiveDropdown(undefined)}
                  >
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      onMouseEnter={() => setActiveDropdown("useCases")}
                    >
                      {t("components.ui.base.Layout.Header.useCases.title")}{" "}
                      <Icon type={"chevron-down"} size={16} />
                    </MenuButton>
                    <Dropdown isActive={activeDropdown === "useCases"}>
                      <DropdownInnerContainer>
                        <DropdownContent withPaddingTop={true}>
                          <DropdownInnerContent>
                            <DropdownSubtitle>
                              {t(
                                "components.ui.base.Layout.Header.useCases.industry.title"
                              )}
                            </DropdownSubtitle>
                            <DropdownList>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/industries/software-as-a-service/"}
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.industry.saas"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                              <DropdownListElement>
                                <SafeLink to={"/industries/ecommerce/"}>
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.industry.ecommerce"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                          <DropdownInnerContent>
                            <DropdownSubtitle>
                              {t(
                                "components.ui.base.Layout.Header.useCases.technology.title"
                              )}
                            </DropdownSubtitle>
                            <DropdownList>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/features/live-chat-for-website/"}
                                >
                                  <Icon type={"website"} size={20} />{" "}
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.technology.website"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/features/live-chat-for-mobile-apps/"}
                                >
                                  <Icon type={"mobile-apps"} size={20} />{" "}
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.technology.mobileApps"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                              <DropdownListElement>
                                <SafeLink
                                  to={
                                    "/features/live-chat-plugin-for-wordpress/"
                                  }
                                >
                                  <Icon type={"wordpress"} size={20} />
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.technology.wordpress"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                              <DropdownListElement>
                                <SafeLink
                                  to={"/features/live-chat-plugin-for-shopify/"}
                                >
                                  <Icon type={"shopify"} size={20} />{" "}
                                  {t(
                                    "components.ui.base.Layout.Header.useCases.technology.shopify"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </SafeLink>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                        </DropdownContent>
                      </DropdownInnerContainer>
                    </Dropdown>
                  </MenuLeftElement>
                  <MenuLeftElement
                    onMouseLeave={() => setActiveDropdown(undefined)}
                  >
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      onMouseEnter={() => setActiveDropdown("resources")}
                    >
                      {t("components.ui.base.Layout.Header.resources.title")}{" "}
                      <Icon type={"chevron-down"} size={16} />
                    </MenuButton>
                    <Dropdown isActive={activeDropdown === "resources"}>
                      <DropdownInnerContainer>
                        <DropdownContent withPaddingTop={true}>
                          <DropdownInnerContent>
                            <DropdownList>
                              <DropdownListElement>
                                <Link to={"/blog/"}>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.blog"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </Link>
                              </DropdownListElement>
                              <DropdownListElement>
                                <a
                                  href={"https://docs.customerly.io"}
                                  target="_blank"
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.resources.docs"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </a>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                          <DropdownInnerContent>
                            <DropdownList>
                              <DropdownListElement>
                                <a
                                  href={"https://go.customerly.io/roadmap"}
                                  target="_blank"
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.resources.productUpdates"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </a>
                              </DropdownListElement>
                              <DropdownListElement>
                                <a
                                  href={"https://go.customerly.io/api"}
                                  target="_blank"
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.resources.apiDocumentation"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </a>
                              </DropdownListElement>
                              <DropdownListElement>
                                <a
                                  href={"https://customerly.tapfiliate.com"}
                                  target="_blank"
                                >
                                  {t(
                                    "components.ui.base.Layout.Header.resources.affiliateProgram"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={12} />
                                </a>
                              </DropdownListElement>
                            </DropdownList>
                          </DropdownInnerContent>
                        </DropdownContent>
                        <DropdownFooter>
                          <Link to={"/webinars/"}>
                            <MainLink>
                              <MainIcon>
                                <Icon type={"webinars"} size={48} />
                              </MainIcon>
                              <MainContent>
                                <MainTitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.webinars.title"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={14} />
                                </MainTitle>
                                <MainSubtitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.webinars.description"
                                  )}
                                </MainSubtitle>
                              </MainContent>
                            </MainLink>
                          </Link>
                          <Link to={"/startups/"}>
                            <MainLink>
                              <MainIcon>
                                <Icon type={"fund"} size={48} />
                              </MainIcon>
                              <MainContent>
                                <MainTitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.startup.title"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={14} />
                                </MainTitle>
                                <MainSubtitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.startup.description"
                                  )}
                                </MainSubtitle>
                              </MainContent>
                            </MainLink>
                          </Link>
                          <Link to={"/agencies/"}>
                            <MainLink>
                              <MainIcon>
                                <Icon type={"building"} size={48} />
                              </MainIcon>
                              <MainContent>
                                <MainTitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.agencies.title"
                                  )}{" "}
                                  <Icon type={"chevron-right"} size={14} />
                                </MainTitle>
                                <MainSubtitle>
                                  {t(
                                    "components.ui.base.Layout.Header.resources.footer.agencies.description"
                                  )}
                                </MainSubtitle>
                              </MainContent>
                            </MainLink>
                          </Link>
                        </DropdownFooter>
                      </DropdownInnerContainer>
                    </Dropdown>
                  </MenuLeftElement>
                </>
              )}
            </MenuLeft>
            {withCta && (
              <MenuRight>
                {withMenu && (
                  <MenuRightElement>
                    <MenuButton
                      alternativeColors={
                        alternativeColors && !showBackgroundOnMenu
                      }
                      as={"a"}
                      href={APP_URL}
                    >
                      {t("components.ui.base.Layout.Header.login")}
                    </MenuButton>
                  </MenuRightElement>
                )}
                <MenuRightElement>
                  {ctaFocusId ? (
                    <GetStartedButton onClick={() => ctaFocus(ctaFocusId)}>
                      {t("components.ui.base.Layout.Header.getStarted")}
                    </GetStartedButton>
                  ) : (
                    <GetStartedButton
                      as={SafeLink}
                      to={getTrackedRegistrationUrl(
                        "Nav Main",
                        location.pathname
                      )}
                    >
                      {t("components.ui.base.Layout.Header.getStarted")}
                    </GetStartedButton>
                  )}
                </MenuRightElement>
              </MenuRight>
            )}
          </MenuContainer>
        </Navigation>
      </PageContainer>

      <MenuContainerMobile isMenuOpen={isMenuOpen}>
        <PageContainer>
          <MenuInnerContainerMobile>
            <MenuButtonMobile
              onClick={() =>
                setActiveDropdown(
                  activeDropdown !== "solutions" ? "solutions" : undefined
                )
              }
            >
              <MenuButtonMobileTitle isActive={activeDropdown === "solutions"}>
                {t("components.ui.base.Layout.Header.solutions.title")}{" "}
                <Icon type={"chevron-right"} size={16} />
              </MenuButtonMobileTitle>
              <DropdownMobile
                ref={dropdownRef["solutions"]}
                height={getMobileHeightDropdown("solutions")}
                isActive={activeDropdown === "solutions"}
              >
                <DropdownMobileInnerContainer>
                  <DropdownMobileContent>
                    <DropdownMobileInnerContent>
                      <DropdownMobileList>
                        <DropdownMobileListElement>
                          <SafeLink to={"/solutions/customer-service/"}>
                            {t(
                              "components.ui.base.Layout.Header.solutions.customerService"
                            )}
                          </SafeLink>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <SafeLink to={"/solutions/customer-satisfaction/"}>
                            {t(
                              "components.ui.base.Layout.Header.solutions.customerSatisfaction"
                            )}
                          </SafeLink>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <SafeLink to={"/solutions/marketing-automation/"}>
                            {t(
                              "components.ui.base.Layout.Header.solutions.marketingAutomation"
                            )}
                          </SafeLink>
                        </DropdownMobileListElement>
                      </DropdownMobileList>
                    </DropdownMobileInnerContent>
                  </DropdownMobileContent>
                </DropdownMobileInnerContainer>
              </DropdownMobile>
            </MenuButtonMobile>
            <MenuButtonMobile
              onClick={() =>
                setActiveDropdown(
                  activeDropdown !== "features" ? "features" : undefined
                )
              }
            >
              <MenuButtonMobileTitle isActive={activeDropdown === "features"}>
                {t("components.ui.base.Layout.Header.features.title")}{" "}
                <Icon type={"chevron-right"} size={16} />
              </MenuButtonMobileTitle>
              <DropdownMobile
                ref={dropdownRef["features"]}
                height={getMobileHeightDropdown("features")}
                isActive={activeDropdown === "features"}
              >
                <DropdownMobileInnerContainer>
                  <DropdownMobileContent>
                    <DropdownMobileInnerContent>
                      <DropdownMobileSection>
                        <DropdownMobileSectionTitle>
                          {t(
                            "components.ui.base.Layout.Header.features.customerService.title"
                          )}
                        </DropdownMobileSectionTitle>
                        <DropdownMobileList>
                          <Loop items={features.CustomerService}>
                            {(item) => (
                              <DropdownMobileListElement key={item.path}>
                                <SafeLink to={item.path}>{item.name}</SafeLink>
                              </DropdownMobileListElement>
                            )}
                          </Loop>
                        </DropdownMobileList>
                      </DropdownMobileSection>
                      <DropdownMobileSection>
                        <DropdownMobileSectionTitle>
                          {t(
                            "components.ui.base.Layout.Header.features.marketingAutomation.title"
                          )}
                        </DropdownMobileSectionTitle>
                        <DropdownMobileList>
                          <Loop items={features.marketingAutomation}>
                            {(item) => (
                              <DropdownMobileListElement key={item.path}>
                                <SafeLink to={item.path}>{item.name}</SafeLink>
                              </DropdownMobileListElement>
                            )}
                          </Loop>
                        </DropdownMobileList>
                      </DropdownMobileSection>
                      <DropdownMobileSection>
                        <DropdownMobileSectionTitle>
                          {t(
                            "components.ui.base.Layout.Header.features.customerSatisfaction.title"
                          )}
                        </DropdownMobileSectionTitle>
                        <DropdownMobileList>
                          <Loop items={features.customerSatisfaction}>
                            {(item) => (
                              <DropdownMobileListElement key={item.path}>
                                <SafeLink to={item.path}>{item.name}</SafeLink>
                              </DropdownMobileListElement>
                            )}
                          </Loop>
                        </DropdownMobileList>
                      </DropdownMobileSection>
                    </DropdownMobileInnerContent>
                  </DropdownMobileContent>
                </DropdownMobileInnerContainer>
              </DropdownMobile>
            </MenuButtonMobile>
            <MenuButtonMobile as={SafeLink} to={"/pricing/"}>
              <MenuButtonMobileTitle isActive={false}>
                {t("components.ui.base.Layout.Header.pricing.title")}{" "}
                <Icon type={"chevron-right"} size={16} />
              </MenuButtonMobileTitle>
            </MenuButtonMobile>
            <MenuButtonMobile
              onClick={() =>
                setActiveDropdown(
                  activeDropdown !== "useCases" ? "useCases" : undefined
                )
              }
            >
              <MenuButtonMobileTitle isActive={activeDropdown === "useCases"}>
                {t("components.ui.base.Layout.Header.useCases.title")}{" "}
                <Icon type={"chevron-right"} size={16} />
              </MenuButtonMobileTitle>
              <DropdownMobile
                ref={dropdownRef["useCases"]}
                height={getMobileHeightDropdown("useCases")}
                isActive={activeDropdown === "useCases"}
              >
                <DropdownMobileInnerContainer>
                  <DropdownMobileContent>
                    <DropdownMobileInnerContent>
                      <DropdownMobileSection>
                        <DropdownMobileSectionTitle>
                          {t(
                            "components.ui.base.Layout.Header.useCases.industry.title"
                          )}
                        </DropdownMobileSectionTitle>
                        <DropdownMobileList>
                          <DropdownMobileListElement>
                            <SafeLink to={"/industries/software-as-a-service/"}>
                              {t(
                                "components.ui.base.Layout.Header.useCases.industry.saas"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                          <DropdownMobileListElement>
                            <SafeLink to={"/industries/ecommerce/"}>
                              {t(
                                "components.ui.base.Layout.Header.useCases.industry.ecommerce"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                        </DropdownMobileList>
                      </DropdownMobileSection>

                      <DropdownMobileSection>
                        <DropdownMobileSectionTitle>
                          {t(
                            "components.ui.base.Layout.Header.useCases.technology.title"
                          )}
                        </DropdownMobileSectionTitle>
                        <DropdownMobileList>
                          <DropdownMobileListElement>
                            <SafeLink to={"/features/live-chat-for-website/"}>
                              {t(
                                "components.ui.base.Layout.Header.useCases.technology.website"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                          <DropdownMobileListElement>
                            <SafeLink
                              to={"/features/live-chat-for-mobile-apps/"}
                            >
                              {t(
                                "components.ui.base.Layout.Header.useCases.technology.mobileApps"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                          <DropdownMobileListElement>
                            <SafeLink
                              to={"/features/live-chat-plugin-for-wordpress/"}
                            >
                              {t(
                                "components.ui.base.Layout.Header.useCases.technology.wordpress"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                          <DropdownMobileListElement>
                            <SafeLink
                              to={"/features/live-chat-plugin-for-shopify/"}
                            >
                              {t(
                                "components.ui.base.Layout.Header.useCases.technology.shopify"
                              )}
                            </SafeLink>
                          </DropdownMobileListElement>
                        </DropdownMobileList>
                      </DropdownMobileSection>
                    </DropdownMobileInnerContent>
                  </DropdownMobileContent>
                </DropdownMobileInnerContainer>
              </DropdownMobile>
            </MenuButtonMobile>
            <MenuButtonMobile
              onClick={() =>
                setActiveDropdown(
                  activeDropdown !== "resources" ? "resources" : undefined
                )
              }
            >
              <MenuButtonMobileTitle isActive={activeDropdown === "resources"}>
                {t("components.ui.base.Layout.Header.resources.title")}{" "}
                <Icon type={"chevron-right"} size={16} />
              </MenuButtonMobileTitle>
              <DropdownMobile
                ref={dropdownRef["resources"]}
                height={getMobileHeightDropdown("resources")}
                isActive={activeDropdown === "resources"}
              >
                <DropdownMobileInnerContainer>
                  <DropdownMobileContent>
                    <DropdownMobileInnerContent>
                      <DropdownMobileList>
                        <DropdownMobileListElement>
                          <Link to={"/blog/"}>
                            {t(
                              "components.ui.base.Layout.Header.resources.blog"
                            )}{" "}
                          </Link>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <a
                            href={"https://docs.customerly.io"}
                            target="_blank"
                          >
                            {t(
                              "components.ui.base.Layout.Header.resources.docs"
                            )}
                          </a>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <a
                            href={"https://go.customerly.io/roadmap"}
                            target="_blank"
                          >
                            {t(
                              "components.ui.base.Layout.Header.resources.productUpdates"
                            )}
                          </a>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <a
                            href={"https://go.customerly.io/api"}
                            target="_blank"
                          >
                            {t(
                              "components.ui.base.Layout.Header.resources.apiDocumentation"
                            )}
                          </a>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <a
                            href={"https://customerly.tapfiliate.com"}
                            target="_blank"
                          >
                            {t(
                              "components.ui.base.Layout.Header.resources.affiliateProgram"
                            )}
                          </a>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <Link to={"/webinars/"}>
                            {t(
                              "components.ui.base.Layout.Header.resources.footer.webinars.title"
                            )}{" "}
                          </Link>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <Link to={"/startups/"}>
                            {t(
                              "components.ui.base.Layout.Header.resources.footer.startup.title"
                            )}{" "}
                          </Link>
                        </DropdownMobileListElement>
                        <DropdownMobileListElement>
                          <Link to={"/agencies/"}>
                            {t(
                              "components.ui.base.Layout.Header.resources.footer.agencies.title"
                            )}{" "}
                          </Link>
                        </DropdownMobileListElement>
                      </DropdownMobileList>
                    </DropdownMobileInnerContent>
                  </DropdownMobileContent>
                </DropdownMobileInnerContainer>
              </DropdownMobile>
            </MenuButtonMobile>
          </MenuInnerContainerMobile>
          {withCta && (
            <CTAContainerMobile>
              <Input
                placeholder={t("components.ui.base.Layout.Header.yourEmail")}
                fullWidth
              />
              <GetStartedButton fullWidth>
                {t("components.ui.base.Layout.Header.getStarted")}
              </GetStartedButton>
              <LoginText>
                {t("components.ui.base.Layout.Header.alreadyCustomer")}{" "}
                <a href={APP_URL}>
                  {t("components.ui.base.Layout.Header.login")}
                </a>
              </LoginText>
            </CTAContainerMobile>
          )}
        </PageContainer>
      </MenuContainerMobile>
    </StyledHeader>
  );
};

Header.defaultProps = {
  withCta: true,
  withMenu: true,
  clickableLogo: true,
  ctaFocusId: false,
  alternativeColors: false,
};

export default Header;
