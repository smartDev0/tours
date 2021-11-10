import styled, { css } from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { Col, media } from "styled-bootstrap-grid";
import { MediumComponentContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";

export interface StyledFeaturedGridProps {
  centered?: boolean;
  centeredTitle?: boolean;
  alternativeColors?: boolean;
}

export interface ImgContainerProps {
  mediumImage?: boolean;
  bigImage?: boolean;
}

const FeatureGridTitle = styled(Heading)``;

const FeatureGridDescription = styled.p``;

const FeatureCol = styled(Col)`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

const FeatureColInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  h3 {
    font-size: 22px;
  }
  p {
    margin: 0.5em 0;
    font-size: 18px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  padding: 4px 0;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-left: 2px;
    transition: all 0.3s ease-in-out;
    stroke: ${(props) => props.theme.accentColor};

    width: 16px;
    height: 16px;

    ${media.md`
      width: 16px;
      height: 16px;
    `}

    ${media.lg`
      width: 18px;
      height: 18px;
    `}
  }
`;

const ImgOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div<ImgContainerProps>`
  width: 50px;
  height: 50px;

  ${(props) =>
    props.mediumImage &&
    css`
      width: 100px;
      height: auto;
      display: flex;
    `}

  ${(props) =>
    props.bigImage &&
    css`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

const StyledFeatureGrid = styled.section<StyledFeaturedGridProps>`
  ${StyledHeading} {
    font-weight: 600;
    line-height: 1.2;
    color: ${(props) => props.theme.titleColor};
    margin-bottom: 0.3em;
    margin-top: 0.75em;
  }

  ${(props) =>
    props.centeredTitle &&
    css`
      ${FeatureGridTitle}, ${FeatureGridDescription} {
        text-align: center;
      }
    `}

  ${(props) =>
    props.alternativeColors &&
    css`
      ${FeatureGridTitle}, ${FeatureGridDescription} {
        text-align: center;
        margin-top: 0;
      }

      ${FeatureColInner} {
        background: #fff;
        padding: 16px 24px;
        justify-content: space-between;
      }

      ${MediumComponentContainer} {
        background: ${props.theme.baseLighten95Color};
        padding: 80px 0;

        ${media.md`
          padding: 96px 0;
        `}
      }
    `}

  ${(props) =>
    props.centered &&
    css`
      ${StyledHeading}, ${FeatureGridTitle}, ${FeatureGridDescription},  p {
        text-align: center;
      }

      ${FeatureCol} {
        display: flex;
        align-items: center;
      }

      ${FeatureColInner} {
        display: flex;
        align-items: center;
      }

      ${Feature} {
        justify-content: center;
      }
    `}
`;

const ButtonCol = styled(Col)`
  margin-top: 48px;
`;

export {
  StyledFeatureGrid,
  FeatureList,
  Feature,
  FeatureCol,
  ButtonCol,
  FeatureColInner,
  ImgContainer,
  ImgOuterContainer,
  FeatureGridTitle,
  FeatureGridDescription,
};
