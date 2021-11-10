import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageFrancisco = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      quote={t("components.ui.extended.TestimonialWithImageFrancisco.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageFrancisco.quotee")}
      company={"Mirabelle Comunications"}
      image={{
        relativePath: "components/testimonials/francisco.png",
        alt: t("components.ui.extended.TestimonialWithImageFrancisco.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageFrancisco;
