import React from "react";
import { Row } from "styled-bootstrap-grid";
import { HeaderContainer, PageContainer } from "styles/global.style";
import Heading from "components/core/Typography/Heading";
import {
  CTAButton,
  Description,
  PlainHeaderWithVideoCenteredCol,
  PlainHeaderWithVideoCol,
  PlainHeaderWithVideoContainer,
  StyledPlainHeaderWithVideo,
  Video,
  VideoContainer,
  VideoEmbed,
  VideoInnerContainer,
} from "./index.style";
import RegisterCTA from "components/ui/extended/RegisterCTA";
import Fade from "components/core/Animation/extended/Fade";
import { Justify } from "styled-bootstrap-grid/dist/components/Row/types";
import SafeLink from "components/core/SafeLink";
import { IconType } from "components/core/Icon";
import scrollTo from "gatsby-plugin-smoothscroll";
import Breadcrumbs, { BreadCrumb } from "components/core/Breadcrumbs";
import News from "components/ui/base/News";
import { CTAColor } from "app-types/color";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

interface PlainHeaderWithVideoProps {
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
  };
  ctaButton?: {
    show: boolean;
    text: string;
    icon?: IconType;
    path: string;
  };
  wistia?: {
    id: string;
  };
  video?: {
    path: string;
  };
}

export interface PlainHeaderWithVideoQueryResult {
  videos: {
    nodes: {
      relativePath: string;
      videoVP9: {
        path: string;
      };
      videoH265: {
        path: string;
      };
    }[];
  };
}

const PlainHeaderWithVideo = (props: PlainHeaderWithVideoProps) => {
  const { videos }: PlainHeaderWithVideoQueryResult = useStaticQuery(graphql`
    query {
      videos: allFile(filter: { sourceInstanceName: { eq: "videos" } }) {
        nodes {
          relativePath
          videoVP9 {
            path
          }
          videoH265 {
            path
          }
        }
      }
    }
  `);

  const video =
    props.video &&
    videos.nodes.find((video) => video.relativePath === props.video?.path);

  const h265Path = video?.videoH265.path;
  const vp9Path = video?.videoVP9.path;

  return (
    <StyledPlainHeaderWithVideo>
      <HeaderContainer>
        <PageContainer>
          <PlainHeaderWithVideoContainer maxWidth={props.maxWidth}>
            <Row>
              <PlainHeaderWithVideoCol>
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
              </PlainHeaderWithVideoCol>
            </Row>
            <Row alignItems={"center"}>
              <PlainHeaderWithVideoCenteredCol>
                <Fade direction={"up"}>
                  <Description
                    dangerouslySetInnerHTML={{ __html: props.description }}
                    maxWidth={props.descriptionMaxWidth}
                  />
                </Fade>
              </PlainHeaderWithVideoCenteredCol>
            </Row>

            {props.ctaButton?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderWithVideoCenteredCol lg={6}>
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
                  </PlainHeaderWithVideoCenteredCol>
                </Row>
              </Fade>
            )}

            {props.ctaRegister?.show && (
              <Fade direction={"up"} delay={400}>
                <Row justifyContent={"center"}>
                  <PlainHeaderWithVideoCenteredCol lg={6}>
                    <RegisterCTA
                      justifyValidation={props.ctaRegister?.justifyValidation}
                      color={props.ctaRegister?.color}
                    />
                  </PlainHeaderWithVideoCenteredCol>
                </Row>
              </Fade>
            )}

            {props.video && (
              <Fade direction={"up"} delay={700}>
                <VideoContainer>
                  <Video playsInline autoPlay loop muted>
                    {vp9Path && <source src={vp9Path} type="video/webm" />}
                    {h265Path && <source src={h265Path} type="video/mp4" />}
                  </Video>
                </VideoContainer>
              </Fade>
            )}

            {props.wistia && (
              <>
                <Helmet>
                  <script
                    src={`https://fast.wistia.com/embed/medias/${props.wistia.id}.jsonp`}
                    async
                  />
                  <script
                    src="https://fast.wistia.com/assets/external/E-v1.js"
                    async
                  />
                </Helmet>

                <Fade direction={"up"} delay={700}>
                  <VideoContainer className="wistia_responsive_padding">
                    <VideoInnerContainer className="wistia_responsive_wrapper">
                      <VideoEmbed
                        className={`wistia_embed wistia_async_${props.wistia.id} popover=true popoverAnimateThumbnail=false videoFoam=true`}
                      >
                        &nbsp;
                      </VideoEmbed>
                    </VideoInnerContainer>
                  </VideoContainer>
                </Fade>
              </>
            )}
          </PlainHeaderWithVideoContainer>
        </PageContainer>
      </HeaderContainer>
    </StyledPlainHeaderWithVideo>
  );
};

export default PlainHeaderWithVideo;
