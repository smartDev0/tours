import React from "react";
import NumberSteps from "components/ui/base/NumberSteps";
import { useTranslation } from "react-i18next";

const StartupSteps = () => {
  const { t } = useTranslation();

  return (
    <NumberSteps
      title={t("components.ui.extended.StartupSteps.title")}
      description={t("components.ui.extended.StartupSteps.description")}
      elements={[1, 2, 3, 4].map((index) => {
        return {
          title: t(
            `components.ui.extended.StartupSteps.elements.${index}.title`
          ),
          description: t(
            `components.ui.extended.StartupSteps.elements.${index}.description`
          ),
        };
      })}
    />
  );
};

export default StartupSteps;
