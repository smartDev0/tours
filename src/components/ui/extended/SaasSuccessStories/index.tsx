import React from "react";
import { StyledSaasSuccessStories } from "./index.style";
import { graphql, useStaticQuery } from "gatsby";
import {
  SuccessStory as SuccessStoryType,
  SuccessStoryQueryResult,
} from "app-types/success-story";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SuccessStory from "components/ui/base/SuccessStory";
import Loop from "components/core/Loop";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { useTranslation } from "react-i18next";
import { Title } from "components/core/Typography/Title";

const SaasSuccessStories = () => {
  const { t } = useTranslation();
  const { successStories }: SuccessStoryQueryResult = useStaticQuery(graphql`
    query {
      successStories: allContentfulSuccessStory(
        sort: { fields: createdAt, order: DESC }
        filter: { node_locale: { eq: "en" }, category: { eq: "SaaS" } }
      ) {
        nodes {
          id
          slug
          name
          category
          result
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledSaasSuccessStories>
      <MediumComponentContainer>
        <PageContainer>
          <Title>{t("components.ui.extended.SaasSuccessStories.title")}</Title>
          <Container>
            <Row>
              <Loop items={successStories.nodes}>
                {(successStory: SuccessStoryType) => (
                  <Col key={successStory.slug} md={6} sm={12}>
                    <SuccessStory successStory={successStory} />
                  </Col>
                )}
              </Loop>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledSaasSuccessStories>
  );
};

export default SaasSuccessStories;
