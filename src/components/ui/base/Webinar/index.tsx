import React from "react";
import {
  CoverContainer,
  CTAContainer,
  DurationContainer,
  HostImageContainer,
  StyledWebinar,
  WebinarDescription,
  WebinarTitle,
} from "./index.style";
import { Webinar as WebinarType } from "app-types/webinar";
import Icon from "components/core/Icon";
import { GatsbyImage } from "gatsby-plugin-image";
import { WEBINARS_PATH } from "constants/paths";
import { useTranslation } from "react-i18next";
import SafeLink from "components/core/SafeLink";

export interface WebinarProps {
  webinar: WebinarType;
}

const Webinar = ({ webinar, ...rest }: WebinarProps) => {
  const { t } = useTranslation();

  return (
    <StyledWebinar>
      <SafeLink to={`${WEBINARS_PATH}/${webinar.slug}/`}>
        <CoverContainer>
          <HostImageContainer>
            <GatsbyImage
              alt={webinar.hostName}
              image={
                webinar.hostImage.localFile.childImageSharp.gatsbyImageData
              }
            />
          </HostImageContainer>
          <DurationContainer>{webinar.durationMinutes} min</DurationContainer>
          <GatsbyImage
            alt={webinar.title}
            image={webinar.image.localFile.childImageSharp.gatsbyImageData}
          />
        </CoverContainer>
      </SafeLink>
      <WebinarTitle>
        <SafeLink to={`${WEBINARS_PATH}/${webinar.slug}/`}>
          {webinar.title}
        </SafeLink>
      </WebinarTitle>
      <WebinarDescription>{webinar.shortDescription}</WebinarDescription>
      <CTAContainer>
        <SafeLink to={`${WEBINARS_PATH}/${webinar.slug}/`}>
          {t("components.ui.base.Webinar.watchNow")}{" "}
          <Icon type={"chevron-right"} size={12} />
        </SafeLink>
      </CTAContainer>
    </StyledWebinar>
  );
};

export default Webinar;
