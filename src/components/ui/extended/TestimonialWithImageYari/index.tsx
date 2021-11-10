import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageYari = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      url={"/success-stories/notjustanalytics/"}
      quote={t("components.ui.extended.TestimonialWithImageYari.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageYari.quotee")}
      company={"Not Just Analytics"}
      image={{
        relativePath: "components/testimonials/yari.png",
        alt: t("components.ui.extended.TestimonialWithImageYari.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageYari;
