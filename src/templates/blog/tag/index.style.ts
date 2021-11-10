import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  padding: 0;
  background: ${(props) => props.theme.accentColor};

  ${StyledHeading} {
    color: #fff;
    font-size: 1.5em;
    margin-bottom: 12px;
    margin-top: 16px;
  }

  ${media.sm`
    padding: 32px 0;
    
    ${StyledHeading} {
      font-size: 3em;
    }
  `}
`;

const TagInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
`;

const SubtitleContainer = styled.p`
  font-size: 1em;
  color: #fff;
`;

const DescriptionContainer = styled.p`
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  text-align: center;
`;

const PostContainer = styled.div`
  margin: 96px 0;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = styled.div``;

const PrevContainer = styled(Navigation)`
  text-align: left;
`;

const NextContainer = styled(Navigation)`
  text-align: right;
`;

export {
  TagContainer,
  DescriptionContainer,
  SubtitleContainer,
  PostContainer,
  Pagination,
  PrevContainer,
  NextContainer,
  TagInnerContainer,
};
