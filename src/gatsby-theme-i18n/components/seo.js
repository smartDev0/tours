import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import { useLocalization } from "gatsby-theme-i18n/src/hooks/use-localization";
import { isMonolanguagePage } from "../../utils/path";

const SEO = ({ location, pageContext }) => {
  const { locale, config, prefixDefault, defaultLang } = useLocalization();
  const data = useStaticQuery(graphql`
    query CustomLocalizationSEOQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const defaultSiteUrl = data.site.siteMetadata.siteUrl;
  const { pathname } = location;

  return (
    <Helmet>
      <html lang={pageContext.hrefLang} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${defaultSiteUrl}${prefixDefault ? `/${defaultLang}` : ``}${
          pageContext.originalPath === withPrefix(`/`)
            ? ``
            : pageContext.originalPath
        }`}
      />
      <link
        rel="alternate"
        hrefLang={pageContext.hrefLang}
        href={`${defaultSiteUrl}${
          pathname === withPrefix(`/`) ? `` : pathname
        }`}
      />
      {config.map((l) => {
        let href;

        if (l.code === locale) return null;
        if (isMonolanguagePage(location.pathname)) return null;

        if (l.code === defaultLang) {
          href = `${defaultSiteUrl}${
            pageContext.originalPath === withPrefix(`/`)
              ? ``
              : pageContext.originalPath
          }`;
        } else {
          href = `${defaultSiteUrl}${withPrefix(
            `/${l.code}${pageContext.originalPath}`
          )}`;
        }

        return (
          <link
            key={l.code}
            rel="alternate"
            hrefLang={l.hrefLang}
            href={href}
          />
        );
      })}
      <meta
        property="og:locale"
        content={pageContext.hrefLang.replace(`-`, `_`)}
      />
      {config.map((l) => {
        if (l.code === locale) return null;
        if (isMonolanguagePage(location.pathname)) return null;

        return (
          <meta
            key={l.code}
            property="og:locale:alternate"
            content={l.hrefLang.replace(`-`, `_`)}
          />
        );
      })}
    </Helmet>
  );
};

export { SEO };
