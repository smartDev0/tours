import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Subtitle } from "components/core/Typography/Subtitle";
import Counter from "components/core/Counter";
import { Title } from "components/core/Typography/Title";
import { useTranslation } from "react-i18next";
import { StyledHelpCenterSavings } from "./index.style";

const DOLLARS_PER_ARTICLE_VIEW = 5;

export interface HelpCenterSavingsProps {
  articlesApi: {
    nodes: {
      knowledge_base_articles_views: {
        unit: string;
        value: number;
      };
    }[];
  };
}

const HelpCenterSavings = () => {
  const { articlesApi }: HelpCenterSavingsProps = useStaticQuery(graphql`
    query {
      articlesApi: allRestApiV3PublicKnowledgeBaseArticles {
        nodes {
          knowledge_base_articles_views {
            unit
            value
          }
        }
      }
    }
  `);

  const { t, i18n } = useTranslation();

  return (
    <StyledHelpCenterSavings>
      <MediumComponentContainer>
        <PageContainer>
          <Subtitle>
            {t("components.ui.extended.HelpCenterSavings.subtitle")}
          </Subtitle>
          <Title>
            $
            <Counter
              from={0}
              to={
                articlesApi.nodes[0].knowledge_base_articles_views.value *
                DOLLARS_PER_ARTICLE_VIEW
              }
              duration={4}
              thousandsSeparators
              locale={i18n.language}
            />{" "}
            {t("components.ui.extended.HelpCenterSavings.title")}
          </Title>
        </PageContainer>
      </MediumComponentContainer>
    </StyledHelpCenterSavings>
  );
};

export default HelpCenterSavings;
