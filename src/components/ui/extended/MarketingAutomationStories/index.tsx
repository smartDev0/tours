import React from "react";
import HorizontalStoriesMenu from "components/ui/base/HorizontalStoriesMenu";
import { useTranslation } from "react-i18next";

const MarketingAutomationStories = () => {
  const { t } = useTranslation();

  const elements = [
    {
      title: t("components.ui.extended.MarketingAutomationStories.leads"),
      story: {
        relativePath: "pages/features/live-chat-engagement/pre-chat-survey.mov",
      },
    },
    {
      title: t("components.ui.extended.MarketingAutomationStories.campaigns"),
      story: {
        relativePath: "pages/features/crm/contact-list-builder.mp4",
      },
    },
    {
      title: t("components.ui.extended.MarketingAutomationStories.funnels"),
      story: {
        relativePath:
          "pages/features/marketing-funnel/marketing-automation-funnel-template-builder.mp4",
      },
    },
  ];

  return (
    <HorizontalStoriesMenu
      title={t(
        "components.ui.extended.MarketingAutomationStories.marketingAutomation"
      )}
      paragraph={t(
        "components.ui.extended.MarketingAutomationStories.paragraph"
      )}
      elements={elements}
      storiesPosition={"right"}
      cta={{
        text: t(
          "components.ui.extended.MarketingAutomationStories.discoverMore"
        ),
        link: "/solutions/marketing-automation/",
      }}
    />
  );
};

export default MarketingAutomationStories;
