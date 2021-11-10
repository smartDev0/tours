import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledSubtitle } from "components/core/Typography/Subtitle/index.style";
import { StyledAnimation } from "components/core/Animation/base/index.style";
import { Position } from "app-types/position";

export interface TabProps {
  active: boolean;
}

const StyledHorizontalStoriesMenu = styled.section``;

const StoriesCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${StyledAnimation} {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TabsCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const Tabs = styled.div<{ storiesPosition?: Position }>`
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;

  ${StyledSubtitle} {
    margin-top: 0;
  }

  ${media.md`
    margin-top: 0;
    padding-left: ${(props: any) =>
      !props.storiesPosition ||
      (props.storiesPosition && props.storiesPosition === "left")
        ? "80px"
        : "0"};
    padding-right: ${(props: any) =>
      props.storiesPosition && props.storiesPosition === "right"
        ? "80px"
        : "0"};
  `}
`;

const TabsNav = styled.ul`
  text-align: center;
  list-style: none;
  margin-bottom: 24px;
  padding: 0;

  li {
    a {
      color: #f1e8e8;
      font-weight: 500;
      cursor: pointer;
      padding: 11px 27px;
      border-radius: 30px;
      display: inline-block;
      margin-bottom: 20px;

      &:hover {
        background: #fff;
      }
    }

    &.active {
      a {
        background: #fff;
      }
    }
  }
`;

const Tab = styled.li<TabProps>`
  padding: 12px;
  border: 2px solid #f2f0f5;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: left;
  margin-right: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
      border-color: ${props.theme.accentColor};
      svg{
        stroke: ${props.theme.accentColor} !important;
      }
      ${StyledHeading} {
        color: ${props.theme.accentColor} !important;
      }
    `}
`;

const TabHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    flex-shrink: 0;
    stroke: ${(props) => props.theme.titleColor};
  }

  ${StyledHeading} {
    margin: 0 5px;
    color: ${(props) => props.theme.titleColor};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    font-size: 14px;
    line-height: 1.2;

    ${media.lg`
      font-size: 18px;
    `}
  }
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    font-size: 22px;
  }

  svg {
    margin-left: 2px;
    transition: all 0.3s ease-in-out;
    stroke: ${(props) => props.theme.accentColor};
  }
`;

const TabDescription = styled.p`
  position: relative;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  margin: 0.5em 0 0 25px;
`;

export {
  StyledHorizontalStoriesMenu,
  StoriesCol,
  TabsCol,
  TabsNav,
  Tab,
  TabHeading,
  TabDescription,
  CTA,
  Tabs,
};
