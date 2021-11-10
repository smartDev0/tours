import React, { useEffect, useState } from "react";
import {
  LargeComponentContainer,
  PageContainer,
  UnderlinedLink,
} from "styles/global.style";
import {
  CTA,
  StoriesCol,
} from "components/ui/base/HorizontalStoriesMenu/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { Title } from "components/core/Typography/Title";
import { Subtitle } from "components/core/Typography/Subtitle";
import Stories, { Story } from "components/core/Stories";
import { useInView } from "react-intersection-observer";
import Icon from "components/core/Icon";
import Fade from "components/core/Animation/extended/Fade";
import SafeLink from "components/core/SafeLink";
import { Position } from "app-types/position";
import { Description, DescriptionCol, StyledVideoPreview } from "./index.style";

export interface VideoPreviewProps {
  id?: string;
  title: string;
  subtitle?: string;
  paragraph?: string;
  cta?: {
    text: string;
    link: string;
  };
  storiesPosition?: Position;
  stories: Story[];
}

const VideoPreview = (props: VideoPreviewProps) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setIsPaused(false);
    }
  }, [inView]);

  return (
    <StyledVideoPreview id={props.id}>
      <LargeComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <StoriesCol
                md={6}
                ref={ref}
                mdOrder={
                  props.storiesPosition && props.storiesPosition === "right"
                    ? "last"
                    : undefined
                }
              >
                <Fade direction={"up"}>
                  <Stories stories={props.stories} />
                </Fade>
              </StoriesCol>
              <DescriptionCol
                md={6}
                mdOrder={
                  props.storiesPosition && props.storiesPosition === "right"
                    ? "first"
                    : undefined
                }
              >
                <Description storiesPosition={props.storiesPosition}>
                  <Fade direction={"up"}>
                    {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
                    <Title>{props.title}</Title>
                    {props.paragraph && <p>{props.paragraph}</p>}
                    {props.cta && (
                      <CTA>
                        <UnderlinedLink as={SafeLink} to={props.cta.link}>
                          {props.cta.text}
                          <Icon type={"arrow-right"} size={18} />
                        </UnderlinedLink>
                      </CTA>
                    )}
                  </Fade>
                </Description>
              </DescriptionCol>
            </Row>
          </Container>
        </PageContainer>
      </LargeComponentContainer>
    </StyledVideoPreview>
  );
};

export default VideoPreview;
