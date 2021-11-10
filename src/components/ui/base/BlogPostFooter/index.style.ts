import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";

const StyledBlogPostFooter = styled.div`
  background: ${(props) => props.theme.accentLighten90Color};
  border-radius: ${(props) => props.theme.borderRadius};

  * {
    font-size: 20px;
    line-height: 28px;
  }

  ${StyledHeading} {
    color: ${(props) => props.theme.titleColor};
    margin: 16px 0 0 0;
    font-weight: 600;
  }
`;

const AuthorImage = styled.img`
  border-radius: 100%;
`;

const AuthorDescription = styled.span`
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

const Description = styled.p`
  margin: 8px 0 16px 0;
  line-height: 32px;
  font-size: 15px;
`;

const CenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  ${media.md`
    margin-top: 0;
  `}
`;

const TextCol = styled(Col)`
  ${media.md`
    padding-right: 64px;
  `}
`;

export {
  StyledBlogPostFooter,
  AuthorDescription,
  Description,
  AuthorImage,
  CenteredCol,
  TextCol,
};
