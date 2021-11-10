import React from "react";
import Fade from "components/core/Animation/extended/Fade";
import {
  StyledNews,
  StyledNewsTag,
  Arrow,
  ArrowBottom,
  ArrowCenter,
  ArrowTop,
} from "./index.style";
import { useTranslation } from "react-i18next";
import SafeLink from "components/core/SafeLink";

export interface NewsProps {
  text: string;
  relativePath?: string;
}

const NewsComponent = (props: NewsProps) => {
  return (
    <StyledNews>
      <StyledNewsTag>New</StyledNewsTag>
      {props.text}

      {props.relativePath && (
        <Arrow>
          <ArrowTop />
          <ArrowBottom />
          <ArrowCenter />
        </Arrow>
      )}
    </StyledNews>
  );
};

const News = (props: NewsProps) => {
  const { t } = useTranslation();

  return (
    <Fade direction={"up"}>
      {props.relativePath && (
        <SafeLink to={props.relativePath}>
          <NewsComponent {...props} />
        </SafeLink>
      )}

      {!props.relativePath && <NewsComponent {...props} />}
    </Fade>
  );
};

export default News;
