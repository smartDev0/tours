import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import SafeLink from "components/core/SafeLink";
import StaticSvg from "components/core/StaticSvg";

export const menuHeight = 100;
export const menuHeightMobile = 80;

const StyledHeader = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
  background: ${(props) => props.theme.accentColor};
`;

const Navigation = styled.nav`
  display: flex;
  height: ${menuHeightMobile}px;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 16px;
  align-items: center;

  ${media.md`
    height: ${menuHeight}px;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  width: 200px;

  ${media.md`
    width: 240px;
  `}
`;

const AccSafeLink = styled(SafeLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
`;

const AccStaticSvg = styled(StaticSvg)`
  opacity: 0.5;
  transition: all 200ms;

  &:hover {
    opacity: 0.8;
  }
`;

const AccHomeStaticSvg = styled(AccStaticSvg)`
  display: none;
`;

const AccBlogStaticSvg = styled(AccStaticSvg)``;

const MainSafeLink = styled(SafeLink)`
  display: flex;
  text-decoration: none;
  align-items: center;

  &:hover {
    + ${AccSafeLink} {
      ${AccHomeStaticSvg} {
        display: flex !important;
        opacity: 0.8;
      }

      ${AccBlogStaticSvg} {
        display: none !important;
      }
    }
  }
`;

const Tagline = styled.div`
  color: #fff;
  font-size: 14px;
  max-width: 38%;
  line-height: 1.5em;
  text-align: right;
  display: none;

  a {
    font-size: 14px;
    color: #fff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  ${media.sm`
    display: block;
  `};
`;

export {
  StyledHeader,
  Navigation,
  LogoContainer,
  Tagline,
  MainSafeLink,
  AccSafeLink,
  AccHomeStaticSvg,
  AccBlogStaticSvg,
};
