import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { MediumComponentContainer } from "styles/global.style";

export interface TabProps {
  active: boolean;
}

const StyledTabsWithImage = styled.section`
  ${MediumComponentContainer} {
    padding: 80px 0;
    text-align: center;
    min-height: 650px;
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      height: 650px;
      left: 0;
      right: 0;
      background: ${(props) => props.theme.accentColor};
    }

    ${media.md`
      padding: 96px 0;
    `}
  }
`;

const TabOuterContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 32px 0;
  list-style: none;
  width: 100%;
  justify-content: center;
  padding: 0;
`;

const TabContainer = styled.li<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? props.theme.accentColor : "#ffffff")};
  background: ${(props) =>
    props.isActive ? "#ffffff" : "rgba(52,73,103,0.2)"};
  border-radius: 14px;
  cursor: pointer;
  font-size: 14px;
  margin: 4px 2%;
  min-width: 40%;
  padding: 4px 16px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.isActive ? "#ffffff" : "rgba(52,73,103,0.3)"};
  }

  ${media.sm`
    min-width: 0%;
    margin: 4px 16px;
    
  `}
`;

const TitleCol = styled(Col)`
  ${StyledTitle} {
    color: #fff;
  }
`;

const DescriptionCol = styled(Col)``;

const Description = styled.p`
  color: #fff;
  margin: 0;
`;

const ImgContainer = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;

export {
  StyledTabsWithImage,
  TabContainer,
  TitleCol,
  DescriptionCol,
  TabOuterContainer,
  Description,
  ImgContainer,
};
