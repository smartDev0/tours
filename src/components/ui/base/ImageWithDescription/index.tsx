import React from "react";
import {
  CTA,
  Description,
  DescriptionCol,
  ElementContainer,
  ElementTextContainer,
  ImageCol,
  ImageContainer,
  StyledImageWithDescription,
} from "components/ui/base/ImageWithDescription/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { LargeComponentContainer, PageContainer } from "styles/global.style";
import { Title } from "components/core/Typography/Title";
import Icon, { IconType } from "components/core/Icon";
import If from "components/core/If";
import { Position } from "app-types/position";
import StaticImg from "components/core/StaticImg";
import Fade from "components/core/Animation/extended/Fade";
import SafeLink from "components/core/SafeLink";
import Heading from "components/core/Typography/Heading";

interface ImageWithDescriptionElement {
  title: string;
  description: string;
  icon: {
    type: IconType;
    color: string;
    size: number;
  };
}

interface ImageWithDescriptionProps {
  id?: string;
  title: string;
  description?: string;
  elements?: ImageWithDescriptionElement[];
  image: {
    relativePath: string;
    alt: string;
    position: Position;
    fullWidth?: boolean;
  };
  cta?: {
    link: string;
    text: string;
  };
}

const ImageColComponent = (props: ImageWithDescriptionProps) => {
  return (
    <ImageCol lg={6}>
      <ImageContainer fullWidth={props.image.fullWidth}>
        <Fade direction={"down"}>
          <StaticImg alt={props.image.alt} src={props.image.relativePath} />
        </Fade>
      </ImageContainer>
    </ImageCol>
  );
};

const DescriptionColComponent = (props: ImageWithDescriptionProps) => {
  return (
    <DescriptionCol lg={6}>
      <Description imagePosition={props.image.position}>
        <Fade direction={"up"}>
          <Title>{props.title}</Title>
        </Fade>
        {props.description && (
          <Fade direction={"up"}>
            <p>{props.description}</p>
          </Fade>
        )}
        {props.elements && props.elements.length > 0 && (
          <Fade direction={"up"}>
            {props.elements.map((element, i) => {
              return (
                <ElementContainer key={i}>
                  <Icon
                    type={element.icon.type}
                    size={element.icon.size}
                    fill={element.icon.color}
                  />
                  <ElementTextContainer>
                    <Heading level={3}>{element.title}</Heading>
                    <p>{element.description}</p>
                  </ElementTextContainer>
                </ElementContainer>
              );
            })}
          </Fade>
        )}
        {props.cta && (
          <Fade direction={"up"}>
            <CTA>
              <SafeLink to={props.cta.link}>
                {props.cta.text}
                <Icon type={"arrow-right"} size={18} />
              </SafeLink>
            </CTA>
          </Fade>
        )}
      </Description>
    </DescriptionCol>
  );
};

const ImageWithDescription = (props: ImageWithDescriptionProps) => {
  return (
    <StyledImageWithDescription id={props.id}>
      <LargeComponentContainer>
        <PageContainer>
          <Container>
            <Row justifyContent={"center"} alignItems={"center"}>
              <If condition={props.image.position === "right"}>
                <DescriptionColComponent {...props} />
                <ImageColComponent {...props} />
              </If>
              <If condition={props.image.position === "left"}>
                <ImageColComponent {...props} />
                <DescriptionColComponent {...props} />
              </If>
            </Row>
          </Container>
        </PageContainer>
      </LargeComponentContainer>
    </StyledImageWithDescription>
  );
};

ImageWithDescription.defaultProps = {
  elements: [],
};

export default ImageWithDescription;
