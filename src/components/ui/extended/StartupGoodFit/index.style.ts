import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";

const StyledStartupGoodFit = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.gradientAccentColor};
  padding: 60px 0;
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${StyledHeading} {
    font-size: 40px;
    line-height: 1.2;
    font-weight: 700;
    margin: 0;
  }

  ${StyledHeading}, p {
    color: #fff;
  }
`;

const NumberContainer = styled.div<{ withBorder?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  border-right: ${(props) =>
    !!props.withBorder ? "1px solid #ffffff30" : "0"};

  ${StyledHeading} {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 700;
    margin: 0;
  }

  ${StyledHeading}, p {
    color: #fff;
  }
`;

export {
  StyledStartupGoodFit,
  OuterContainer,
  WrapperContainer,
  HeadingContainer,
  NumberContainer,
};
