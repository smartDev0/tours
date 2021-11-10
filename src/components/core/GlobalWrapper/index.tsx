import React, { ReactChild, ReactElement } from "react";
import { GlobalStyle } from "styles/global.style";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { BaseCSS } from "styled-bootstrap-grid";
import { Helmet } from "react-helmet";
import Layout from "components/ui/extended/Layout";
import SEO from "components/core/SEO";
import TrackVisitor from "components/core/TrackVisitor";

export interface GlobalWrapperProps {
  children: ReactChild[];
  withLayout?: boolean;
  layoutSettings?: {
    withCta?: boolean;
    withFooter?: boolean;
    withMenu?: boolean;
    clickableLogo?: boolean;
    ctaFocusId?: string;
    mobileCta?: boolean;
    alternativeColors?: boolean;
  };
  location: Location;
}

const childrenContainSEO = (children: ReactChild[]) =>
  children &&
  children.filter(
    // @ts-ignore
    (child) => Object.keys(child).includes("type") && child.type === SEO
  ).length > 0;

const GlobalWrapper = ({
  children,
  withLayout,
  layoutSettings,
  location,
}: GlobalWrapperProps) => {
  const IS_SSR = typeof window === "undefined";

  const getLocationClonedChild = (child: ReactElement): ReactChild => {
    return React.cloneElement(child, { location });
  };

  if (!childrenContainSEO(children)) {
    throw new Error("GlobalWrapper does not have a SEO element");
  }

  if (!location) {
    throw new Error("location is missing in GlobalWrapper");
  }

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>

      <Helmet
        script={[
          {
            type: "text/javascript",
            innerHTML:
              "document.documentElement.className = document.documentElement.className.replace(/\\bno-js\\b/,'js');",
          },
        ]}
      >
        <html className={IS_SSR ? "no-js" : "js"} />
      </Helmet>

      <BaseCSS />

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TrackVisitor />

        {withLayout ? (
          <Layout
            withCta={layoutSettings?.withCta}
            withFooter={layoutSettings?.withFooter}
            withMenu={layoutSettings?.withMenu}
            clickableLogo={layoutSettings?.clickableLogo}
            ctaFocusId={layoutSettings?.ctaFocusId}
            mobileCta={layoutSettings?.mobileCta}
            alternativeColors={layoutSettings?.alternativeColors}
            location={location}
          >
            {children}
          </Layout>
        ) : (
          children.map((child) => getLocationClonedChild(child as ReactElement))
        )}
      </ThemeProvider>
    </>
  );
};

GlobalWrapper.defaultProps = {
  alternativeColors: false,
};

export default GlobalWrapper;
