import React from "react";
import {
  ImageWrapper,
  ImgContainer,
  OuterContainer,
  StyledCTASection,
  TextCol,
  WrapperContainer,
} from "./index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Title } from "components/core/Typography/Title";
import Button from "components/core/Button";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Fade from "components/core/Animation/extended/Fade";
import SafeLink from "components/core/SafeLink";

export interface CTASectionProps {
  title: string;
  image?: {
    relativePath?: string;
    data?: IGatsbyImageData;
    alt: string;
  };
  button: {
    text: string;
    path: string;
  };
}

const CTASection = (props: CTASectionProps) => {
  return (
    <StyledCTASection>
      <MediumComponentContainer>
        <Fade direction={"up"}>
          <OuterContainer>
            <WrapperContainer>
              <PageContainer>
                <Container>
                  <Row>
                    {props.image?.data && (
                      <Col hiddenMdUp>
                        <ImgContainer>
                          <GatsbyImage
                            alt={props.image.alt}
                            image={props.image.data}
                          />
                        </ImgContainer>
                      </Col>
                    )}
                  </Row>
                  <Row>
                    <TextCol lg={8} md={6}>
                      <Title>{props.title}</Title>
                      <SafeLink to={props.button.path}>
                        <Button inverted fullWidth>
                          {props.button.text}
                        </Button>
                      </SafeLink>
                    </TextCol>
                  </Row>
                </Container>
              </PageContainer>

              <ImageWrapper>
                {props.image?.data && (
                  <GatsbyImage alt={props.image.alt} image={props.image.data} />
                )}
              </ImageWrapper>
            </WrapperContainer>
          </OuterContainer>
        </Fade>
      </MediumComponentContainer>
    </StyledCTASection>
  );
};

export default CTASection;
