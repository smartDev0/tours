import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { Container, media } from "styled-bootstrap-grid";
import { Title } from "components/core/Typography/Title";
import { UnderlinedLink } from "styles/global.style";

const LatestPost = styled.article`
  min-height: 400px;
  padding: 0;
  background: ${(props) => props.theme.accentColor};

  a {
    color: #ffffff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  ${media.sm`
    padding: 32px 0 96px;
  `}
`;

const CategoryContainer = styled(Container)`
  display: block;
  margin-bottom: 64px;
  margin-top: 16px;
`;

const CategoryTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${media.sm`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `}
`;

const CategoryTitle = styled(Title)`
  margin: 0;
`;

const SeeMoreLink = styled(UnderlinedLink)`
  margin-right: 0;
  margin-top: 8px;

  svg {
    margin-left: 8px;
    stroke: ${(props) => props.theme.accentColor};
  }

  ${media.sm`
    margin-right: 32px;
    margin-top: 0;
  `}
`;

const ImageContainer = styled.div<{ backgroundUrl?: string }>`
  border-radius: ${(props) => props.theme.borderRadius};
  background: url(${(props) => props.backgroundUrl}) center no-repeat;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 300px;

  ${media.sm`
    width: 100%;
    height: 400px;
  `}
`;

const Content = styled.div`
  padding: 32px;
`;

const Metadata = styled.div`
  opacity: 0.8;

  * {
    font-size: 16px;
    color: #fff;
  }
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Duration = styled.span``;

const HeadingContainer = styled.div`
  a {
    text-decoration: none;
  }

  ${StyledHeading} {
    margin-top: 8px;
    color: #fff;
  }

  ${media.sm`
    ${StyledHeading} {
      font-size: 50px;
      line-height: 60px;
    }
  `}
`;

const Description = styled.div`
  color: #fff;
`;

const Author = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin: 16px 0 0 0;
`;

const AuthorImage = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  color: #fff;
  display: block;
  font-weight: bold;

  a {
    ${media.md`
      font-size: 22px;
      line-height: 1.4;
    `}
  }
`;

const AuthorRole = styled.div`
  color: #fff;
  display: block;
`;

export {
  Author,
  AuthorContent,
  AuthorImage,
  AuthorName,
  AuthorRole,
  CategoryContainer,
  Content,
  Description,
  Divider,
  Duration,
  HeadingContainer,
  ImageContainer,
  LatestPost,
  Metadata,
  CategoryTitle,
  CategoryTitleContainer,
  SeeMoreLink,
};
