import React from "react";
import { LargeComponentContainer, PageContainer } from "styles/global.style";
import {
  CircleBackground,
  DescriptionCol,
  ImageCol,
  ImageContainer,
  Quote,
  Quotee,
  StyledTestimonialWithImage,
} from "./index.style";
import { Container, Row } from "styled-bootstrap-grid";
import StaticImg from "components/core/StaticImg";
import { Position } from "app-types/position";
import Fade from "components/core/Animation/extended/Fade";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Link } from "gatsby";
import If from "components/core/If";

export interface TestimonialWithImageProps {
  quote: string;
  quotee: string;
  company?: string;
  image: {
    relativePath?: string;
    data?: IGatsbyImageData;
    alt: string;
    position?: Position;
  };
  url?: string;
}

const TestimonialWithImage = (props: TestimonialWithImageProps) => {
  return (
    <StyledTestimonialWithImage>
      <LargeComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <ImageCol
                lg={5}
                order={1}
                lgOrder={
                  props.image.position && props.image.position === "right"
                    ? 2
                    : 1
                }
              >
                <Fade direction={"up"}>
                  <CircleBackground />
                  <ImageContainer>
                    {props.image.relativePath && (
                      <StaticImg
                        alt={props.image.alt}
                        src={props.image.relativePath}
                      />
                    )}
                    {props.image.data && (
                      <GatsbyImage
                        alt={props.image.alt}
                        image={props.image.data}
                      />
                    )}
                  </ImageContainer>
                </Fade>
              </ImageCol>
              <DescriptionCol
                lg={7}
                order={2}
                lgOrder={
                  props.image.position && props.image.position === "right"
                    ? 1
                    : 2
                }
              >
                <Fade direction={"up"}>
                  <Quote level={2}>{props.quote}</Quote>
                </Fade>
                <Fade direction={"up"}>
                  <Quotee level={3}>
                    {props.quotee}

                    <If condition={props.company !== undefined}>
                      {" @ "}
                      {props.url !== undefined && (
                        <Link to={props.url}>{props.company}</Link>
                      )}
                      {props.url === undefined && props.company}
                    </If>
                  </Quotee>
                </Fade>
              </DescriptionCol>
            </Row>
          </Container>
        </PageContainer>
      </LargeComponentContainer>
    </StyledTestimonialWithImage>
  );
};

export default TestimonialWithImage;
