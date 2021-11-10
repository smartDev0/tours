import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageDaniele = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      url={"/success-stories/fattureincloud/"}
      quote={t("components.ui.extended.TestimonialWithImageDaniele.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageDaniele.quotee")}
      company={"Fatture In Cloud"}
      image={{
        relativePath: "components/testimonials/daniele.png",
        alt: t("components.ui.extended.TestimonialWithImageDaniele.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageDaniele;
