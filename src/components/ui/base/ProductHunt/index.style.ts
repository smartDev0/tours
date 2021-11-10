import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledTitle } from "components/core/Typography/Title/index.style";

const StyledProductHunt = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  background: #344967;
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const TitleCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${StyledTitle} {
    color: #fff;
    margin: 0 0 32px 0;
    text-align: center;
    font-size: 28px;
  }

  ${media.md`
    flex-direction: row;
    
    ${StyledTitle} {
      margin: 0;
    }
  `}
`;

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  transition: transform 0.3s ease-in-out;
  margin-bottom: 32px;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.02);
    }
  }

  ${media.md`
    margin: 0;
  `}
`;

const LogoContainer = styled.div`
  margin: 32px 0 8px 0;
  display: flex;

  ${media.md`
      margin: 16px 32px 16px 0;
  `}
`;

export {
  StyledProductHunt,
  OuterContainer,
  WrapperContainer,
  TitleCol,
  ButtonContainer,
  CenteredCol,
  LogoContainer,
};
