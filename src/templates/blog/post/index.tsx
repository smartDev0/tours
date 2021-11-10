import React, { useState } from "react";
import GlobalWrapper from "components/core/GlobalWrapper";
import SEO from "components/core/SEO";
import { Post } from "app-types/blog";
import { useTranslation } from "react-i18next";
import Heading from "components/core/Typography/Heading";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  CenteredCol,
  ContentButton,
  ContentElement,
  ContentsList,
  CoverContainer,
  Date,
  Divider,
  FacebookShareButton,
  LinkedinShareButton,
  Metadata,
  MetadataContent,
  MetadataStickyContainer,
  MetadataTitle,
  PostContainer,
  PostContent,
  PostContentContainer,
  SideCol,
  SubscribeForm,
  SubtitleContainer,
  Tag,
  Tags,
  TagsList,
  TagsTitle,
  TitleContainer,
  TwitterShareButton,
} from "./index.style";
import BlogLayout from "components/ui/extended/BlogLayout";
import { Link } from "gatsby";
import SafeLink from "components/core/SafeLink";
import { BLOG_PATH } from "constants/paths";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row } from "styled-bootstrap-grid";
import Icon from "components/core/Icon";
import Input from "components/core/Input";
import Button from "components/core/Button";
import { getBlogPath } from "utils/path";
import { getReadingTime } from "utils/reading-time";
import { useSendForm } from "networking/useForms";
import { createRendererAst } from "utils/render-ast";
import { slugify } from "utils/string";
import Spinner from "components/core/Spinner";
import {
  getTextInTitle,
  H2ToBlogTitle,
  LightBoxPictureInDiv,
  LightBoxPictureInFigure,
  LinkFixer,
} from "templates/blog/post/ast-components";
import Tooltip from "components/core/Tooltip";
import { validate } from "utils/email";
import BlogPostFooter from "components/ui/base/BlogPostFooter";
import useEventLeadGenerated from "events/useEventLeadGenerated";

export interface BlogPostProps {
  pageContext: {
    post: Post;
    htmlAst: any;
  };
  location: Location;
}

interface Content {
  title: string;
  id: string;
}

const BlogPost = ({ pageContext, location }: BlogPostProps) => {
  const { t } = useTranslation();
  const sendForm = useSendForm();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const contents: Content[] = [];
  const renderAst = createRendererAst({
    a: LinkFixer,
    figure: LightBoxPictureInFigure,
    div: LightBoxPictureInDiv,
    h2: (props: any) => H2ToBlogTitle(props, location),
  });
  const { fireEvent } = useEventLeadGenerated();

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !validate(email)) {
      setIsError(true);

      return;
    }

    setIsLoading(true);
    setIsSuccess(false);

    sendForm(email, {
      utm_source: "Customerly",
      utm_medium: "blog",
      utm_campaign: pageContext.post.slug,
    })
      .then(() => {
        fireEvent({ step: "submit" });
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const getFullPostPath = (uri: string): string => {
    const baseUrl = process.env.GATSBY_SITE_URL || "https://www.customerly.io";

    return `${baseUrl}${BLOG_PATH}${uri}/`;
  };

  pageContext.htmlAst.children
    .filter((element: any) => element.tagName === "h2")
    .forEach((el: any) => {
      contents.push({
        title: getTextInTitle(el),
        id: slugify(getTextInTitle(el)),
      });
    });

  return (
    <GlobalWrapper location={location}>
      <SEO
        title={pageContext.post.title}
        description={pageContext.post.seo.metaDesc}
        image={{
          imageData:
            pageContext.post.smallFeaturedImage.node.localFile.childImageSharp
              .gatsbyImageData,
          alt: pageContext.post.title,
        }}
        meta={[
          {
            name: "twitter:label1",
            content: t("templates.blog.post.estReadingTime"),
          },
          {
            name: "twitter:data1",
            content: `${getReadingTime(pageContext.post.content)} ${t(
              "templates.blog.post.minutes"
            )}`,
          },
        ]}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": location.href,
            },
            headline: pageContext.post.title,
            image: [
              location.origin +
                pageContext.post.bigFeaturedImage.node.localFile.childImageSharp
                  .gatsbyImageData.images.fallback!.src,
            ],
            datePublished: pageContext.post.datePublished,
            dateModified: pageContext.post.dateModified,
            author: {
              "@type": "Person",
              name: pageContext.post.author.node.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Customerly",
              url: "https://www.customerly.io",
            },
          },
        ]}
      />

      <BlogLayout>
        <PostContainer>
          <CoverContainer>
            <GatsbyImage
              alt={pageContext.post.title}
              image={
                pageContext.post.bigFeaturedImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </CoverContainer>
          <TitleContainer>
            <SubtitleContainer>
              <Link
                to={`${BLOG_PATH}${pageContext.post.categories.nodes[0].uri}/`}
              >
                {pageContext.post.categories.nodes[0].name}
              </Link>
            </SubtitleContainer>
            <Heading weight={"bold"} level={1}>
              {pageContext.post.title}
            </Heading>
            <Metadata>
              <SafeLink to={`${BLOG_PATH}${pageContext.post.author.node.uri}/`}>
                {pageContext.post.author.node.name}
              </SafeLink>

              <Divider>•</Divider>

              <Date>{pageContext.post.date}</Date>
            </Metadata>
          </TitleContainer>
        </PostContainer>

        <PostContentContainer>
          <Container>
            <Row>
              <SideCol hiddenMdDown>
                {contents.length > 0 && (
                  <MetadataStickyContainer>
                    <MetadataTitle>
                      {t("templates.blog.post.contents")}
                    </MetadataTitle>
                    <ContentsList>
                      {contents.map((content) => (
                        <ContentElement key={content.id}>
                          <ContentButton
                            onClick={() => scrollTo(`#${content.id}`)}
                          >
                            {content.title}
                          </ContentButton>
                        </ContentElement>
                      ))}
                    </ContentsList>
                  </MetadataStickyContainer>
                )}
              </SideCol>
              <CenteredCol>
                <PostContent>{renderAst(pageContext.htmlAst)}</PostContent>
                {pageContext.post.tags?.nodes.length > 0 && (
                  <Tags>
                    <TagsTitle>{t("templates.blog.post.tags")}</TagsTitle>
                    <TagsList>
                      {pageContext.post.tags.nodes.map((tag) => {
                        return (
                          <Tag key={tag.name}>
                            <SafeLink to={getBlogPath(tag.uri)}>
                              {tag.name}
                            </SafeLink>
                          </Tag>
                        );
                      })}
                    </TagsList>
                  </Tags>
                )}
                <BlogPostFooter
                  name={pageContext.post.author.node.name}
                  authorDescription={pageContext.post.author.node.description}
                  description={pageContext.post.seo.metaDesc}
                  img={pageContext.post.author.node.avatar.url}
                  uri={pageContext.post.author.node.uri}
                />
              </CenteredCol>
              <SideCol hiddenMdDown>
                <MetadataStickyContainer>
                  <MetadataTitle>
                    {t("templates.blog.post.share")}
                  </MetadataTitle>
                  <MetadataContent>
                    <TwitterShareButton
                      target={"_blank"}
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        getFullPostPath(pageContext.post.uri)
                      )}`}
                      blackWhite={false}
                    >
                      <Icon type={"twitter"} size={16} fill={"#fff"} />
                    </TwitterShareButton>
                    <FacebookShareButton
                      target={"_blank"}
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        getFullPostPath(pageContext.post.uri)
                      )}`}
                      blackWhite={false}
                    >
                      <Icon type={"facebook"} size={16} fill={"#fff"} />
                    </FacebookShareButton>
                    <LinkedinShareButton
                      target={"_blank"}
                      href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        getFullPostPath(pageContext.post.uri)
                      )}`}
                      blackWhite={false}
                    >
                      <Icon type={"linkedin"} size={16} fill={"#fff"} />
                    </LinkedinShareButton>
                  </MetadataContent>
                  <MetadataTitle>
                    {t("templates.blog.post.subscribeMonthly")}
                  </MetadataTitle>
                  <MetadataContent>
                    <SubscribeForm onSubmit={onSubmit}>
                      <Tooltip
                        content={t("templates.blog.post.errorEmail")}
                        type={"custom"}
                        position={"top-center"}
                        show={isError}
                      >
                        <Input
                          name={"email"}
                          type={"email"}
                          placeholder={t(
                            "templates.blog.post.placeholderEmail"
                          )}
                          required
                          disabled={isSuccess || isLoading}
                          onChange={(e: any) => {
                            setIsError(false);
                            setIsSuccess(false);
                            setEmail(e.target.value);
                          }}
                        />
                      </Tooltip>
                      <Button
                        disabled={isSuccess || isLoading}
                        fullWidth
                        onClick={onSubmit}
                      >
                        <Spinner isLoading={isLoading}>
                          {isSuccess
                            ? t("templates.blog.post.subscribed")
                            : t("templates.blog.post.subscribe")}
                        </Spinner>
                      </Button>
                    </SubscribeForm>
                  </MetadataContent>
                </MetadataStickyContainer>
              </SideCol>
            </Row>
          </Container>
        </PostContentContainer>
      </BlogLayout>
    </GlobalWrapper>
  );
};

export default BlogPost;
