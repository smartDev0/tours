import React from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import { useTranslation } from "react-i18next";
import BlogLayout from "components/ui/extended/BlogLayout";
import {
  Author,
  AuthorContent,
  AuthorImage,
  AuthorName,
  AuthorRole,
  CategoryContainer,
  CategoryTitle,
  CategoryTitleContainer,
  Content,
  Description,
  Divider,
  Duration,
  HeadingContainer,
  ImageContainer,
  LatestPost,
  Metadata,
  SeeMoreLink,
} from "styles/blog.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import SafeLink from "components/core/SafeLink";
import Heading from "components/core/Typography/Heading";
import { graphql, useStaticQuery } from "gatsby";
import { getReadingTime } from "utils/reading-time";
import { BLOG_PATH } from "constants/paths";
import { AllPostQueryResult } from "app-types/blog";
import BlogPost from "components/ui/base/BlogPost";
import Icon from "components/core/Icon";
import { Title } from "components/core/Typography/Title";
import Loop from "components/core/Loop";
import If from "components/core/If";
import BlogSubscribe from "components/ui/base/BlogSubscribe";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import FeatureGrid from "components/ui/base/FeatureGrid";

export interface BlogProps {
  location: Location;
}

export default ({ location }: BlogProps) => {
  const { t } = useTranslation();

  const { allPostResult }: AllPostQueryResult = useStaticQuery(graphql`
    query {
      allPostResult: allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          author {
            node {
              avatar {
                url
              }
              name
              uri
              description
            }
          }
          categories {
            nodes {
              name
              slug
              uri
            }
          }
          date(formatString: "MMM DD, YYYY")
          uri
          title
          content
          seo {
            title
            metaDesc
          }
          smallFeaturedImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, height: 300, width: 500)
                }
              }
            }
          }
          bigFeaturedImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);

  const latestPost = allPostResult.nodes[0];
  const otherLatestPosts = [allPostResult.nodes[1], allPostResult.nodes[2]];
  const otherPosts = allPostResult.nodes.slice(3);
  const customerSatisfactionPost = otherPosts
    .filter((post) =>
      post.categories.nodes
        .map((category) => category.slug)
        .includes("customer-satisfaction")
    )
    .slice(0, 2);
  const CustomerServicePost = otherPosts
    .filter((post) =>
      post.categories.nodes
        .map((category) => category.slug)
        .includes("customer-service")
    )
    .slice(0, 2);
  const marketingPost = otherPosts
    .filter((post) =>
      post.categories.nodes
        .map((category) => category.slug)
        .includes("marketing")
    )
    .slice(0, 2);

  return (
    <GlobalWrapper location={location}>
      <SEO
        title={t("pages.blog.seo.title")}
        description={t("pages.blog.seo.description")}
        withoutTitleSuffix={true}
        image={{
          relativePath:
            "meta/customerly-blog-help-with-customer-service-marketing-automation.jpg",
          alt: "Customerly Blog | Help with Customer Support and Marketing Automation",
        }}
      />

      <BlogLayout>
        <LatestPost>
          <Container>
            <Row alignItems={"center"}>
              <Col sm={12} md={6}>
                <SafeLink to={`${BLOG_PATH}${latestPost.uri}/`}>
                  <ImageContainer
                    backgroundUrl={
                      latestPost.bigFeaturedImage.node.localFile.childImageSharp
                        .gatsbyImageData.images.fallback?.src
                    }
                  />
                </SafeLink>
              </Col>
              <Col sm={12} md={6}>
                <Content>
                  <Metadata>
                    <SafeLink
                      to={`${BLOG_PATH}${latestPost.categories.nodes[0].uri}/`}
                    >
                      {latestPost.categories.nodes[0].name}
                    </SafeLink>

                    <Divider>•</Divider>

                    <Duration>
                      {getReadingTime(latestPost.content)}{" "}
                      {t("pages.blog.index.minRead")}
                    </Duration>
                  </Metadata>
                  <HeadingContainer>
                    <SafeLink to={`${BLOG_PATH}${latestPost.uri}/`}>
                      <Heading level={2} weight={600}>
                        {latestPost.title}
                      </Heading>
                    </SafeLink>
                  </HeadingContainer>
                  <Description>{latestPost.seo.metaDesc}</Description>
                  <Author>
                    <AuthorImage>
                      <img
                        alt={latestPost.author.node.name}
                        src={latestPost.author.node.avatar.url}
                      />
                    </AuthorImage>
                    <AuthorContent>
                      <AuthorName>
                        <SafeLink
                          to={`${BLOG_PATH}${latestPost.author.node.uri}/`}
                        >
                          {latestPost.author.node.name}
                        </SafeLink>
                      </AuthorName>
                      <AuthorRole>
                        {latestPost.author.node.description}
                      </AuthorRole>
                    </AuthorContent>
                  </Author>
                </Content>
              </Col>
            </Row>
          </Container>
        </LatestPost>

        <PageContainer>
          <FeatureGrid
            centeredTitle
            title={t("pages.blog.index.title")}
            titleLevel={1}
            description={t("pages.blog.index.description")}
            sections={[
              {
                title: t("pages.blog.index.categories.customerService.title"),
                description: t(
                  "pages.blog.index.categories.customerService.description"
                ),
                image: {
                  alt: t("pages.blog.index.categories.customerService.title"),
                  relativePath: "icons/live-chat.png",
                },
                links: [
                  {
                    text: t(
                      "pages.blog.index.categories.customerService.readMore"
                    ),
                    path: "/blog/category/customer-service/",
                  },
                ],
              },
              {
                title: t(
                  "pages.blog.index.categories.marketingAutomation.title"
                ),
                description: t(
                  "pages.blog.index.categories.marketingAutomation.description"
                ),
                image: {
                  alt: t(
                    "pages.blog.index.categories.marketingAutomation.title"
                  ),
                  relativePath: "icons/live-chat-customer-engagement.png",
                },
                links: [
                  {
                    text: t(
                      "pages.blog.index.categories.marketingAutomation.readMore"
                    ),
                    path: "/blog/category/marketing/",
                  },
                ],
              },
              {
                title: t(
                  "pages.blog.index.categories.customerSatisfaction.title"
                ),
                description: t(
                  "pages.blog.index.categories.customerSatisfaction.description"
                ),
                image: {
                  alt: t(
                    "pages.blog.index.categories.customerSatisfaction.title"
                  ),
                  relativePath: "icons/nps.png",
                },
                links: [
                  {
                    text: t(
                      "pages.blog.index.categories.customerSatisfaction.readMore"
                    ),
                    path: "/blog/category/customer-satisfaction/",
                  },
                ],
              },
            ]}
          />

          <MediumComponentContainer>
            <CategoryContainer>
              <Row>
                <Col sm={12} md={6}>
                  <Title>{t("pages.blog.index.latestPost")}</Title>
                </Col>
              </Row>
              <Row>
                <Loop items={otherLatestPosts}>
                  {(otherLatestPost, idx) => (
                    <Col key={`${idx}-${otherLatestPost.uri}`} sm={12} md={6}>
                      <BlogPost post={otherLatestPost} />
                    </Col>
                  )}
                </Loop>
              </Row>
            </CategoryContainer>
          </MediumComponentContainer>

          <BlogSubscribe />

          <If condition={CustomerServicePost.length > 0}>
            <MediumComponentContainer>
              <CategoryContainer>
                <Row>
                  <Col sm={12} md={12}>
                    <CategoryTitleContainer>
                      <CategoryTitle>
                        {t("pages.blog.index.CustomerService")}
                      </CategoryTitle>
                      <SeeMoreLink
                        as={SafeLink}
                        to={`/blog/category/customer-service/`}
                      >
                        {t("pages.blog.index.seeMore")}
                        <Icon type={"arrow-right"} size={16} />
                      </SeeMoreLink>
                    </CategoryTitleContainer>
                  </Col>
                </Row>
                <Row>
                  <Loop items={CustomerServicePost}>
                    {(CustomerServicePost, idx) => (
                      <Col
                        key={`${idx}-${CustomerServicePost.uri}`}
                        sm={12}
                        md={6}
                      >
                        <BlogPost post={CustomerServicePost} />
                      </Col>
                    )}
                  </Loop>
                </Row>
              </CategoryContainer>
            </MediumComponentContainer>
          </If>

          <If condition={marketingPost.length > 0}>
            <MediumComponentContainer>
              <CategoryContainer>
                <Row>
                  <Col sm={12} md={12}>
                    <CategoryTitleContainer>
                      <CategoryTitle>
                        {t("pages.blog.index.marketingAutomation")}
                      </CategoryTitle>
                      <SeeMoreLink
                        as={SafeLink}
                        to={`/blog/category/marketing/`}
                      >
                        {t("pages.blog.index.seeMore")}
                        <Icon type={"arrow-right"} size={16} />
                      </SeeMoreLink>
                    </CategoryTitleContainer>
                  </Col>
                </Row>
                <Row>
                  <Loop items={marketingPost}>
                    {(marketingPost, idx) => (
                      <Col key={`${idx}-${marketingPost.uri}`} sm={12} md={6}>
                        <BlogPost post={marketingPost} />
                      </Col>
                    )}
                  </Loop>
                </Row>
              </CategoryContainer>
            </MediumComponentContainer>
          </If>

          <If condition={customerSatisfactionPost.length > 0}>
            <MediumComponentContainer>
              <CategoryContainer>
                <Row>
                  <Col sm={12} md={12}>
                    <CategoryTitleContainer>
                      <CategoryTitle>
                        {t("pages.blog.index.customerSatisfaction")}
                      </CategoryTitle>
                      <SeeMoreLink
                        as={SafeLink}
                        to={`/blog/category/customer-satisfaction/`}
                      >
                        {t("pages.blog.index.seeMore")}
                        <Icon type={"arrow-right"} size={16} />
                      </SeeMoreLink>
                    </CategoryTitleContainer>
                  </Col>
                </Row>
                <Row>
                  <Loop items={customerSatisfactionPost}>
                    {(customerSatisfactionPost, idx) => (
                      <Col
                        key={`${idx}-${customerSatisfactionPost.uri}`}
                        sm={12}
                        md={6}
                      >
                        <BlogPost post={customerSatisfactionPost} />
                      </Col>
                    )}
                  </Loop>
                </Row>
              </CategoryContainer>
            </MediumComponentContainer>
          </If>
        </PageContainer>
      </BlogLayout>
    </GlobalWrapper>
  );
};
