import styled, { css } from "styled-components";
import { media } from "styled-bootstrap-grid";
import { menuHeightMobile } from "components/ui/extended/Layout/Header/index.style";
import { StyledInput } from "components/core/Input/index.style";

const MenuToggle = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex: auto;
  position: relative;

  p,
  a {
    font-size: 16px;
    line-height: 28px;
  }

  ${(props) =>
    props.isMenuOpen
      ? css`
    span {
      transform: translate(0px, 0px) rotate(90deg);
    }

    ${MenuLineTop} {
      width: 26px !important;
      transform: translate(0px, 9px) rotate(-45deg);
    }

    ${MenuLineCenter} {
      visibility: hidden;
      width: 1px;
      height: 1px;
    }

    ${MenuLineBottom} {
      width: 26px !important;
      transform: translate(0px, -9px) rotate(45deg);
    }
  }
  `
      : ""}

  ${media.lg`
    display: none;
  `}
`;

const MenuLine = styled.span<{ alternativeColors?: boolean }>`
  position: absolute;
  background: ${(props) =>
    !props.alternativeColors ? props.theme.titleColor : "#fff"};
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;

const MenuLineTop = styled(MenuLine)`
  position: absolute;
  width: 20px;
  height: 2px;
  margin: -3px 0 0 -10px;
  right: 0;
  top: calc(50% - 8px);
`;

const MenuLineCenter = styled(MenuLine)`
  width: 12px;
  height: 2px;
  margin: -1px 0 0 -10px;
  right: 0;
  top: calc(50% - 1px);
`;

const MenuLineBottom = styled(MenuLine)`
  width: 20px;
  height: 2px;
  margin: 2px 0 0 -10px;
  right: 0;
  top: calc(50% + 5px);
`;

const MenuContainerMobile = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  overflow: auto;
  height: calc(100% - ${menuHeightMobile}px);
  position: fixed;
  background: #fff;
  top: ${menuHeightMobile - 1}px;
  left: 0;
  width: 100%;
  transform: translateX(${(props) => (props.isMenuOpen ? "0" : "100%")});
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${media.lg`
    display: none;
  `}
`;

const MenuInnerContainerMobile = styled.div``;

const CTAContainerMobile = styled.div`
  margin-top: 120px;
  margin-bottom: 16px;
  background: #fff;

  ${StyledInput} {
    margin-bottom: 8px;
  }
`;

const LoginText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;

  a {
    margin-left: 4px;
  }
`;

const MenuButtonMobile = styled.div``;

const MenuButtonMobileTitle = styled.h5<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  color: ${(props) => props.theme.titleColor};
  font-weight: 500;
  margin: 0;

  ${(props) =>
    props.isActive
      ? css`
          font-weight: 600;

          svg {
            transform: rotate(90deg);
          }
        `
      : ""}
`;

const DropdownMobile = styled.div<{ isActive: boolean; height: number }>`
  display: flex;

  height: ${(props) => (props.isActive ? `${props.height}px` : "0")};
  transition: height 250ms ease 0s;
  overflow: hidden;
`;

const DropdownMobileSectionTitle = styled.span`
  display: block;
  letter-spacing: 0.1em;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: bold;
  color: ${(props) => props.theme.titleColor};
`;

const DropdownMobileSection = styled.div`
  background: #f2faff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 16px;
`;

const DropdownMobileInnerContainer = styled.div`
  padding: 0 4px;
  width: 100%;
`;

const DropdownMobileContent = styled.div`
  width: 100%;
`;

const DropdownMobileInnerContent = styled.div`
  width: 100%;
`;

const DropdownMobileList = styled.div`
  width: 100%;
`;

const DropdownMobileListElement = styled.div`
  padding: 8px 0;

  a {
    display: block;
    color: ${(props) => props.theme.baseColor};
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export {
  MenuToggle,
  MenuLineTop,
  MenuLineCenter,
  MenuLineBottom,
  MenuContainerMobile,
  MenuButtonMobileTitle,
  MenuInnerContainerMobile,
  CTAContainerMobile,
  MenuButtonMobile,
  DropdownMobile,
  DropdownMobileSection,
  DropdownMobileInnerContainer,
  DropdownMobileContent,
  DropdownMobileInnerContent,
  DropdownMobileList,
  DropdownMobileListElement,
  DropdownMobileSectionTitle,
  LoginText,
};
