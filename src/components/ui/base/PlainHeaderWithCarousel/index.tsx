import React from "react";
import { Row } from "styled-bootstrap-grid";
import { HeaderContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import {
  Carousel,
  CarouselContainer,
  CarouselList,
  CarouselOption,
  CTAButton,
  Description,
  PlainHeaderWithCarouselCenteredCol,
  PlainHeaderWithCarouselCol,
  PlainHeaderWithCarouselContainer,
  StyledPlainHeaderWithCarousel,
} from "./index.style";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import { Justify } from "styled-bootstrap-grid/dist/components/Row/types";
import { IconType } from "components/core/Icon";
import scrollTo from "gatsby-plugin-smoothscroll";
import Breadcrumbs, { BreadCrumb } from "components/core/Breadcrumbs";
import Loop from "components/core/Loop";
import News from "components/ui/base/News";
import SafeLink from "components/core/SafeLink";

interface PlainHeaderWithCarouselProps {
  title: string;
  description: string;
  breadcrumbs?: BreadCrumb[];
  maxWidth?: number;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
  news?: {
    text: string;
    relativePath: string;
  };
  ctaRegister?: {
    show: boolean;
    justifyValidation?: Justify;
  };
  ctaButton?: {
    show: boolean;
    text: string;
    icon?: IconType;
    path: string;
  };
  images: {
    relativePath: string;
    alt: string;
  }[];
}

const PlainHeaderWithCarousel = (props: PlainHeaderWithCarouselProps) => {
  const imagesToShow = [...props.images, ...props.images];

  return (
    <StyledPlainHeaderWithCarousel>
      <HeaderContainer>
        <PageContainer>
          <PlainHeaderWithCarouselContainer maxWidth={props.maxWidth}>
            <Row>
              <PlainHeaderWithCarouselCol>
                {props.breadcrumbs && (
                  <Fade direction={"up"}>
                    <Breadcrumbs elements={props.breadcrumbs} />
                  </Fade>
                )}

                {props.news && (
                  <Fade direction={"up"}>
                    <News {...props.news} />
                  </Fade>
                )}

                <Fade direction={"up"}>
                  <Heading
                    level={1}
                    weight="bold"
                    dangerouslySetInnerHTML={{ __html: props.title }}
                    maxWidth={props.titleMaxWidth}
                  />
                </Fade>
              </PlainHeaderWithCarouselCol>
            </Row>
            <Row alignItems={"center"}>
              <PlainHeaderWithCarouselCenteredCol>
                <Fade direction={"up"}>
                  <Description
                    dangerouslySetInnerHTML={{ __html: props.description }}
                    maxWidth={props.descriptionMaxWidth}
                  />
                </Fade>
              </PlainHeaderWithCarouselCenteredCol>
            </Row>
            {props.ctaButton?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderWithCarouselCenteredCol lg={6}>
                    {props.ctaButton.path.charAt(0) === "#" ? (
                      <CTAButton
                        icon={{ type: props.ctaButton.icon }}
                        onClick={() =>
                          props.ctaButton && scrollTo(props.ctaButton.path)
                        }
                      >
                        {props.ctaButton.text}
                      </CTAButton>
                    ) : (
                      <SafeLink to={props.ctaButton.path}>
                        <CTAButton icon={{ type: props.ctaButton.icon }}>
                          {props.ctaButton.text}
                        </CTAButton>
                      </SafeLink>
                    )}
                  </PlainHeaderWithCarouselCenteredCol>
                </Row>
              </Fade>
            )}
            {props.ctaRegister?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderWithCarouselCenteredCol lg={6}>
                    <RegisterCTA
                      justifyValidation={props.ctaRegister?.justifyValidation}
                    />
                  </PlainHeaderWithCarouselCenteredCol>
                </Row>
              </Fade>
            )}
          </PlainHeaderWithCarouselContainer>
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
      </HeaderContainer>
    </StyledPlainHeaderWithCarousel>
  );
};

export default PlainHeaderWithCarousel;
