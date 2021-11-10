import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageMichele = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      quote={t("components.ui.extended.TestimonialWithImageMichele.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageMichele.quotee")}
      image={{
        relativePath: "components/testimonials/michele.png",
        alt: t("components.ui.extended.TestimonialWithImageMichele.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageMichele;
