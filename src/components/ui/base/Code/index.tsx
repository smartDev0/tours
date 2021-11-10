import React from "react";
import {
  MediumComponentContainer,
  PageContainer,
  UnderlinedLink,
} from "styles/global.style";
import { Col, Container, Row } from "styled-bootstrap-grid";
import {
  CodeCol,
  CodeContainer,
  CTAContainer,
  StyledCode,
} from "./index.style";
import { useTranslation } from "react-i18next";
import { Title } from "components/core/Typography/Title";
import Fade from "components/core/Animation/extended/Fade";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import SafeLink from "components/core/SafeLink";
import Icon from "components/core/Icon";

export interface CodeProps {
  id?: string;
  title: string;
  description: string;
  centered?: boolean;
  button?: {
    text: string;
    path: string;
  };
  children: any;
}

const Code = (props: CodeProps) => {
  const { t } = useTranslation();

  return (
    <StyledCode centered={props.centered} id={props.id}>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <Col>
                <Title>{props.title}</Title>
                <p dangerouslySetInnerHTML={{ __html: props.description }} />
              </Col>
            </Row>
            {props.button && (
              <Row justifyContent={"center"}>
                <Col lg={4} md={6} sm={12}>
                  <CTAContainer>
                    <UnderlinedLink as={SafeLink} to={props.button.path}>
                      {props.button.text}
                      <Icon type={"arrow-right"} size={16} />
                    </UnderlinedLink>
                  </CTAContainer>
                </Col>
              </Row>
            )}
            <Row>
              <CodeCol centered={props.centered}>
                <Fade direction={"up"}>
                  <CodeContainer>
                    <SyntaxHighlighter
                      wrapLongLines={true}
                      language="javascript"
                      style={vs2015}
                      customStyle={{ padding: 24 }}
                    >
                      {props.children}
                    </SyntaxHighlighter>
                  </CodeContainer>
                </Fade>
              </CodeCol>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledCode>
  );
};

Code.defaultProps = {
  centered: false,
};

export default Code;
