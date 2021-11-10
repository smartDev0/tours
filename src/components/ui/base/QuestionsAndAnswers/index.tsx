import React, { useContext, useState } from "react";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Title } from "components/core/Typography/Title";
import { Subtitle } from "components/core/Typography/Subtitle";
import {
  Answer,
  Description,
  StyledQuestionsAndAnswers,
  Tab,
  Tabs,
} from "./index.style";
import Heading from "components/core/Typography/Heading";
import Icon from "components/core/Icon";
import { TabHeading } from "components/ui/base/HorizontalStoriesMenu/index.style";
import { ThemeContext } from "styled-components";
import Fade from "components/core/Animation/extended/Fade";

export interface QuestionAndAnswersElement {
  question: string;
  answer: string;
}

export interface QuestionAndAnswersProps {
  title: string;
  subtitle?: string;
  description?: string;
  elements: QuestionAndAnswersElement[];
}

const QuestionsAndAnswers = (props: QuestionAndAnswersProps) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const themeContext = useContext(ThemeContext);

  return (
    <StyledQuestionsAndAnswers>
      <MediumComponentContainer>
        <PageContainer>
          {props.subtitle && (
            <Fade direction={"up"}>
              <Subtitle>{props.subtitle}</Subtitle>
            </Fade>
          )}
          <Fade direction={"up"}>
            <Title>{props.title}</Title>
          </Fade>
          {props.description && (
            <Fade direction={"up"}>
              <Description>{props.description}</Description>
            </Fade>
          )}
          <Tabs>
            {props.elements.map((element, i) => {
              return (
                <Fade direction={"up"} key={i}>
                  <Tab
                    active={activeQuestion === i}
                    key={i}
                    onClick={() => setActiveQuestion(i)}
                  >
                    <TabHeading>
                      <Icon
                        type={"chevron-right"}
                        size={20}
                        fill={themeContext.titleColor}
                      />
                      <Heading level={3} weight={600}>
                        {element.question}
                      </Heading>
                    </TabHeading>
                    <Fade show={activeQuestion === i}>
                      <Answer>{element.answer}</Answer>
                    </Fade>
                  </Tab>
                </Fade>
              );
            })}
          </Tabs>
        </PageContainer>
      </MediumComponentContainer>
    </StyledQuestionsAndAnswers>
  );
};

export default QuestionsAndAnswers;
