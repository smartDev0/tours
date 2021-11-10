import React from "react";
import { useTranslation } from "react-i18next";
import TestimonialWithImage from "components/ui/base/TestimonialWithImage";

const TestimonialWithImageFrancesca = () => {
  const { t } = useTranslation();

  return (
    <TestimonialWithImage
      url={"/success-stories/fattureincloud/"}
      quote={t("components.ui.extended.TestimonialWithImageFrancesca.quote")}
      quotee={t("components.ui.extended.TestimonialWithImageFrancesca.quotee")}
      company={"Fatture In Cloud"}
      image={{
        relativePath: "components/testimonials/francesca.png",
        alt: t("components.ui.extended.TestimonialWithImageFrancesca.quotee"),
      }}
    />
  );
};

export default TestimonialWithImageFrancesca;
