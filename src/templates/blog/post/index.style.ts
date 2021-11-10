import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledButton } from "components/core/Button/index.style";
import { PageContainer } from "styles/global.style";

const SideCol = styled.div<{ hiddenMdDown?: boolean }>`
  padding-right: 16px;
  padding-left: 16px;
  width: 20%;
  display: ${(props) => (props.hiddenMdDown ? "none" : "block")};

  ${media.md`
    display: block;
  `}
`;

const CenteredCol = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;

  ${media.md`
    width: 60%;
  `}
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 0;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    right: 0;
    background: ${(props) => props.theme.accentColor};
  }

  ${StyledHeading} {
    text-align: center;
    max-width: 1000px;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 12px;
    margin-top: 16px;
  }

  ${media.sm`
    padding: 32px 0;
    min-height: 300px;
    
    &:before {
      height: 300px;
    }
  `}
`;

const CoverContainer = styled.div`
  max-height: 500px;

  ${media.sm`
    overflow: hidden;
    border-radius: ${(props: any) => props.theme.borderRadius};
  `}

  img {
    max-width: 1200px;
    max-height: 500px;
  }
`;

const TitleContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubtitleContainer = styled.p`
  font-size: 1em;
  margin-bottom: 0;
  margin-top: 32px;

  a {
    color: ${(props) => props.theme.baseColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Metadata = styled.div`
  * {
    font-size: 16px;
    opacity: 0.8;
    color: ${(props) => props.theme.baseColor};
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Date = styled.span``;

const PostContentContainer = styled.div`
  margin: 32px 0 96px 0;
`;

const PostContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.titleColor};

    * {
      color: ${(props) => props.theme.titleColor};
    }
  }

  h2 {
    font-size: 48px;
    line-height: 62px;

    * {
      font-size: 48px !important;
      line-height: 62px !important;
    }
  }

  h3 {
    font-size: 38px;
    line-height: 42px;

    * {
      font-size: 38px !important;
      line-height: 42px !important;
    }
  }

  img {
    box-shadow: 0 0 8px 4px rgb(0 0 0 / 4%);
    border-radius: ${(props) => props.theme.borderRadius};
  }

  p,
  li {
    color: #1a222c;

    * {
      color: #1a222c;
    }
  }

  a {
    color: ${(props) => props.theme.accentColor};

    * {
      color: ${(props) => props.theme.accentColor};
    }
  }

  a,
  p,
  li {
    font-size: 20px;
    line-height: 34px;
  }

  p,
  ul {
    margin: 24px 0;
  }

  video,
  table {
    width: 100%;
  }

  figure.is-type-video {
    div.wp-block-embed__wrapper {
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const AuthorImage = styled.div`
  img {
    border-radius: 50%;
  }
`;

const MetadataContent = styled.div`
  margin-top: 0;
  font-size: 16px;
  line-height: 28px;
`;

const MetadataTitle = styled.span`
  display: block;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1.2;
  color: ${(props) => props.theme.titleColor};
  margin-top: 1em;
  margin-bottom: 0.3em;
`;

const ShareButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  vertical-align: top;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 3px;
`;

const TwitterShareButton = styled(ShareButton)<{ blackWhite: boolean }>`
  background-color: rgb(27, 166, 255);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
`;

const FacebookShareButton = styled(ShareButton)<{ blackWhite: boolean }>`
  background-color: rgb(17, 100, 187);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
`;

const LinkedinShareButton = styled(ShareButton)<{ blackWhite: boolean }>`
  background-color: rgb(0, 119, 181);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
`;

const SubscribeForm = styled.form`
  ${StyledButton} {
    margin-top: 4px;
    font-size: 16px;
  } ;
`;

const Tags = styled.div`
  margin: 32px 0;
`;

const TagsTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.titleColor};
`;

const Tag = styled.li`
  margin-right: 16px;

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  * {
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.baseColor};
  }
`;

const TagsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  ${Tag}:last-child {
    margin-right: 0;
  }
`;

const MetadataStickyContainer = styled.div`
  position: sticky;
  top: 24px;
  overflow-y: auto;
  height: 100vh;
`;

const ContentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContentElement = styled.li`
  margin: 0;
  * {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ContentButton = styled.button`
  background: none;
  border: 0;
  text-align: left;
  padding: 4px 0;
  width: 100%;
  color: ${(props) => props.theme.accentColor};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 15px;
  line-height: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  PostContainer,
  PostContentContainer,
  PostContent,
  CoverContainer,
  SubtitleContainer,
  Metadata,
  Divider,
  Date,
  MetadataTitle,
  MetadataContent,
  MetadataStickyContainer,
  AuthorImage,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  SubscribeForm,
  SideCol,
  CenteredCol,
  TitleContainer,
  Tags,
  TagsTitle,
  TagsList,
  Tag,
  ContentsList,
  ContentElement,
  ContentButton,
};
