import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { StyledInput } from "components/core/Input/index.style";
import { StyledButton } from "components/core/Button/index.style";
import InputCTA from "components/ui/base/InputCTA";

const StyledBlogSubscribe = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  background: ${(props) => props.theme.gradientAccentColor};
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const TitleCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${StyledTitle} {
    color: #fff;
    margin: 32px 0 16px 0;
    text-align: center;
    font-size: 28px;
  }

  ${media.sm`
    ${StyledTitle} {
      margin: 0;
    }
  `}
`;

const CenteredCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomInputCTA = styled(InputCTA)`
  margin: 16px 0 32px 0;

  ${media.sm`
    margin: 32px 0;
  `}
`;

export {
  StyledBlogSubscribe,
  OuterContainer,
  WrapperContainer,
  TitleCol,
  CustomInputCTA,
  CenteredCol,
};
