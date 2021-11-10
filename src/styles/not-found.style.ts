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
    max-width: 600px;
  }

  ${media.sm`
    padding-top: 128px;
  `}
`;

const CrackContainer = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4;

  svg {
    fill: rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 155vh;
    height: 64.51613vw;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
  }
`;

const ArrowContainer = styled.div`
  margin-top: 30%;
  margin-left: 10%;
  width: 200px;

  ${media.sm`
    margin-top: 0%;
    margin-left: 50%;
    width: 300px;
  `}
`;

export {
  Container,
  ArrowContainer,
  LogoContainer,
  HeadingContainer,
  CrackContainer,
};
