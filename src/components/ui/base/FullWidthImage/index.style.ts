import styled from "styled-components";
import { Col, Container, media } from "styled-bootstrap-grid";
import { StyledRegisterCTA } from "components/ui/extended/RegisterCTA/index.style";

export interface FullWidthImageContainerProps {
  maxWidth?: number;
}

export interface DescriptionProps {
  maxWidth?: number;
}

const StyledFullWidthImage = styled.section`
  text-align: center;
`;

const Description = styled.p<DescriptionProps>`
  margin: 0;

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

const FullWidthImageContainer = styled(Container)<FullWidthImageContainerProps>`
  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}

  ${StyledRegisterCTA} {
    margin-top: 32px;
  }
`;

const FullWidthImageCenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullWidthImageCol = styled(FullWidthImageCenteredCol)`
  flex-direction: column;
  margin-top: 2em;
`;

const ImageContainer = styled.div`
  margin-top: 2em;
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;

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

export {
  StyledFullWidthImage,
  Description,
  FullWidthImageContainer,
  FullWidthImageCol,
  FullWidthImageCenteredCol,
  ImageContainer,
  CTA,
};
