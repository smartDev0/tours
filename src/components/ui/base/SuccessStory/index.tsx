import React from "react";
import {
  CoverContainer,
  CTAContainer,
  StyledSuccessStory,
  SuccessStoryDescription,
  SuccessStoryTitle,
} from "./index.style";
import { SuccessStory as SuccessStoryType } from "app-types/success-story";
import SafeLink from "components/core/SafeLink";
import Icon from "components/core/Icon";
import { SUCCESS_STORIES_PATH } from "constants/paths";
import { useTranslation } from "react-i18next";
import { GatsbyImage } from "gatsby-plugin-image";

export interface SuccessStoryProps {
  successStory: SuccessStoryType;
}

const SuccessStory = ({ successStory, ...rest }: SuccessStoryProps) => {
  const { t } = useTranslation();

  return (
    <StyledSuccessStory>
      <SafeLink to={`${SUCCESS_STORIES_PATH}/${successStory.slug}/`}>
        <CoverContainer>
          <GatsbyImage
            alt={successStory.name}
            image={successStory.cover.localFile.childImageSharp.gatsbyImageData}
          />
        </CoverContainer>
      </SafeLink>
      <SuccessStoryTitle>
        <SafeLink to={`${SUCCESS_STORIES_PATH}/${successStory.slug}/`}>
          {successStory.name}
        </SafeLink>
      </SuccessStoryTitle>
      <SuccessStoryDescription>{successStory.result}</SuccessStoryDescription>
      <CTAContainer>
        <SafeLink to={`${SUCCESS_STORIES_PATH}/${successStory.slug}/`}>
          {t("components.ui.base.SuccessStory.readMore")}{" "}
          <Icon type={"chevron-right"} size={12} />
        </SafeLink>
      </CTAContainer>
    </StyledSuccessStory>
  );
};

export default SuccessStory;
