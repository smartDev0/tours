import React, { ReactChild } from "react";
import { Row } from "styled-bootstrap-grid";
import { PageContainer, SmallComponentContainer } from "styles/global.style";

import {
  Carousel,
  CarouselContainer,
  CarouselList,
  CarouselOption,
  Description,
  FullWidthCarouselCenteredCol,
  FullWidthCarouselCol,
  FullWidthCarouselContainer,
  StyledFullWidthCarousel,
} from "./index.style";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import Loop from "components/core/Loop";
import { Title } from "components/core/Typography/Title";
import { TFunctionResult } from "i18next";

interface FullWidthCarouselProps {
  title: string;
  description?: string | TFunctionResult | ReactChild | ReactChild[];
  maxWidth?: number;
  descriptionMaxWidth?: number;
  images: {
    relativePath: string;
    alt: string;
  }[];
  cta?: {
    link: string;
    text: string;
  };
}

const FullWidthCarousel = (props: FullWidthCarouselProps) => {
  const imagesToShow = [...props.images, ...props.images];

  return (
    <StyledFullWidthCarousel>
      <SmallComponentContainer>
        <PageContainer>
          <FullWidthCarouselContainer>
            <Row>
              <FullWidthCarouselCol>
                <Fade direction={"up"}>
                  <Title>{props.title}</Title>
                </Fade>
              </FullWidthCarouselCol>
            </Row>
            {props.description && (
              <Row alignItems={"center"}>
                <FullWidthCarouselCenteredCol>
                  <Fade direction={"up"}>
                    <Description maxWidth={props.descriptionMaxWidth}>
                      {props.description}
                    </Description>
                  </Fade>
                </FullWidthCarouselCenteredCol>
              </Row>
            )}
          </FullWidthCarouselContainer>
        </PageContainer>

        <CarouselContainer>
          <Carousel>
            <CarouselList childrenCount={imagesToShow.length}>
              <Loop items={imagesToShow}>
                {(image, idx) => (
                  <CarouselOption childrenCount={imagesToShow.length} key={idx}>
                    <StaticImg alt={image.alt} src={image.relativePath} />
                  </CarouselOption>
                )}
              </Loop>
            </CarouselList>
          </Carousel>
        </CarouselContainer>
      </SmallComponentContainer>
    </StyledFullWidthCarousel>
  );
};

export default FullWidthCarousel;
