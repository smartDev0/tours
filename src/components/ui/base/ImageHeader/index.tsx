import React from "react";
import { HeaderContainer, PageContainer } from "styles/global.style";
import {
  CircleBackground,
  DescriptionCol,
  ImageCol,
  StyledImageHeader,
} from "./index.style";
import { Row } from "styled-bootstrap-grid";
import { Position } from "app-types/position";
import Heading from "components/core/Typography/Heading";
import StaticImg from "components/core/StaticImg";
import Fade from "components/core/Animation/extended/Fade";
import Breadcrumbs, { BreadCrumb } from "components/core/Breadcrumbs";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import { Justify } from "styled-bootstrap-grid/dist/components/Row/types";
import Icon, { IconType } from "components/core/Icon";
import News from "components/ui/base/News";
import { CTAColor } from "app-types/color";
import Button from "components/core/Button";
import SafeLink from "components/core/SafeLink";

export interface ImageHeaderProps {
  title: string;
  description: string;
  news?: {
    text: string;
    relativePath?: string;
  };
  ctaButton?: {
    show: boolean;
    text: string;
    path?: string;
    externalLink?: string;
    icon?: IconType;
    color?: CTAColor;
  };
  cta?: {
    show: boolean;
    color?: CTAColor;
    justifyValidation?: Justify;
    hideValidationOnXl?: boolean;
  };
  breadcrumbs?: BreadCrumb[];
  image: {
    relativePath: string;
    alt: string;
    position?: Position;
    maxWidth?: number;
  };
  circleBackground?: {
    show: boolean;
    backgroundColor?: string;
  };
}

const ImageHeader = (props: ImageHeaderProps) => {
  return (
    <StyledImageHeader>
      <HeaderContainer>
        <PageContainer>
          <Row>
            <DescriptionCol
              lg={5}
              order={2}
              lgOrder={
                props.image.position && props.image.position === "left" ? 2 : 1
              }
            >
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
                <Heading level={1}>{props.title}</Heading>
              </Fade>
              <Fade direction={"up"} delay={500}>
                <p>{props.description}</p>
              </Fade>
              {props.cta?.show && (
                <Fade direction={"up"} delay={1000}>
                  <RegisterCTA
                    color={props.cta?.color}
                    justifyValidation={props.cta?.justifyValidation}
                    hideValidationOnXl={props.cta?.hideValidationOnXl}
                  />
                </Fade>
              )}
              {props.ctaButton?.show &&
                (props.ctaButton?.path || props.ctaButton?.externalLink) && (
                  <Fade direction={"up"} delay={1000}>
                    {props.ctaButton?.path && (
                      <SafeLink to={props.ctaButton.path}>
                        <Button
                          ctaColor={
                            props.ctaButton.color
                              ? props.ctaButton.color
                              : CTAColor.Yellow
                          }
                        >
                          {props.ctaButton.text}
                          {props.ctaButton.icon && (
                            <Icon type={props.ctaButton.icon} size={16} />
                          )}
                        </Button>
                      </SafeLink>
                    )}
                    {props.ctaButton?.externalLink && (
                      <a
                        href={props.ctaButton.externalLink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          ctaColor={
                            props.ctaButton.color
                              ? props.ctaButton.color
                              : CTAColor.Yellow
                          }
                        >
                          {props.ctaButton.text}
                          {props.ctaButton.icon && (
                            <Icon type={props.ctaButton.icon} size={16} />
                          )}
                        </Button>
                      </a>
                    )}
                  </Fade>
                )}
            </DescriptionCol>
            <ImageCol
              lg={7}
              order={1}
              lgOrder={
                props.image.position && props.image.position === "left" ? 1 : 2
              }
            >
              <Fade direction={"up"}>
                {props.circleBackground?.show && (
                  <CircleBackground
                    background={props.circleBackground?.backgroundColor}
                  />
                )}
                <StaticImg
                  alt={props.image.alt}
                  src={props.image.relativePath}
                  maxWidth={props.image.maxWidth}
                />
              </Fade>
            </ImageCol>
          </Row>
        </PageContainer>
      </HeaderContainer>
    </StyledImageHeader>
  );
};

export default ImageHeader;
