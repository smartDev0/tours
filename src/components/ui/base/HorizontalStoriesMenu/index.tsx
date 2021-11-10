import React, { useContext, useEffect, useState } from "react";
import {
  LargeComponentContainer,
  PageContainer,
  UnderlinedLink,
} from "styles/global.style";
import {
  CTA,
  StoriesCol,
  StyledHorizontalStoriesMenu,
  Tab,
  TabDescription,
  TabHeading,
  Tabs,
  TabsCol,
  TabsNav,
} from "components/ui/base/HorizontalStoriesMenu/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { Title } from "components/core/Typography/Title";
import { Subtitle } from "components/core/Typography/Subtitle";
import Stories, { Story } from "components/core/Stories";
import { useInView } from "react-intersection-observer";
import Heading from "components/core/Typography/Heading";
import Icon from "components/core/Icon";
import { ThemeContext } from "styled-components";
import Fade from "components/core/Animation/extended/Fade";
import { Position } from "app-types/position";
import SafeLink from "components/core/SafeLink";

export interface HorizontalStoriesElement {
  title: string;
  description?: string;
  icon?: string;
  story: Story;
}

export interface HorizontalStoriesMenuProps {
  id?: string;
  title: string;
  subtitle?: string;
  paragraph?: string;
  cta?: {
    text: string;
    link: string;
  };
  storiesPosition?: Position;
  elements: HorizontalStoriesElement[];
}

const HorizontalStoriesMenu = (props: HorizontalStoriesMenuProps) => {
  const stories = props.elements.map((element) => element.story);
  const [currentStoryIndex, setCurrentStoryIndex] = useState<
    number | undefined
  >(0);
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const themeContext = useContext(ThemeContext);
  const [ref, inView] = useInView({ triggerOnce: true });

  const onChange = (currentId: number) => {
    setCurrentTabIndex(currentId);
    setCurrentStoryIndex(undefined);
  };

  useEffect(() => {
    if (inView) {
      setIsPaused(false);
    }
  }, [inView]);

  return (
    <StyledHorizontalStoriesMenu id={props.id}>
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
                  <Stories
                    stories={stories}
                    currentIndex={currentStoryIndex}
                    onChange={onChange}
                  />
                </Fade>
              </StoriesCol>
              <TabsCol
                md={6}
                mdOrder={
                  props.storiesPosition && props.storiesPosition === "right"
                    ? "first"
                    : undefined
                }
              >
                <Tabs storiesPosition={props.storiesPosition}>
                  <Fade direction={"up"}>
                    {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
                    <Title>{props.title}</Title>
                    {props.paragraph && <p>{props.paragraph}</p>}
                    <TabsNav>
                      {props.elements.map((element, i) => {
                        return (
                          <Tab
                            key={i}
                            active={i === currentTabIndex}
                            onClick={() => {
                              if (i !== currentTabIndex) {
                                setCurrentStoryIndex(i);
                                setCurrentTabIndex(i);
                              }
                            }}
                          >
                            <TabHeading>
                              <Icon
                                type={"chevron-right"}
                                size={20}
                                fill={themeContext.titleColor}
                              />
                              <Heading level={3} weight={600}>
                                {element.title}
                              </Heading>
                            </TabHeading>
                            {element.description && (
                              <Fade show={i === currentTabIndex}>
                                <TabDescription>
                                  {element.description}
                                </TabDescription>
                              </Fade>
                            )}
                          </Tab>
                        );
                      })}
                    </TabsNav>
                    {props.cta && (
                      <CTA>
                        <UnderlinedLink as={SafeLink} to={props.cta.link}>
                          {props.cta.text}
                          <Icon type={"arrow-right"} size={18} />
                        </UnderlinedLink>
                      </CTA>
                    )}
                  </Fade>
                </Tabs>
              </TabsCol>
            </Row>
          </Container>
        </PageContainer>
      </LargeComponentContainer>
    </StyledHorizontalStoriesMenu>
  );
};

export default HorizontalStoriesMenu;
