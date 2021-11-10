import React, { ReactNode } from "react";
import { MONOLANGUAGE_PAGES } from "constants/paths";
import { graphql, useStaticQuery } from "gatsby";
import { LocalizedLink } from "gatsby-theme-i18n";

export interface SafeLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  newTab?: boolean;
}

interface SafeLinkQueryResult {
  site: {
    siteMetadata: {
      defaultLanguage: string;
    };
  };
}

const SafeLink = (props: SafeLinkProps) => {
  let toDefaultLanguage = false;
  const isInternalLink = props.to.startsWith("/");

  const { site }: SafeLinkQueryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultLanguage
        }
      }
    }
  `);

  MONOLANGUAGE_PAGES.forEach((path) => {
    if (props.to.includes(path)) {
      toDefaultLanguage = true;
    }
  });

  return (
    <>
      {isInternalLink && !props.newTab ? (
        <LocalizedLink
          to={props.to}
          language={
            toDefaultLanguage ? site.siteMetadata.defaultLanguage : undefined
          }
          className={props.className}
        >
          {props.children}
        </LocalizedLink>
      ) : (
        <a
          href={props.to}
          className={props.className}
          target={props.newTab ? "_blank" : undefined}
        >
          {props.children}
        </a>
      )}
    </>
  );
};

export default SafeLink;
