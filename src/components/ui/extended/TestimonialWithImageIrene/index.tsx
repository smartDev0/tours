import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageIrene = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      quote={t("components.ui.extended.TestimonialWithImageIrene.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageIrene.quotee")}
      company={"Shampora"}
      image={{
        relativePath: "components/testimonials/irene.png",
        alt: t("components.ui.extended.TestimonialWithImageIrene.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageIrene;
