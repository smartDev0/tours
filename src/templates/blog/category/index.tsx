import React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import { Link } from "gatsby";
import { CategoryWithPost, Post } from "app-types/blog";
import { useTranslation } from "react-i18next";
import Heading from "components/core/Typography/Heading";
import {
  CategoryContainer,
  CategoryInnerContainer,
  DescriptionContainer,
  NextContainer,
  Pagination,
  PostContainer,
  PrevContainer,
  SubtitleContainer,
} from "./index.style";
import Loop from "components/core/Loop";
import BlogPost from "components/ui/base/BlogPost";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { PageContainer } from "styles/global.style";
import BlogLayout from "components/ui/extended/BlogLayout";
import If from "components/core/If";

export interface BlogCategoryProps {
  pageContext: {
    category: CategoryWithPost;
    posts: Post[];
    pagination: {
      limit: number;
      skip: number;
      numberOfPages: number;
      currentPage: number;
      newerPath: string;
      olderPath: string;
    };
  };
  location: Location;
}

const BlogCategory = ({ pageContext, location }: BlogCategoryProps) => {
  const { t } = useTranslation();

  return (
    <GlobalWrapper location={location}>
      <SEO
        title={`All posts of ${pageContext.category.name}`}
        description={pageContext.category.seo.metaDesc}
      />

      <BlogLayout>
        <CategoryContainer>
          <CategoryInnerContainer>
            <SubtitleContainer>
              {t("templates.blog.category.postOn")}
            </SubtitleContainer>
            <Heading weight={"bold"} level={1}>
              {pageContext.category.name}
            </Heading>
            <DescriptionContainer>
              {pageContext.category.description}
            </DescriptionContainer>
          </CategoryInnerContainer>
        </CategoryContainer>

        <PostContainer>
          <PageContainer>
            <Container>
              <Row>
                <Loop items={pageContext.posts}>
                  {(post, idx) => (
                    <Col key={idx} sm={12} md={6}>
                      <BlogPost post={post} />
                    </Col>
                  )}
                </Loop>
              </Row>
            </Container>

            <Container>
              <Row>
                <Col>
                  <Pagination>
                    <PrevContainer>
                      <If
                        condition={
                          pageContext.pagination.olderPath !== undefined
                        }
                      >
                        <Link to={pageContext.pagination.olderPath}>
                          {t("templates.blog.category.older")}
                        </Link>
                      </If>
                    </PrevContainer>
                    <NextContainer>
                      <If
                        condition={
                          pageContext.pagination.newerPath !== undefined
                        }
                      >
                        <Link to={pageContext.pagination.newerPath}>
                          {t("templates.blog.category.newer")}
                        </Link>
                      </If>
                    </NextContainer>
                  </Pagination>
                </Col>
              </Row>
            </Container>
          </PageContainer>
        </PostContainer>
      </BlogLayout>
    </GlobalWrapper>
  );
};

export default BlogCategory;
