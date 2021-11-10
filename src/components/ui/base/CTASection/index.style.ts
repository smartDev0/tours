import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { Col, media } from "styled-bootstrap-grid";
import { StyledButton } from "components/core/Button/index.style";

const StyledCTASection = styled.section`
  ${StyledTitle} {
    color: #fff;
  }
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientAccentColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
  padding: 32px 0;
  position: relative;
`;

const ImageWrapper = styled.div`
  ${media.md`
    display: block;
  `}
  display: none;
  position: absolute;
  overflow: hidden;
  border-radius: 50%;
  top: -50px;
  right: -100px;
  width: 400px;
  height: 400px;
`;

const TextCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.md`
    min-height: 236px;
  `}

  ${StyledButton} {
    margin-top: 16px;
  }
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export {
  StyledCTASection,
  OuterContainer,
  WrapperContainer,
  ImageWrapper,
  TextCol,
  ImgContainer,
};
