import React from "react";
import {
  AccBlogStaticSvg,
  AccHomeStaticSvg,
  AccSafeLink,
  LogoContainer,
  MainSafeLink,
  Navigation,
  StyledHeader,
  Tagline,
} from "components/ui/extended/BlogLayout/Header/index.style";
import StaticSvg from "components/core/StaticSvg";
import { PageContainer } from "styles/global.style";
import { Trans } from "react-i18next";
import SafeLink from "components/core/SafeLink";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  // Ignoring prettier because "Brought to you by <SafeLink ..." was split into two lines, breaking the localization
  // prettier-ignore
  return (
    <StyledHeader>
      <PageContainer>
        <Navigation>
          <LogoContainer>
            <MainSafeLink to={"/"}>
              <StaticSvg alt={"Customerly"} src={"logo/blog-wide-white.svg"} />
            </MainSafeLink>
            <AccSafeLink to={"/blog/"}>
              <AccHomeStaticSvg alt={"Home"} src={"logo/blog-home.svg"} />
              <AccBlogStaticSvg alt={"Blog"} src={"logo/blog-blog.svg"} />
            </AccSafeLink>
          </LogoContainer>
          <Tagline>
            <Trans i18nKey="components.ui.base.BlogLayout.Header.tagline">
              Brought to you by <SafeLink to={"/"}>Customerly</SafeLink>, the toolset to
              improve your Customer Support, Marketing Automation and Customer
              Satisfaction
            </Trans>
          </Tagline>
        </Navigation>
      </PageContainer>
    </StyledHeader>
  );
};

Header.defaultProps = {
  withCta: true,
};

export default Header;
