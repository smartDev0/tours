import styled, { ThemedStyledProps } from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import Heading from "components/core/Typography/Heading";
import Button from "components/core/Button";
import { Label } from "components/core/Switch/index.style";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PlanWrapperProps {
  hasBadge?: boolean;
}

const StyledPricing = styled.section`
  background: ${(props) => props.theme.accentLighten90Color};
  padding: 64px 0;
`;

const SwitchCol = styled(Col)`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  ${Label} {
    font-size: 16px;
    line-height: 28px;

    ${media.lg`
    font-size: 22px;
    line-height: 32px;
  `}
  }
`;

const PlanCol = styled(Col)`
  margin-top: 32px;

  ${media.lg`
    margin: 0;
  `}
`;

const Badge = styled.div`
  height: 32px;
  background: ${(props) => props.theme.gradientAccentColor};
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: white;
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  margin-top: 8px;
  font-size: 16px;
  line-height: 28px;

  ${media.lg`
    height: 40px;
    font-size: 22px;
    line-height: 32px;
    justify-content: flex-end;
    background: ${(
      props: ThemedStyledProps<
        Pick<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          "key" | keyof HTMLAttributes<HTMLDivElement>
        >,
        any
      >
    ) => props.theme.invertedGradientAccentColor};
  `}
`;

const PlanWrapper = styled.div<PlanWrapperProps>`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 8px 16px;
  box-shadow: 0 20px 30px 0 rgba(10, 1, 47, 0.12);
  border-radius: ${(props) => props.theme.borderRadius};

  ${media.lg`
    margin-top: 48px;
  `}

  ${(props) =>
    props.hasBadge &&
    `
    border-radius: 0 !important;
    border-bottom-left-radius: ${props.theme.borderRadius} !important;
    border-bottom-right-radius: ${props.theme.borderRadius} !important;
    margin-top: 0 !important;
  `}
`;

const PlanName = styled(Heading)`
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 0;
  color: ${(props) => props.theme.titleColor};
  font-size: 28px;

  ${media.lg`
    font-size: 34px;
  `}
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceInner = styled.div`
  display: flex;
  flex-direction: row;
`;

const PriceSpan = styled.span`
  font-weight: 600;
  font-size: 48px;
  height: 40px;
  color: ${(props) => props.theme.titleColor};
  display: flex;
  align-items: center;
`;

const PriceMode = styled.p`
  margin-top: 4px;
  margin-bottom: 0;
  height: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const CTAButtonContainer = styled.a``;

const CTAButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  line-height: 28px;
  margin: 24px 0;
`;

const MainFeaturesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 4px;
`;

const MainFeaturesElement = styled.li`
  margin: 4px 0;
`;

const FeaturesSeparator = styled.hr`
  margin-top: 16px;
  height: 1px;
  background-color: ${(props) => props.theme.baseLighten75Color};
  border: none;
`;

const DetailsHeading = styled(Heading)`
  font-weight: 600;
  font-size: 12px;
  margin-top: 8px;
  color: ${(props) => props.theme.titleColor};
`;

const DetailsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-left: 4px;
`;

const DetailsElement = styled.li`
  margin: 4px 0;
  color: ${(props) => props.theme.baseColor};

  a {
    color: inherit;
    font-size: inherit;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 28px;

  ${media.lg`
    min-height: 140px;
    font-size: 22px;
    line-height: 32px;
  `}
`;

export {
  StyledPricing,
  SwitchCol,
  PlanCol,
  PlanWrapper,
  PlanName,
  PriceWrapper,
  PriceSpan,
  PriceInner,
  PriceMode,
  CTAButton,
  CTAButtonContainer,
  MainFeaturesList,
  MainFeaturesElement,
  FeaturesSeparator,
  DetailsHeading,
  DetailsList,
  DetailsElement,
  Badge,
  Description,
};
