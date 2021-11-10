import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledSuccessStory = styled.div`
  padding: 32px 0;

  ${media.md`
    padding: 32px 32px 32px 0;
  `}
`;

const SuccessStoryTitle = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 8px;

  a {
    font-size: 16px;
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

const SuccessStoryDescription = styled.span`
  display: block;
`;

const CoverContainer = styled.div`
  position: relative;

  &:hover {
    opacity: 0.9;
  }
`;

const HostImageContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 50;
`;

const CTAContainer = styled.div`
  a {
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  StyledSuccessStory,
  SuccessStoryTitle,
  SuccessStoryDescription,
  CoverContainer,
  HostImageContainer,
  CTAContainer,
};
