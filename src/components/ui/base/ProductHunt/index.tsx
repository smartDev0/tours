import React from "react";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  ButtonContainer,
  CenteredCol,
  LogoContainer,
  OuterContainer,
  StyledProductHunt,
  TitleCol,
  WrapperContainer,
} from "components/ui/base/ProductHunt/index.style";
import { Container, Row } from "styled-bootstrap-grid";
import { useTranslation } from "react-i18next";
import { Title } from "components/core/Typography/Title";
import Fade from "components/core/Animation/extended/Fade";
import StaticSvg from "components/core/StaticSvg";
import StaticImg from "components/core/StaticImg";

export interface ProductHuntProps {
  url: string;
}

const ProductHunt = (props: ProductHuntProps) => {
  const { t } = useTranslation();

  return (
    <StyledProductHunt>
      <MediumComponentContainer>
        <OuterContainer>
          <WrapperContainer>
            <PageContainer>
              <Container>
                <Fade direction={"down"}>
                  <Row>
                    <TitleCol sm={12} md={9}>
                      <LogoContainer>
                        <StaticImg
                          maxWidth={100}
                          alt={"Product Hunt"}
                          src={"components/product-hunt/logo.png"}
                        />
                      </LogoContainer>
                      <Title>{t("components.ui.base.ProductHunt.title")}</Title>
                    </TitleCol>
                    <CenteredCol sm={12} md={3}>
                      <ButtonContainer>
                        <a href={props.url} target="_blank">
                          <StaticSvg
                            src={"components/product-hunt/3.svg"}
                            alt={"Product Hunt"}
                          />
                        </a>
                      </ButtonContainer>
                    </CenteredCol>
                  </Row>
                </Fade>
              </Container>
            </PageContainer>
          </WrapperContainer>
        </OuterContainer>
      </MediumComponentContainer>
    </StyledProductHunt>
  );
};

export default ProductHunt;
