import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageLeonIntercom = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      quote={t("components.ui.extended.TestimonialWithImageLeonIntercom.quote")}
      quotee={t(
        "components.ui.extended.TestimonialWithImageLeonIntercom.quotee"
      )}
      company={"SocialGest"}
      image={{
        relativePath: "components/testimonials/leon.png",
        alt: t(
          "components.ui.extended.TestimonialWithImageLeonIntercom.quotee"
        ),
      }}
    />
  );
};

export default TestimonialWithImageLeonIntercom;
