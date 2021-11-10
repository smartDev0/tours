import React from "react";
import { useTranslation } from "react-i18next";
import FeatureGrid from "components/ui/base/FeatureGrid";
import { getTrackedRegistrationUrl } from "utils/tracking";

interface MarketingAutomationAltFeaturesProps {
  location: Location;
}

const MarketingAutomationAltFeatures = ({
  location,
}: MarketingAutomationAltFeaturesProps) => {
  const { t } = useTranslation();

  return (
    <FeatureGrid
      id={"funnel-templates"}
      title={t("pages.features.marketing-funnel.templates.title")}
      alternativeColors={true}
      sections={[
        "onboard",
        "review",
        "understand",
        "appReview",
        "churn",
        "clean",
      ].map((index) => {
        return {
          title: t(`pages.features.marketing-funnel.templates.${index}.title`),
          description: t(
            `pages.features.marketing-funnel.templates.${index}.description`
          ),
          links: [
            {
              text: t(`pages.features.marketing-funnel.templates.${index}.cta`),
              path: getTrackedRegistrationUrl(
                t(`pages.features.marketing-funnel.templates.${index}.cta`),
                location.pathname
              ),
            },
          ],
        };
      })}
      button={{
        text: t("pages.features.marketing-funnel.templates.cta"),
        path: getTrackedRegistrationUrl(
          t("pages.features.marketing-funnel.templates.cta"),
          location.pathname
        ),
      }}
    />
  );
};

export default MarketingAutomationAltFeatures;
