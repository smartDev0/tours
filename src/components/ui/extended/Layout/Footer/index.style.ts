import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledFooter = styled.div`
  margin-bottom: 50px;

  a {
    font-size: 16px;
  }
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  background: ${(props) => props.theme.footerColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const InnerContainer = styled.div`
  padding: 36px 16px;

  ${media.sm`
      padding: 116px 0;
  `}

  a {
    color: ${(props) => props.theme.baseLightColor};
    font-weight: 400;
    line-height: 30px;

    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Widget = styled.div`
  margin-bottom: 40px;
`;

const WidgetTitle = styled.span`
  color: #fff;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const WidgetList = styled.ul`
  padding: 0;
  list-style: none;
`;

const WidgetListElement = styled.li``;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialItem = styled.div`
  display: flex;
  margin-left: 16px;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const LanguageContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Language = styled.li``;

const Copyright = styled.span`
  font-size: 14px;
  margin-top: 16px;
  display: flex;
`;

const AwardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AwardItem = styled.div`
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 16px;
`;

export {
  StyledFooter,
  OuterContainer,
  WrapperContainer,
  InnerContainer,
  Widget,
  WidgetTitle,
  WidgetList,
  WidgetListElement,
  Copyright,
  SocialContainer,
  SocialItem,
  AwardContainer,
  AwardItem,
  LogoContainer,
  LanguageContainer,
  Language,
};
