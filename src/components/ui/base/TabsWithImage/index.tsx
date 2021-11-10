import React, { useState } from "react";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  Description,
  DescriptionCol,
  ImgContainer,
  StyledTabsWithImage,
  TabContainer,
  TabOuterContainer,
  TitleCol,
} from "components/ui/base/TabsWithImage/index.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Fade from "components/core/Animation/extended/Fade";
import Loop from "components/core/Loop";
import { Title } from "components/core/Typography/Title";
import StaticImg from "components/core/StaticImg";

export interface TabElement {
  name: string;
  title: string;
  description?: string;
  relativePath: string;
}

export interface TabsWithImageProps {
  id?: string;
  tabs: TabElement[];
}

const TabsWithImage = (props: TabsWithImageProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

  return (
    <StyledTabsWithImage id={props.id}>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <TitleCol>
                <Fade direction={"up"}>
                  <Title>{props.tabs[currentTabIndex].title}</Title>
                </Fade>
              </TitleCol>
            </Row>
            {props.tabs[currentTabIndex].description && (
              <Row alignItems={"center"}>
                <DescriptionCol>
                  <Fade direction={"up"}>
                    <Description>
                      {props.tabs[currentTabIndex].description}
                    </Description>
                  </Fade>
                </DescriptionCol>
              </Row>
            )}

            <Fade direction={"up"}>
              <TabOuterContainer>
                <Loop items={props.tabs}>
                  {(tab, idx) => (
                    <TabContainer
                      key={`tab-${idx}`}
                      onClick={() => setCurrentTabIndex(idx)}
                      isActive={idx === currentTabIndex}
                    >
                      {tab.name}
                    </TabContainer>
                  )}
                </Loop>
              </TabOuterContainer>
            </Fade>

            <Row>
              <Col>
                <Loop items={props.tabs}>
                  {(tab, idx) => (
                    <ImgContainer isActive={idx === currentTabIndex}>
                      <StaticImg
                        key={`img-${idx}`}
                        alt={tab.title}
                        src={tab.relativePath}
                      />
                    </ImgContainer>
                  )}
                </Loop>
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledTabsWithImage>
  );
};

export default TabsWithImage;
