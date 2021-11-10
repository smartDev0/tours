import React from "react";
import { PageContainer, SmallComponentContainer } from "styles/global.style";
import {
  CenteredCol,
  CustomInputCTA,
  OuterContainer,
  StyledBlogSubscribe,
  TitleCol,
  WrapperContainer,
} from "components/ui/base/BlogSubscribe/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { useTranslation } from "react-i18next";
import { Title } from "components/core/Typography/Title";
import Fade from "components/core/Animation/extended/Fade";
import { useSendForm } from "networking/useForms";

export interface BlogSubscribeProps {}

const BlogSubscribe = (props: BlogSubscribeProps) => {
  const { t } = useTranslation();
  const sendForm = useSendForm();

  const onSubscribe = (value: string) => {
    return sendForm(value, {
      utm_source: "Customerly",
      utm_medium: "blog",
      utm_campaign: "blogHomePage",
    });
  };

  return (
    <StyledBlogSubscribe>
      <SmallComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Fade direction={"down"}>
                  <Row>
                    <TitleCol sm={12} md={6}>
                      <Title>
                        {t("components.ui.base.BlogSubscribe.title")}
                      </Title>
                    </TitleCol>
                    <CenteredCol sm={12} md={6}>
                      <CustomInputCTA
                        placeholder={t(
                          "components.ui.extended.RegisterCTA.placeholder"
                        )}
                        buttonText={t(
                          "components.ui.extended.RegisterCTA.buttonText"
                        )}
                        onSubmit={onSubscribe}
                        inputType={"email"}
                      />
                    </CenteredCol>
                  </Row>
                </Fade>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </SmallComponentContainer>
    </StyledBlogSubscribe>
  );
};

export default BlogSubscribe;
