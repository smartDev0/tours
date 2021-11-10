import React, { ReactChild } from "react";
import { Row } from "styled-bootstrap-grid";
import { LargeComponentContainer, PageContainer } from "styles/global.style";
import {
  CTA,
  Description,
  FullWidthImageCenteredCol,
  FullWidthImageCol,
  FullWidthImageContainer,
  ImageContainer,
  StyledFullWidthImage,
} from "./index.style";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import { Title } from "components/core/Typography/Title";
import SafeLink from "components/core/SafeLink";
import Icon from "components/core/Icon";
import { TFunctionResult } from "i18next";

interface FullWidthImageProps {
  title: string;
  description?: string | TFunctionResult | ReactChild | ReactChild[];
  maxWidth?: number;
  descriptionMaxWidth?: number;
  id?: string;
  image?: {
    relativePath: string;
    alt: string;
  };
  cta?: {
    link: string;
    text: string;
  };
}

const FullWidthImage = (props: FullWidthImageProps) => {
  return (
    <StyledFullWidthImage id={props.id}>
      <LargeComponentContainer>
        <PageContainer>
          <FullWidthImageContainer maxWidth={props.maxWidth}>
            <Row>
              <FullWidthImageCol>
                <Fade direction={"up"}>
                  <Title>{props.title}</Title>
                </Fade>
              </FullWidthImageCol>
            </Row>
            {props.description && (
              <Row alignItems={"center"}>
                <FullWidthImageCenteredCol>
                  <Fade direction={"up"}>
                    <Description maxWidth={props.descriptionMaxWidth}>
                      {props.description}
                    </Description>
                  </Fade>
                </FullWidthImageCenteredCol>
              </Row>
            )}
            {props.cta && (
              <Row alignItems={"center"}>
                <FullWidthImageCenteredCol>
                  <Fade direction={"up"}>
                    <CTA>
                      <SafeLink to={props.cta.link}>
                        {props.cta.text}
                        <Icon type={"arrow-right"} size={18} />
                      </SafeLink>
                    </CTA>
                  </Fade>
                </FullWidthImageCenteredCol>
              </Row>
            )}

            {props.image && (
              <Fade direction={"up"} delay={700}>
                <ImageContainer>
                  <StaticImg
                    alt={props.image.alt}
                    src={props.image.relativePath}
                  />
                </ImageContainer>
              </Fade>
            )}
          </FullWidthImageContainer>
        </PageContainer>
      </LargeComponentContainer>
    </StyledFullWidthImage>
  );
};

export default FullWidthImage;
