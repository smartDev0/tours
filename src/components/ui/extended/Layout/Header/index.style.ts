import styled from "styled-components";
import { lighten } from "polished";
import { StyledButton } from "components/core/Button/index.style";
import { media } from "styled-bootstrap-grid";

export const menuHeight = 100;
export const menuHeightMobile = 80;

const StyledHeader = styled.div<{
  withBackground?: boolean;
}>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s ease-in-out;

  background: ${(props) => (!props.withBackground ? "transparent" : "#fff")};
  box-shadow: ${(props) =>
    !props.withBackground ? "none" : "0px 10px 20px 0px rgb(79 35 35 / 8%)"};

  p,
  a {
    font-size: 16px;
    line-height: 28px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  height: ${menuHeightMobile}px;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 16px;

  ${media.lg`
    height: ${menuHeight}px;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  width: 200px;

  a,
  > img {
    display: flex;
    transform: translateX(-0.375rem);
    text-decoration: none;
    font-weight: 600;
    align-items: center;
    margin-right: 1.25rem;
  }

  a {
    padding: 0.5rem 0.375rem;
  }

  > img {
    margin: 1rem 1.25rem 0.75rem 0;
    transform: translateX(-0.375rem);
  }

  ${media.lg`
    width: 240px;
  `}
`;

const MenuContainer = styled.div`
  display: none;
  flex-grow: 1;
  left: 100%;
  top: 0;
  justify-content: space-between;
  align-items: center;
  transform: translateX(0);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  ${media.lg`
    display: flex;
  `}
`;

const MenuElement = styled.li`
  position: relative;
  margin: auto;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const MenuLeft = styled(Menu)``;

const MenuLeftElement = styled(MenuElement)``;

const MenuRight = styled(Menu)``;

const MenuRightElement = styled(MenuElement)`
  &:last-child {
    margin-left: 8px;
  }
`;

const MenuButton = styled.button<{ alternativeColors?: boolean }>`
  background: transparent;
  color: ${(props) =>
    !props.alternativeColors ? props.theme.titleColor : "#fff"};
  display: flex;
  padding: 4px 16px;
  font-weight: normal;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 16px;
  border: 2px solid transparent;
  align-items: center;
  text-decoration: none;

  &:hover {
    background: ${(props) => lighten(0.38, props.theme.accentColor)};
    color: ${(props) => props.theme.accentColor};
    text-decoration: none;

    svg {
      stroke: ${(props) => props.theme.accentColor};
    }
  }

  svg {
    margin-left: 4px;
    stroke: ${(props) =>
      !props.alternativeColors ? props.theme.titleColor : "#fff"};
  }
`;

const Dropdown = styled.div<{ isActive: boolean }>`
  display: flex;
  left: 50%;
  padding-top: 0.75rem;
  position: absolute;
  top: ${(props) => (props.isActive ? "100%" : "115%")};
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  z-index: ${(props) => (props.isActive ? 100 : 1)};
  -webkit-transform: translateX(calc(-50% + 0px));
  -ms-transform: translateX(calc(-50% + 0px));
  transform: translateX(calc(-50% + 0px));
  width: 32.5rem;
  transition: all 0.3s ease-in-out;

  &:after {
    position: absolute;
    top: 0.25rem;
    left: 50%;
    width: 1rem;
    height: 1rem;
    content: " ";
    transform: translateX(calc(-50% - 0px)) rotate(45deg);
    border-top-left-radius: 4px;
    background: #ffffff;
    will-change: transform;
    transition-property: transform;
  }
`;

const DropdownInnerContainer = styled.ul`
  width: 100%;
  background: #ffffff;
  padding: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(46 41 51 / 8%), 0 8px 24px rgb(71 63 79 / 16%);
`;

const DropdownInnerContent = styled.div`
  flex-basis: 50%;
  margin: 0 0 24px 0;
`;

const DropdownContent = styled.div<{ withPaddingTop: boolean }>`
  display: flex;
  padding-top: ${(props) => (props.withPaddingTop ? "1.75em" : "0")};
  padding-left: 3.5rem;
  padding-bottom: 1.5rem;
  flex-wrap: wrap;

  ${DropdownInnerContent} {
    &:nth-last-child(2) {
      margin-bottom: 0;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;

const DropdownContentList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;

  a {
    flex: 1;
  }
`;

const DropdownSubtitle = styled.h3`
  letter-spacing: 0.1em;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: ${(props) => props.theme.titleColor};
`;

const DropdownList = styled.div``;

const DropdownListElement = styled.div`
  font-size: 16px;

  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.baseColor};

    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }

  svg {
    &:first-child {
      margin-right: 4px;
    }

    &:last-child {
      margin-left: 4px;
    }
  }
`;

const DropdownHeader = styled.div`
  padding: 12px;
`;

const DropdownFooter = styled.div`
  background: ${(props) => lighten(0.4, props.theme.accentColor)};
  padding: 12px;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const MainIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const MainLink = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1em;
  transition: all 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: row;

  &:hover {
    background: ${(props) => lighten(0.37, props.theme.accentColor)};
  }

  svg {
    height: 1.5em;
  }
`;

const MainTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.titleColor};

  svg {
    margin-left: 4px;
  }
`;

const MainSubtitle = styled.p`
  margin: 0;
  line-height: 1.4em;
`;

const GetStartedButton = styled(StyledButton)`
  padding: 4px 16px;
  background: ${(props) => props.theme.yellowColor};
  border: 2px solid ${(props) => props.theme.yellowColor};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 28px;

  &:hover {
    background: ${(props) => props.theme.yellowDarkenColor};
    border: 2px solid ${(props) => props.theme.yellowDarkenColor};
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const MobileCtaContainer = styled.div`
  display: flex;
  padding: 19px 0;

  ${media.lg`
    display: none;
  `}
`;

export {
  StyledHeader,
  Navigation,
  LogoContainer,
  MenuLeft,
  MenuButton,
  MenuContainer,
  MenuRight,
  MenuLeftElement,
  MenuRightElement,
  Dropdown,
  MainContent,
  MainIcon,
  MainLink,
  DropdownInnerContainer,
  DropdownInnerContent,
  DropdownContent,
  DropdownContentList,
  DropdownSubtitle,
  DropdownList,
  DropdownListElement,
  DropdownHeader,
  DropdownFooter,
  MainTitle,
  MainSubtitle,
  MobileCtaContainer,
  GetStartedButton,
};
