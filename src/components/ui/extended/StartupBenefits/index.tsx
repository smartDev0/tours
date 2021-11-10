import React from "react";
import ImageWithDescription from "components/ui/base/ImageWithDescription";
import { useTranslation } from "react-i18next";

const StartupBenefits = () => {
  const { t } = useTranslation();

  const iconSize = 52;
  const iconColor = "#344967";

  return (
    <ImageWithDescription
      title={t("components.ui.extended.StartupBenefits.title")}
      image={{
        relativePath: "components/startups/startup.png",
        alt: "Benefits",
        position: "left",
        fullWidth: true,
      }}
      elements={[
        {
          icon: {
            type: "check-circle",
            size: iconSize,
            color: iconColor,
          },
          title: t("components.ui.extended.StartupBenefits.1.title"),
          description: t(
            "components.ui.extended.StartupBenefits.1.description"
          ),
        },
        {
          icon: {
            type: "check-circle",
            size: iconSize,
            color: iconColor,
          },
          title: t("components.ui.extended.StartupBenefits.2.title"),
          description: t(
            "components.ui.extended.StartupBenefits.2.description"
          ),
        },
        {
          icon: {
            type: "check-circle",
            size: iconSize,
            color: iconColor,
          },
          title: t("components.ui.extended.StartupBenefits.3.title"),
          description: t(
            "components.ui.extended.StartupBenefits.3.description"
          ),
        },
      ]}
    />
  );
};

export default StartupBenefits;
