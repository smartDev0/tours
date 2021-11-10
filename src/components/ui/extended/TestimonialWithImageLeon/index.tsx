import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageLeon = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      quote={t("components.ui.extended.TestimonialWithImageLeon.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageLeon.quotee")}
      company={"SocialGest"}
      image={{
        relativePath: "components/testimonials/leon.png",
        alt: t("components.ui.extended.TestimonialWithImageLeon.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageLeon;
