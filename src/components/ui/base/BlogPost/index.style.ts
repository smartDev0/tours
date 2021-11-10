import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledBlogPost = styled.div`
  padding: 32px 0;

  ${media.md`
    padding: 32px 32px 32px 0;
  `}
`;

const BlogPostTitle = styled.span`
  display: block;
  font-weight: bold;

  a {
    color: ${(props) => props.theme.titleColor};

    &:hover {
      text-decoration: underline;
    }

    ${media.md`
      font-size: 22px;
      line-height: 1.4;
    `}
  }
`;

const BlogPostDescription = styled.span`
  display: block;
`;

const CoverContainer = styled.div`
  position: relative;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

const BlogPostMetadata = styled.div`
  font-size: 16px;

  a {
    font-size: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    color: #c4c4c4;
  }
`;

const BlogPostDivider = styled.span`
  margin: 0 8px;
`;

const BlogPostDuration = styled.span``;

const BlogPostAuthor = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;
`;

const BlogPostAuthorImage = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;

const BlogPostAuthorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogPostAuthorName = styled.div`
  display: block;
  font-weight: bold;

  a {
    color: ${(props) => props.theme.titleColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    ${media.md`
      font-size: 22px;
      line-height: 1.4;
    `}
  }
`;

const BlogPostAuthorRole = styled.div`
  color: #c4c4c4;
  display: block;
`;

export {
  StyledBlogPost,
  BlogPostTitle,
  BlogPostDescription,
  CoverContainer,
  BlogPostMetadata,
  BlogPostDivider,
  BlogPostDuration,
  BlogPostAuthor,
  BlogPostAuthorImage,
  BlogPostAuthorContent,
  BlogPostAuthorName,
  BlogPostAuthorRole,
};
