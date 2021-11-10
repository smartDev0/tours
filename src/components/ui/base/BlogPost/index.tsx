import React from "react";
import {
  BlogPostAuthor,
  BlogPostAuthorContent,
  BlogPostAuthorImage,
  BlogPostAuthorName,
  BlogPostAuthorRole,
  BlogPostDescription,
  BlogPostDivider,
  BlogPostDuration,
  BlogPostMetadata,
  BlogPostTitle,
  CoverContainer,
  StyledBlogPost,
} from "./index.style";
import { Post as PostType } from "app-types/blog";
import SafeLink from "components/core/SafeLink";
import { GatsbyImage } from "gatsby-plugin-image";
import { BLOG_PATH } from "constants/paths";
import { useTranslation } from "react-i18next";
import { getReadingTime } from "utils/reading-time";
import If from "components/core/If";
import { Link } from "gatsby";

export interface BlogPostProps {
  post: PostType;
  showAuthor?: boolean;
}

const BlogPost = ({ post, showAuthor, ...rest }: BlogPostProps) => {
  const { t } = useTranslation();

  return (
    <StyledBlogPost>
      <SafeLink to={`${BLOG_PATH}${post.uri}/`}>
        <CoverContainer>
          <GatsbyImage
            alt={post.title}
            image={
              post.smallFeaturedImage.node.localFile.childImageSharp
                .gatsbyImageData
            }
          />
        </CoverContainer>
      </SafeLink>
      <BlogPostMetadata>
        <SafeLink to={`${BLOG_PATH}${post.categories.nodes[0].uri}/`}>
          {post.categories.nodes[0].name}
        </SafeLink>
        <BlogPostDivider>•</BlogPostDivider>
        <BlogPostDuration>
          {getReadingTime(post.content)}{" "}
          {t("components.ui.base.BlogPost.minRead")}
        </BlogPostDuration>
      </BlogPostMetadata>
      <BlogPostTitle>
        <SafeLink to={`${BLOG_PATH}${post.uri}/`}>{post.title}</SafeLink>
      </BlogPostTitle>
      <BlogPostDescription>{post.seo.metaDesc}</BlogPostDescription>
      <If condition={!!showAuthor}>
        <BlogPostAuthor>
          <BlogPostAuthorImage>
            <img
              alt={post.author.node.name}
              src={post.author.node.avatar.url}
            />
          </BlogPostAuthorImage>
          <BlogPostAuthorContent>
            <BlogPostAuthorName>
              <Link to={`${BLOG_PATH}${post.author.node.uri}/`}>
                {post.author.node.name}
              </Link>
            </BlogPostAuthorName>
            <BlogPostAuthorRole>
              {post.author.node.description}
            </BlogPostAuthorRole>
          </BlogPostAuthorContent>
        </BlogPostAuthor>
      </If>
    </StyledBlogPost>
  );
};

BlogPost.defaultProps = {
  showAuthor: true,
};
export default BlogPost;
