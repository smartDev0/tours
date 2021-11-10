import React from "react";
import { BreadcrumbsLi, BreadcrumbsUl, StyledBreadcrumbs } from "./index.style";
import Icon from "components/core/Icon";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import SafeLink from "components/core/SafeLink";

export interface BreadCrumb {
  name: string;
  path: string;
}

export interface BreadcrumbsProps {
  elements: BreadCrumb[];
}

interface BreadCrumbsQueryResult {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { site }: BreadCrumbsQueryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsUl>
        {props.elements.map((element, i) => {
          return (
            <BreadcrumbsLi key={i}>
              {i > 0 && <Icon type={"chevron-right"} size={10} />}
              <SafeLink to={element.path}>{element.name}</SafeLink>
            </BreadcrumbsLi>
          );
        })}
      </BreadcrumbsUl>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: props.elements.map((element, i) => {
              return {
                "@type": "ListItem",
                position: i + 1,
                name: element.name,
                item: site.siteMetadata.siteUrl + element.path,
              };
            }),
          })}
        </script>
      </Helmet>
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
