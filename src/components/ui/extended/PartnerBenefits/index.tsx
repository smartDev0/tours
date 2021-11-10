import React from "react";
import ImageWithDescription from "components/ui/base/ImageWithDescription";
import { useTranslation } from "react-i18next";

const PartnerBenefits = () => {
  const { t } = useTranslation();

  const iconSize = 52;
  const iconColor = "#344967";

  return (
    <ImageWithDescription
      title={t("components.ui.extended.PartnerBenefits.title")}
      image={{
        relativePath: "components/agencies/partner.png",
        alt: "Partner",
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
          title: t("components.ui.extended.PartnerBenefits.1.title"),
          description: t(
            "components.ui.extended.PartnerBenefits.1.description"
          ),
        },
        {
          icon: {
            type: "check-circle",
            size: iconSize,
            color: iconColor,
          },
          title: t("components.ui.extended.PartnerBenefits.2.title"),
          description: t(
            "components.ui.extended.PartnerBenefits.2.description"
          ),
        },
        {
          icon: {
            type: "check-circle",
            size: iconSize,
            color: iconColor,
          },
          title: t("components.ui.extended.PartnerBenefits.3.title"),
          description: t(
            "components.ui.extended.PartnerBenefits.3.description"
          ),
        },
      ]}
    />
  );
};

export default PartnerBenefits;
