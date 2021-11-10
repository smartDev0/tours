import styled, { createGlobalStyle } from "styled-components";

type Theme = { [property: string]: any };

const media = {
  sm: "@media (min-width: 576px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 992px)",
  xl: "@media (min-width: 1200px)",
  xxl: "@media (min-width: 1540px)",
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    font-family: ${(props) => props.theme.fontFamily};
    line-height: 28px;
    color: ${(props) => props.theme.baseColor};
    margin: 0;
  }

  a,
  button,
  input,
  textarea,
  button,
  select,
  svg {
    transition: all 0.3s ease-in-out;
  }
  
  a {
      color: ${(props) => props.theme.accentColor};
      
      &:hover {
          text-decoration: underline;
      }
  }

  button {
    cursor: pointer;
    outline: 0;
  }

  input,
  textarea,
  select, .form-control {
    width: 100%;
    padding: 10px 12px;
    outline: 0;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 600;
    line-height: 1;
    color: ${(props) => props.theme.baseColor};
  }

  h1 {
    font-size: 32px;
    margin: 10px 0;
      
    ${media.lg} {
      font-size: 60px;
      margin: 15px 0;
    }
  }

  h2 {
    font-size: 36px;
    margin: 4px 0;
      
    ${media.lg} {
      font-size: 48px;
      margin: 6px 0;
    }
  }

  h3 {
    font-size: 22px;
    margin: 3px 0;
    line-height: 1.2;

    ${media.lg} {
      font-size: 24px;
      margin: 3px 0;
    }
  }

  h4 {
    font-size: 1.25em;
    line-height: 1.3;
    margin-bottom: 0.8em;
  }

  h5 {
    font-size: 1.125em;
    line-height: 1.3;
    margin-bottom: 0.8888em;
  }

  h6 {
    font-size: 1em;
    line-height: 1.3;
    margin-bottom: 1em;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p, a {
    font-size: 16px;
      
    ${media.md} {
      font-size: 22px;
      line-height: 1.4;
    }
      
    ${media.lg} {
      font-size: 24px;
      line-height: 1.4;
      
      a{
        line-height: 1.8;
      }
    }
  }
  
  p {
    margin: 1em 0;
  }
`;

const FakeLink = styled.span`
  color: ${(props) => props.theme.baseLightColor};
  font-weight: 400;
  line-height: 30px;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const PageContainer = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

const HeaderContainer = styled.div`
  margin: 90px 0 80px 0;

  ${media.md} {
    margin: 120px 0 96px 0;
  }
`;

const LargeComponentContainer = styled.div`
  margin: 120px 0;

  ${media.md} {
    margin: 176px 0;
  }
`;

const MediumComponentContainer = styled.div`
  margin: 104px 0;

  ${media.md} {
    margin: 144px 0;
  }
`;

const SmallComponentContainer = styled.div`
  margin: 40px 0;

  ${media.md} {
    margin: 64px 0;
  }
`;

const UnderlinedLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.theme.accentColor};
  flex-flow: row nowrap;
  position: relative;
  font-size: 18px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    margin: 2px 0 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.accentColor};
  }

  &:hover {
    cursor: pointer;
    text-decoration: none !important;

    &::before,
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;

export {
  GlobalStyle,
  FakeLink,
  PageContainer,
  HeaderContainer,
  LargeComponentContainer,
  MediumComponentContainer,
  SmallComponentContainer,
  UnderlinedLink,
};
