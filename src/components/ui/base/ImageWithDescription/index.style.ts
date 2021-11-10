import styled from "styled-components";
import { Position } from "app-types/position";
import { Col, media } from "styled-bootstrap-grid";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { StyledTitle } from "components/core/Typography/Title/index.style";

const StyledImageWithDescription = styled.section``;

const Description = styled.div<{ imagePosition: Position }>`
  margin-top: 32px;

  ${StyledTitle} {
    margin-top: 0;
  }

  ${media.sm`
    margin-top: 64px;
  `}

  ${(props) => media.lg`
    margin-top: 0;
    padding-left: ${props.imagePosition === "left" ? "80px" : "0"};
    padding-right: ${props.imagePosition === "right" ? "80px" : "0"};
  `}
`;

const ImageContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (!props.fullWidth ? "#f2faff" : "transparent")};
  border-radius: ${(props) => (!props.fullWidth ? "50%" : "0")};
  text-align: center;
  overflow: ${(props) => (!props.fullWidth ? "hidden" : "unset")};

  ${media.sm`
    margin: 0 auto;
  `}

  ${media.xs`
    margin: 0 auto;

    img {
      width: 100%;
    }
  `}
`;

const ImageCol = styled(Col)`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 1;

  ${media.lg`
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  `}
`;

const DescriptionCol = styled(Col)`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;

  ${media.lg`
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  `}
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${(props) => props.theme.accentColor};
    flex-flow: row nowrap;
    position: relative;
    text-decoration: none !important;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      height: 2px;
      margin: 2px 0 0;
      left: 0;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      box-sizing: border-box;
      background-color: ${(props) => props.theme.accentColor};
    }

    > svg {
      margin-left: 2px;
      transition: all 0.3s ease-in-out;
      stroke: ${(props) => props.theme.accentColor};

      width: 16px;
      height: 16px;

      ${media.md`
        width: 22px;
        height: 22px;
      `}

      ${media.lg`
        width: 26px;
        height: 26px;
      `}
    }

    &:hover {
      cursor: pointer;

      &::before,
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;

  svg {
    margin-right: 16px;
  }

  ${StyledHeading} {
    font-weight: 600;
    color: ${(props) => props.theme.titleColor};
    margin: 0;
  }

  p {
    margin-top: 8px;
    margin-bottom: 0;
  }
`;

const ElementTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export {
  StyledImageWithDescription,
  Description,
  ImageContainer,
  ImageCol,
  DescriptionCol,
  CTA,
  ElementContainer,
  ElementTextContainer,
};
