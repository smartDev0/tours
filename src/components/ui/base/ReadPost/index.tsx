import React from "react";
import { PageContainer } from "styles/global.style";
import {
  Arrow,
  ArrowBottom,
  ArrowCenter,
  ArrowTop,
  Divider,
  OuterContainer,
  PostContainer,
  PostInnerContainer,
  SpanHideMobile,
  StyledReadPost,
  WrapperContainer,
} from "./index.style";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "gatsby";

export interface ReadPostProps {
  title: string;
  path: string;
}

const ReadPost = (props: ReadPostProps) => {
  const { t } = useTranslation();

  return (
    <StyledReadPost>
      <OuterContainer>
        <WrapperContainer>
          <PageContainer>
            <PostContainer>
              <Link to={props.path}>
                <PostInnerContainer>
                  <Trans i18nKey="components.ui.base.ReadPost.readMore">
                    Read <SpanHideMobile>more</SpanHideMobile>
                  </Trans>
                  <Divider>•</Divider>
                  {props.title}

                  <Arrow>
                    <ArrowTop />
                    <ArrowBottom />
                    <ArrowCenter />
                  </Arrow>
                </PostInnerContainer>
              </Link>
            </PostContainer>
          </PageContainer>
        </WrapperContainer>
      </OuterContainer>
    </StyledReadPost>
  );
};

export default ReadPost;
