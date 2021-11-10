import React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import {Link} from "gatsby";
import {AuthorWithPost, Post} from "app-types/blog";
import {useTranslation} from "react-i18next";
import Heading from "components/core/Typography/Heading";
import {
  AuthorContainer,
  ImageContainer,
  NextContainer,
  Pagination,
  PostContainer,
  PrevContainer,
  RoleContainer,
} from "./index.style";
import Loop from "components/core/Loop";
import BlogPost from "components/ui/base/BlogPost";
import {Col, Container, Row} from "styled-bootstrap-grid";
import {PageContainer} from "styles/global.style";
import BlogLayout from "components/ui/extended/BlogLayout";
import If from "components/core/If";

export interface BlogAuthorProps {
  pageContext: {
    author: AuthorWithPost;
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

const BlogAuthor = ({ pageContext, location }: BlogAuthorProps) => {
  const { t } = useTranslation();

  return (
    <GlobalWrapper location={location}>
      <SEO
        title={`${pageContext.author.name}, Author at Customerly`}
        description={pageContext.author.seo.metaDesc}
        withoutTitleSuffix
      />

      <BlogLayout>
        <AuthorContainer>
          <ImageContainer>
            <img
              src={pageContext.author.avatar.url}
              alt={pageContext.author.name}
            />
          </ImageContainer>
          <Heading weight={"bold"} level={1}>
            {pageContext.author.name}
          </Heading>
          <RoleContainer>{pageContext.author.description}</RoleContainer>
        </AuthorContainer>

        <PostContainer>
          <PageContainer>
            <Container>
              <Row>
                <Loop items={pageContext.posts}>
                  {(post, idx) => (
                    <Col key={idx} sm={12} md={6}>
                      <BlogPost post={post} showAuthor={false} />
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
                          {t("templates.blog.author.older")}
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
                          {t("templates.blog.author.newer")}
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

export default BlogAuthor;
