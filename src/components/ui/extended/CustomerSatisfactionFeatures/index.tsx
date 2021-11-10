import React from "react";
import { useTranslation } from "react-i18next";
import FeatureGrid from "components/ui/base/FeatureGrid";

export interface CustomerSatisfactionFeaturesProps {
  customTitle?: string;
}

const CustomerSatisfactionFeatures = ({
  customTitle,
}: CustomerSatisfactionFeaturesProps) => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t(
        "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.title"
      ),
      description: t(
        "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.description"
        ),
        relativePath: "icons/surveys.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.surveys"
          ),
          path: "/features/surveys/",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.surveysTemplates"
          ),
          path: "/features/surveys/#surveys-templates",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.advancedTargeting"
          ),
          path: "/features/surveys/#advanced-targeting",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.gotoQuestion"
          ),
          path: "/features/surveys/#goto-question",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.reports"
          ),
          path: "/features/surveys/#reports",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.inChatSurveys.links.userLevelAnswer"
          ),
          path: "/features/surveys/#user-level-answer",
        },
      ],
    },
    {
      title: t("components.ui.extended.CustomerSatisfactionFeatures.NPS.title"),
      description: t(
        "components.ui.extended.CustomerSatisfactionFeatures.NPS.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.MarketingAutomationFeatures.liveChatTools.title"
        ),
        relativePath: "icons/nps.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.NPS.links.npsSurvey"
          ),
          path: "/features/net-promoter-score/",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.NPS.links.advancedSegmentation"
          ),
          path: "/features/net-promoter-score/#advanced-segmentation",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.NPS.links.filterReporting"
          ),
          path: "/features/net-promoter-score/#filter-reporting",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.NPS.links.quickLook"
          ),
          path: "/features/net-promoter-score/#quick-look",
        },
        {
          text: t(
            "components.ui.extended.CustomerSatisfactionFeatures.NPS.links.additionalFeedback"
          ),
          path: "/features/net-promoter-score/#additional-feedback",
        },
      ],
    },
  ];

  return (
    <FeatureGrid
      title={
        customTitle
          ? customTitle
          : t("components.ui.extended.CustomerSatisfactionFeatures.title")
      }
      sections={sections}
    />
  );
};

export default CustomerSatisfactionFeatures;
