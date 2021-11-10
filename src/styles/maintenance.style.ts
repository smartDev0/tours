import styled from "styled-components";
import { PageContainer } from "styles/global.style";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { media } from "styled-bootstrap-grid";

const Container = styled.div`
  background: #fff;

  ${PageContainer} {
    display: flex;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: left;
  width: 200px;
`;

const HeadingContainer = styled.div`
  z-index: 5;
  padding-top: 64px;
  max-width: 700px;

  ${StyledHeading} {
    color: ${(props) => props.theme.titleColor};
  }

  a {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    color: ${(props) => props.theme.baseColor};
    text-decoration: underline;

    svg {
      margin-left: 8px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  p {
    color: ${(props) => props.theme.baseColor};
  }

  ${media.sm`
    padding-top: 128px;
  `}
`;

export { Container, LogoContainer, HeadingContainer };
