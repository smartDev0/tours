import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  MediumComponentContainer,
  PageContainer,
  UnderlinedLink,
} from "styles/global.style";
import {
  ButtonCol,
  Feature,
  FeatureCol,
  FeatureColInner,
  FeatureGridDescription,
  FeatureGridTitle,
  FeatureList,
  ImgContainer,
  StyledFeatureGrid,
} from "./index.style";
import Heading from "components/core/Typography/Heading";
import SafeLink from "components/core/SafeLink";
import Icon from "components/core/Icon";
import Loop from "components/core/Loop";
import StaticImg from "components/core/StaticImg";
import Button from "components/core/Button";

interface SectionLink {
  text: string;
  path: string;
}

interface Section {
  title: string;
  image?: {
    relativePath: string;
    alt: string;
  };
  description?: string;
  links?: SectionLink[];
}

interface FeatureGridProps {
  id?: string;
  title: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  description?: string;
  centered?: boolean;
  centeredTitle?: boolean;
  mediumImages?: boolean;
  bigImages?: boolean;
  alternativeColors?: boolean;
  button?: {
    text: string;
    path: string;
  };
  sections: Section[];
}

const FeatureGrid = (props: FeatureGridProps) => {
  const titleLevel = props.titleLevel ? props.titleLevel : 2;

  return (
    <StyledFeatureGrid
      id={props.id}
      centered={props.centered}
      centeredTitle={props.centeredTitle}
      alternativeColors={props.alternativeColors}
    >
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <Col>
                <FeatureGridTitle level={titleLevel}>
                  {props.title}
                </FeatureGridTitle>
                {props.description && (
                  <FeatureGridDescription>
                    {props.description}
                  </FeatureGridDescription>
                )}
              </Col>
            </Row>
            <Row justifyContent={props.centered ? "center" : "start"}>
              <Loop items={props.sections}>
                {(section) => (
                  <FeatureCol key={section.title} lg={4} md={6} sm={12}>
                    <FeatureColInner>
                      {section.image && (
                        <ImgContainer
                          mediumImage={props.mediumImages}
                          bigImage={props.bigImages}
                        >
                          <StaticImg
                            alt={section.image.alt}
                            src={section.image.relativePath}
                          />
                        </ImgContainer>
                      )}
                      <Heading level={3}>{section.title}</Heading>
                      {section.description && <p>{section.description}</p>}
                      {section.links && (
                        <FeatureList>
                          <Loop items={section.links}>
                            {(link) => (
                              <Feature key={link.text}>
                                <UnderlinedLink as={SafeLink} to={link.path}>
                                  {link.text}
                                  <Icon type={"arrow-right"} size={16} />
                                </UnderlinedLink>
                              </Feature>
                            )}
                          </Loop>
                        </FeatureList>
                      )}
                    </FeatureColInner>
                  </FeatureCol>
                )}
              </Loop>
            </Row>
            {props.button && (
              <Row justifyContent={"center"}>
                <ButtonCol lg={6} md={6} sm={12}>
                  <Button as={SafeLink} to={props.button.path}>
                    {props.button.text}
                  </Button>
                </ButtonCol>
              </Row>
            )}
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledFeatureGrid>
  );
};

export default FeatureGrid;
