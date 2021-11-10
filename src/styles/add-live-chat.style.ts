import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { media } from "styled-bootstrap-grid";
import { PageContainer } from "styles/global.style";

const Container = styled.div`
  background: ${(props) => props.theme.accentColor};
  height: 100%;
  min-height: 100vh;

  ${PageContainer} {
    display: flex;
    flex-direction: column;
  }
`;

const LogoOuterContainer = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 200px;
`;

const HeadingContainer = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  * {
    color: #ffffff;
  }

  ${media.md`
    width: 60%;
  `}
`;

const BoxContainer = styled.div`
  margin-bottom: 16px;
`;

const Box = styled.div`
  background: #ffffff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 40px;
  margin: 16px auto;
  text-align: center;
  width: 100%;

  ${StyledTitle} {
    color: ${(props) => props.theme.accentColor};
    font-weight: normal;
    font-size: 1.5em;
    word-break: break-word;

    b {
      color: ${(props) => props.theme.accentColor};
    }
  }

  ${media.md`
    width: 60%;
  `}
`;

const BoldLink = styled.a`
  font-weight: bold;
`;

export {
  Container,
  LogoOuterContainer,
  LogoContainer,
  BoxContainer,
  HeadingContainer,
  Box,
  BoldLink,
};
