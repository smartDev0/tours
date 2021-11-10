import React from "react";
import NumberSteps from "components/ui/base/NumberSteps";
import { useTranslation } from "react-i18next";

const PartnerSteps = () => {
  const { t } = useTranslation();

  return (
    <NumberSteps
      title={t("components.ui.extended.PartnerSteps.title")}
      description={t("components.ui.extended.PartnerSteps.description")}
      elements={[1, 2, 3, 4].map((index) => {
        return {
          title: t(
            `components.ui.extended.PartnerSteps.elements.${index}.title`
          ),
          description: t(
            `components.ui.extended.PartnerSteps.elements.${index}.description`
          ),
        };
      })}
    />
  );
};

export default PartnerSteps;
