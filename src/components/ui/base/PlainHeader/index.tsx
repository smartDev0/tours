import React from "react";
import { Row } from "styled-bootstrap-grid";
import { HeaderContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import {
  CTAButton,
  Description,
  ImageContainer,
  PlainHeaderCenteredCol,
  PlainHeaderCol,
  PlainHeaderContainer,
  StyledPlainHeader,
} from "./index.style";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import Fade from "components/core/Animation/extended/Fade";
import StaticImg from "components/core/StaticImg";
import { Justify } from "styled-bootstrap-grid/dist/components/Row/types";
import { IconType } from "components/core/Icon";
import scrollTo from "gatsby-plugin-smoothscroll";
import Breadcrumbs, { BreadCrumb } from "components/core/Breadcrumbs";
import News from "components/ui/base/News";
import { CTAColor } from "app-types/color";
import SafeLink from "components/core/SafeLink";

interface PlainHeaderProps {
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
    color?: CTAColor;
    id?: string;
  };
  ctaButton?: {
    show: boolean;
    text: string;
    icon?: IconType;
    path: string;
    color?: CTAColor;
  };
  image?: {
    relativePath: string;
    alt: string;
  };
}

const PlainHeader = (props: PlainHeaderProps) => {
  return (
    <StyledPlainHeader>
      <HeaderContainer>
        <PageContainer>
          <PlainHeaderContainer maxWidth={props.maxWidth}>
            <Row>
              <PlainHeaderCol>
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
              </PlainHeaderCol>
            </Row>
            <Row alignItems={"center"}>
              <PlainHeaderCenteredCol>
                <Fade direction={"up"}>
                  <Description
                    dangerouslySetInnerHTML={{ __html: props.description }}
                    maxWidth={props.descriptionMaxWidth}
                  />
                </Fade>
              </PlainHeaderCenteredCol>
            </Row>
            {props.ctaButton?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderCenteredCol lg={6}>
                    {props.ctaButton.path.charAt(0) === "#" ? (
                      <CTAButton
                        icon={{ type: props.ctaButton.icon }}
                        ctaColor={
                          props.ctaButton.color
                            ? props.ctaButton.color
                            : CTAColor.Yellow
                        }
                        onClick={() =>
                          props.ctaButton && scrollTo(props.ctaButton.path)
                        }
                      >
                        {props.ctaButton.text}
                      </CTAButton>
                    ) : (
                      <SafeLink to={props.ctaButton.path}>
                        <CTAButton
                          icon={{ type: props.ctaButton.icon }}
                          ctaColor={
                            props.ctaButton.color
                              ? props.ctaButton.color
                              : CTAColor.Yellow
                          }
                        >
                          {props.ctaButton.text}
                        </CTAButton>
                      </SafeLink>
                    )}
                  </PlainHeaderCenteredCol>
                </Row>
              </Fade>
            )}
            {props.ctaRegister?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderCenteredCol lg={6}>
                    <RegisterCTA
                      justifyValidation={props.ctaRegister?.justifyValidation}
                      color={props.ctaRegister?.color}
                      id={props.ctaRegister?.id}
                    />
                  </PlainHeaderCenteredCol>
                </Row>
              </Fade>
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
          </PlainHeaderContainer>
        </PageContainer>
      </HeaderContainer>
    </StyledPlainHeader>
  );
};

export default PlainHeader;
